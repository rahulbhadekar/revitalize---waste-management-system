const express = require("express")
const router = express.Router()
const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const SECRET = "rahul_secret_key"

router.post("/register", async (req,res)=>{
  const {name,email,password} = req.body

  const hash = await bcrypt.hash(password,10)

  const user = new User({name,email,password:hash})
  await user.save()

  res.json({message:"User Registered"})
})

router.post("/login", async (req,res)=>{
  const {email,password} = req.body

  const user = await User.findOne({email})
  if(!user) return res.status(400).json({message:"User not found"})

  const isMatch = await bcrypt.compare(password,user.password)
  if(!isMatch) return res.status(400).json({message:"Wrong password"})

  const token = jwt.sign({id:user._id}, SECRET)

  res.json({token})
})

module.exports = router