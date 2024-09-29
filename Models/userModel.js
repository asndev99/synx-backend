const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        unique: true
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    imageUrl:{
        type:String,
        required:false,
        default:null
    },
    role: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER' 
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
module.exports = User;
