import express from 'express'
import controller from '../Controllers/Controller.js'

const app = express()

// ROUTES
app.route('/')
    .get((req,res)=>res.send('Server Started'))

app.route('/event-register')
    .post(controller.addEvent)    

export default app    