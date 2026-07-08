import { getDB } from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongodb";
export async function registerUser(userData) {
    // Extract values from request body
    const { name, email, password } = userData;

    // Validate input
    if (!name || !email || !password) {
        throw new Error("All fields are required");
    }

    // Get database connection
    const db = getDB();

    // Get users collection
    const usersCollection = db.collection("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({
        email: email
    });

    if (existingUser) {
        throw new Error("Email already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = {
    name,
    email,
    password: hashedPassword,
    createdAt: new Date()
    };
    await usersCollection.insertOne(newUser);

    return {
    success: true,
    message: "User registered successfully"
    };
}
export async function loginUser(userData) {

    const { email, password } = userData;

    // Validation
    if (!email || !password) {
        throw new Error("Email and Password are required");
    }

    const db = getDB();
    const usersCollection = db.collection("users");

    // Find User
    const user = await usersCollection.findOne({
        email: email
    });

    if (!user) {
        throw new Error("Invalid Email or Password");
    }

    // Compare Password
    const isPasswordValid = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordValid) {
        throw new Error("Invalid Email or Password");
    }

    // Generate JWT
    const token = jwt.sign(
        {
            userId: user._id,
            email: user.email
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );

    // Return Response
    return {
        success: true,
        message: "Login Successful",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    };
}
export async function getProfile(userId) {

    const db = getDB();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne(
        {
            _id: new ObjectId(userId)
        },
        {
            projection: {
                password: 0
            }
        }
    );

    return user;
}