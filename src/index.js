import dotenv from "dotenv"
import connectDB from "./db/index.js";
import app from "./app.js";

const PORT = process.env.PORT;


dotenv.config({
    path: './env'
})

connectDB()

/* IIFE & function Approch
import { express } from "express";

const app = express();


// function connectDB = (){}

// connectDB()


( async () => {
    try {
       await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR: ", error);
        })

        app.listen(PORT, () => {
            console.log(`App is listening on Port: ${PORT}`);
        })

    } catch (error) {
        console.error("ERROR: " , error)
        throw err
    }
})()
*/


app.get("/", (req, res) => {
    res.send("")
  })




app.listen(PORT, () => {
    console.log(`App is listening on Port: ${PORT}`);
})

