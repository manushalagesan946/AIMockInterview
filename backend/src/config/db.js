import { MongoClient } from "mongodb";

let database;

export async function connectDB() {
    try {
        const uri = process.env.MONGODB_URI;

        if (!uri) {
            throw new Error("MONGODB_URI is missing in .env");
        }

        const client = new MongoClient(uri);

        await client.connect();

        database = client.db("ai_mock_interview");

        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

export function getDB() {
    return database;
}