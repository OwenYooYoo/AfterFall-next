import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: ['student', 'teacher', 'admin'], 
        default: 'student' 
    },
    classIds: { 
        type: [String], 
        default: [] 
    },
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
