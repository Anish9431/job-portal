import { Webhook } from "svix";
import User from "../models/user.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
    try {
        // Create a Svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Verifying Headers
        await whook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        })

        // getting data from requeat body
        const { data, type } = req.body;
        console.log("Webhook received type:", type);
        console.log("Webhook data received:", JSON.stringify(data, null, 2));

        // switch case for different events
        switch (type) {
            case "user.created": {
                const userdata = {
                    _id: data.id,
                    name: (data.first_name || "") + " " + (data.last_name || ""),
                    email: data.email_addresses && data.email_addresses[0] ? data.email_addresses[0].email_address : "",
                    image: data.image_url,
                    resume: ''
                }
                console.log("Attempting to create user with:", userdata);
                await User.create(userdata);
                return res.json({ success: true })
            }

            case "user.updated": {
                const userdata = {
                    name: (data.first_name || "") + " " + (data.last_name || ""),
                    email: data.email_addresses && data.email_addresses[0] ? data.email_addresses[0].email_address : "",
                    image: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userdata);
                return res.json({ success: true })
            }

            case "user.deleted": {
                await User.findByIdAndDelete(data.id);
                return res.json({ success: true })
            }
            default:
                break;
        }
        res.json({ success: true })
    } catch (error) {
        console.log("Webhook Error:", error.message);
        res.status(500).json({ success: false, message: error.message })
    }
}