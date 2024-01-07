const mongoose = require('mongoose')

const OwnerSchema = new mongoose.Schema({
    name:String,
    propname:String,
    address:String,
    number:String,
    rent:String
})

const OwnerModel= mongoose.model("owners",OwnerSchema)
module.exports=OwnerModel

