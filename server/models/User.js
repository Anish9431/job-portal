import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  name: { type: String, required: true },
  clerkId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  resume: { type: String, default: "" },
  image: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model('User', userSchema, 'users');

export default User;
