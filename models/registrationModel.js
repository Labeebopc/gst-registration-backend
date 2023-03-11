const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const registrationSchema = new Schema({
    name: { type: String, required: [true, "Please Enter your Name"] },
    email: { type: String, required: [true, "Please Enter your Email"] },
    mobile: { type: Number, required: [true, "Please Enter your Mobile"] },
    scheme: { type: String, required: [true, "Please Select your Scheme"] },
    transcetionId: {type:String}
})

module.exports = { registrationSchema }