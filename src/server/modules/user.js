import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
	id: String,
	description: String,
	url: String
})

const userModel = mongoose.model('user', userSchema);

export default userModel