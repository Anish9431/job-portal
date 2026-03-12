import { Webhook } from "svix";
import User from "../models/user.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
    try {
        // Create a Svix instance with clerk webhook secret.
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)

        // Verifying Headers
        if (!req.rawBody) {
            console.log("Webhook Error: Missing raw body for verification");
            return res.status(400).json({ success: false, message: "Missing raw body" });
        }

        try {
            whook.verify(req.rawBody, {
                "svix-id": req.headers["svix-id"],
                "svix-timestamp": req.headers["svix-timestamp"],
                "svix-signature": req.headers["svix-signature"]
            })
        } catch (err) {
            console.log("Webhook Verification Failed:", err.message);
            return res.status(400).json({ success: false, message: "Invalid signature" });
        }

        // getting data from request body
        const { data, type } = req.body;
        console.log(`Processing Webhook: ${type} for User ID: ${data.id}`);

        // switch case for different events
        switch (type) {
            case "user.created": {
                const userdata = {
                    _id: data.id,
                    clerkId: data.id,
                    name: (data.first_name || data.username || "User").trim() + (data.last_name ? " " + data.last_name : ""),
                    email: data.email_addresses && data.email_addresses[0] ? data.email_addresses[0].email_address : "",
                    image: data.image_url || data.profile_image_url || "",
                    resume: ''
                }
                
                // Using findOneAndUpdate with upsert: true is safer than .create()
                // It avoids "Duplicate Key" errors if Clerk sends the event twice
                await User.findOneAndUpdate({ _id: data.id }, userdata, { upsert: true, new: true });
                console.log("User synced successfully (created/upserted)");
                return res.json({ success: true })
            }

            case "user.updated": {
                const userdata = {
                    name: (data.first_name || data.username || "User").trim() + (data.last_name ? " " + data.last_name : ""),
                    email: data.email_addresses && data.email_addresses[0] ? data.email_addresses[0].email_address : "",
                    image: data.image_url || data.profile_image_url || "",
                }
                await User.findByIdAndUpdate(data.id, userdata);
                console.log("User updated successfully");
                return res.json({ success: true })
            }

            case "user.deleted": {
                await User.findByIdAndDelete(data.id);
                console.log("User deleted successfully");
                return res.json({ success: true })
            }
            default:
                console.log("Unhandled webhook type:", type);
                break;
        }
        res.json({ success: true })
    } catch (error) {
        console.log("Webhook Controller Error:", error.message);
        res.status(500).json({ success: false, message: error.message })
    }
}