// IMPORT PACKAGES
import express, { urlencoded, json } from 'express'


const app = express()

// MIDDLEWARES
app.use(urlencoded({extended: false}))
app.use(json())

// DEFINE VARIABLES
const PORT = process.env || 3000

// ROUTES
import routes from './Routes/Route.js'
app.use(routes)


// DATABASE CONNECTION
import conn from './Database/Connection.js'



// SERVER CONNECTION
conn.then(db => {
    if(!db) return process.exit(1);

    // listen to the http server 
    app.listen(PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
    })

    app.on('error', err => console.log(`Failed To Connect with HTTP Server : ${err}`));
    // error in mongoDB connection
}).catch(error => {
    console.log(`Connection Failed...! ${error}`);
});
