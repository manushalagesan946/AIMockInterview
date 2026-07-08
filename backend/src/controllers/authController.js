import { registerUser, loginUser } from "../services/authService.js";
import { getProfile } from "../services/authService.js";
export async function register(req, res) {

    try {

        const result = await registerUser(req.body);

        return res.status(201).json(result);

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }

}
export async function login(req, res) {
    try {
        const result = await loginUser(req.body);

        return res.status(200).json(result);
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
export async function profile(req, res) {

    try {

        const user = await getProfile(req.user.userId);

        return res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        return res.status(400).json({
            success: false,
            message: error.message
        });

    }

}