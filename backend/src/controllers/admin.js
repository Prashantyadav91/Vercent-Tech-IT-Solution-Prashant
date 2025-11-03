const Admin = require('../models/admin')
const RevokedToken = require('../models/revokedToken');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET 

const adminSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        if (!name || !email || !password) {
            res.status(500).json({ message: "All fields are required" })
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //admin created
        const admin = new Admin({ name, email, password: hashedPassword })
        await admin.save()

        // Generate JWT Token
        const token = jwt.sign(
            { id: admin._id, email: admin.email },
            process.env.JWT_SECRET, // use env var in production
            { expiresIn: "7d" }
        );
        res.status(201).json({
            message: "Admin created successfully",
            token,
            admin: {
                id: admin._id,
                name: admin.name,
                email: admin.email
            }
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }

}

const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: admin._id, email: admin.email },
      process.env.JWT_SECRET || "mysecretkey",
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email
      }
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const adminLogout = async (req, res) => {
  try {
    // token from Authorization header or body
    const authHeader = req.headers.authorization || '';
    const tokenFromHeader = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;
    const token = tokenFromHeader || req.body.token;

    if (!token) {
      return res.status(400).json({ message: 'No token provided' });
    }

    // decode to get expiry (we do not verify here because token might be expired)
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.exp) {
      // still store short-lived record so token can't be reused
      const fallbackExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000); // 1 day fallback
      await RevokedToken.create({ token, expiresAt: fallbackExpiry });
      return res.status(200).json({ message: 'Logged out' });
    }

    const expiresAt = new Date(decoded.exp * 1000);
    // store token in blacklist
    await RevokedToken.create({ token, expiresAt });

    return res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    console.error('Logout error:', err);
    // if duplicate key (token already revoked) just return success
    if (err.code === 11000) return res.status(200).json({ message: 'Logged out' });
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { adminSignup,adminLogin,adminLogout }