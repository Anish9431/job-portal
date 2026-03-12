import 'dotenv/config';
import mongoose from 'mongoose';
import User from './models/user.js';

const checkUsers = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const count = await User.countDocuments();
        console.log('User count:', count);
        const users = await User.find().limit(5);
        console.log('Sample users:', JSON.stringify(users, null, 2));
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error:', error);
    }
};

checkUsers();
