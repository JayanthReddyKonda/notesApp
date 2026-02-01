import 'dotenv/config'
import express from 'express'
import notesRoute from './routes/notesRoute.js'
import { connectDB } from './config/db.js'
import rateLimiter from './middleware/rateLimiter.js'

const app = express()

// Middleware for json
app.use(express.json())

// Rate limiting middleware
app.use(rateLimiter)

//route
app.use("/api/notes", notesRoute)

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" })
})

// 404 handler for unknown routes
app.use((req, res) => {
    res.status(404).json({ message: "Route not found" })
})

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ message: "Internal server error" })
})



const port = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(port, () => console.log(`Server started on Port ${port}`))
}).catch((err) => {
    console.error("Failed to connect to database:", err)
    process.exit(1)
})



