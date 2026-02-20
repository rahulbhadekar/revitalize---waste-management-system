const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const pickupRoutes = require("./routes/pickupRoutes")

const app = express()

const userRoutes = require("./routes/userRoutes")

app.use("/api/user", userRoutes)

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/revitalize")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

app.use("/api", pickupRoutes)

app.get("/", (req,res)=>{
 res.send("API Running 🚀")
})

app.listen(5000, ()=>console.log("Server running on port 5000"))

const authRoutes = require("./routes/authRoutes")

app.use("/api/auth", authRoutes)

const dropoffRoutes = require("./routes/dropoffRoutes")

app.use("/api/dropoff", dropoffRoutes)
