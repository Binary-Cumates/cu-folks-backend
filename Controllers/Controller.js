import User from '../Models/User.js'
import Event from '../Models/Event.js'

const register = async(req,res)=>{
    const newUser = new User({
        name: req.body.name,
        password: req.body.password
    })

    await newUser.save((err)=>{
        if(!err){
            res.send("Data uploaded successfully")
        }else{
            res.send("Error: " + err)
        }
    })
}

const addEvent = async(req,res)=>{
    const count = Event.count({})
    const newEvent = new Event({
        id: count+1,
        title: req.body.title,
        category: req.body.category,
        date: req.body.date,
        description: req.body.description,
    })

    newEvent.save(err=>{
        if(!err){
            res.send("Event listed Successfully !!")
        }else{
            console.error(err)
            res.send("Error: " + err)
        }
    })


}

export default {
    register,
    addEvent
}