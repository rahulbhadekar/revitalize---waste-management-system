const express = require("express")
const router = express.Router()
const Pickup = require("../models/Pickup")

// POST route (save data)
router.post("/pickup", async (req, res) => {
  try {
    const data = new Pickup(req.body)
    await data.save()
    res.json({ message: "Pickup saved" })
  } catch (err) {
    res.status(500).json(err)
  }
})

// GET route (fetch data)
router.get("/pickup", async (req, res) => {
  try {
    const data = await Pickup.find()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router

router.get("/pickup", async (req, res) => {
  try {
    const data = await Pickup.find()
    res.json(data)
  } catch (err) {
    res.status(500).json(err)
  }
})