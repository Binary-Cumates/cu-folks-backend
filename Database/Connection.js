import { config } from 'dotenv';
config({path: '../.env'})

import {mongoose} from 'mongoose'

console.log(process.env.MONGO)

const conn = mongoose.connect(process.env.MONGO)
    .then(db =>{
        console.log("Database Connected")
        return db
    }).catch(err => {
        console.log("Connection Error")
})

export default conn;