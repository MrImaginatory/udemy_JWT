import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true, // Ensures no duplicates for userEmail
        match: [/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid email'],
    },
    password:{
        type:String,
        required:true,
        minlength: [6, 'Password should be at least 6 characters'],
    }
},{timestamps:true})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
      } catch (error) {
        next(error);
      }
    } else {
      next();
    }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model("User", userSchema);