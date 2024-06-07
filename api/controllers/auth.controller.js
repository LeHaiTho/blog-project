import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (
        !username ||
        !password ||
        !email ||
        password === "" ||
        email === "" ||
        username === ""
    ) {
        return res.status(404).json({ message: "All fields must be required" });
    }

    const hashedpassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username,
        email,
        password: hashedpassword,
    });

    try {
        await newUser.save();
        res.json({ message: "new user was created successfully" });
    } catch (error) {
        res.status(500).json({ message: "error creating user" });
    }
};
