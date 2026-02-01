import 'dotenv/config'
import express from 'express'
import notesRoute from './routes/notesRoute.js'
import { connectDB } from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js'


const app = express()

// Middleware for json
app.use(express.json())

//Rate limiting middleware
app.use(rateLimiter)

//route
app.use("/api/notes", notesRoute)

const port = process.env.PORT || 5000;

connectDB().then(()=>{
    app.listen(port, () => console.log(`Server started on Port ${port}`))
})



