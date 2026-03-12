import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Database Connected Successfully');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Mongoose connection error:', err);
        });

        console.log('Attempting to connect to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (error) {
        console.error("Database Connection Error:", error);
        process.exit(1); // Exit if DB connection fails
    }
}

export default connectDB;
