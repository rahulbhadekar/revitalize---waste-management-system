const mongoose = require("mongoose")

const pickupSchema = new mongoose.Schema({
 name:String,
 email:String,
 phone:String,
 address:String,
 wasteType:String,
 quantity:String,
 date:String,
 time:String
})

module.exports = mongoose.model("Pickup", pickupSchema)
