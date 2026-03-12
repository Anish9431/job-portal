import User from '../models/user.js';

// Called from frontend after Clerk login to sync user to MongoDB
export const syncUser = async (req, res) => {
    try {
        const { clerkId, name, email, image } = req.body;

        if (!clerkId || !email) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Upsert: create if not exists, update if exists
        const user = await User.findOneAndUpdate(
            { _id: clerkId },
            {
                _id: clerkId,
                clerkId,
                name: name || "User",
                email,
                image: image || "",
                resume: ""
            },
            { upsert: true, new: true }
        );

        console.log("User synced via frontend:", user.email);
        res.json({ success: true, user });
    } catch (error) {
        console.error("Sync user error:", error.message);
        res.status(500).json({ success: false, message: error.message });
    }
};
