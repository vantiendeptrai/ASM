import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    confirmPassword: {
        type: String,
        required: false
    },
    role: {
        type: String,
        default: "User"
    }
}, { timestamps: true, versionKey: false });

export default mongoose.model("User", userSchema);