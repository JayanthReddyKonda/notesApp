import 'dotenv/config'
import express from 'express'
import notesRoute from './routes/notesRoute.js'
import { connectDB } from './config/db.js'

connectDB()

const app = express()
// Middleware for json
app.use(express.json())

app.use("/api/notes", notesRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on Port ${port}`))


