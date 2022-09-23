import { Schema, model } from 'mongoose'

// SCHEMA
const eventSchema = Schema({
    id: {type: String, default: "22XYZ01"},
    title: {type: String, default: "XYZ 2022"},
    category: {type: String, default: "HACKATHON"},
    date: {type: Date, default: 2022-9-23},
    description: {type: String, default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus, augue eu eleifend feugiat, tortor velit mollis massa, sed lobortis neque mi ut dui. Ut ac dui luctus, fringilla dolor vitae, malesuada nisi. Mauris vel velit commodo urna vestibulum sagittis. Integer bibendum mi non nunc malesuada, vulputate consectetur metus ornare."},
    // prize: [{
    //     id: {type: Number, default: 1},
    //     rank: {type: Number, default: 1},
    //     prize: {type: String, default: "$100 Cash Prize"}
    // }]
})

// SCHEMA-MODEL
const Event = model('event', eventSchema)

export default Event