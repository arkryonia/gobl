import mongoose from 'mongoose'

const Schema = mongoose.Schema

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: String,
  nickname: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, min: 8 },
  created: { type: Date },
  updated: { type: Date, default: Date.now }
})

module.exports = mongoose.model('User', UserSchema)
