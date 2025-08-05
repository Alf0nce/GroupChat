const User = require("../models/User");

exports.registerUser = async (req, res) =>{
    const {username} =req.body;

    try {
        let user = await user.findOne({ username});
        if (!user) user = await User.create({ username});
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};