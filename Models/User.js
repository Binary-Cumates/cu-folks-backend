import { Schema, model } from 'mongoose'

// SCHEMA
const userSchema = Schema({
    uid: {type: String, default: "22ABC0001"},
    name: {type: String, default: "John Doe"},
    password: {type: String, default: "hashedPassword"},
    achievement: [{
        id: {type: Number, default: 11},
        postition: {type: String, default: 0},
        status: {type: String, default: "Not Registered"}
    }]
})

// SCHEMA-MODEL
const User = model('user', userSchema)

export default User