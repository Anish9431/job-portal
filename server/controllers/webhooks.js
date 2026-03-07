import { Webhook } from "svix";
import User from "../models/User.js";

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

        // switch case for different events
        switch (type) {
            case "user.created": {
                const userdata = {
                    _id: data.id,
                    name: data.first_name + " " + data.last_name,
                    email: data.email_address[0].email_address,
                    image: data.image_url,
                    resume: ''
                }
                await User.create(userdata);
                res.json({})
                break;
            }

            case "user.updated": {
                const userdata = {
                    name: data.first_name + " " + data.last_name,
                    email: data.email_address[0].email_address,
                    image: data.image_url,
                }
                await User.findByIdAndUpdate(data.id, userdata);
                res.json({})
                break;
            }

            case "user.deleted": {
                await User.findByIdAndDelete(data.id);
                res.json({})
                break;
            }
            default:
                break;
        }
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: 'webhook error' })

    }
}