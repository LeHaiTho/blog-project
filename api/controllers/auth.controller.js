import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (
        !username ||
        !password ||
        !email ||
        password === "" ||
        email === "" ||
        username === ""
    ) {
        next(errorHandler(400, "All fields required"));
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
        next(error);
    }
};
