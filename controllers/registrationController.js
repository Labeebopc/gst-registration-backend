const mongoose = require("mongoose");
const { registrationSchema } = require("../models/registrationModel.js")



const Registration = mongoose.model('Registration', registrationSchema)

/************************* Register a user with Scheme ****************************/
//export 
const registerScheme = async (req, res) => {
    // const { name, email, mobile, scheme } = req.body;
    //console.log(req.body);

    const trnsctnId = "TRNSCTN_" + Math.floor(1000 + Math.random() * 9000) + Date.now()

    try {
        const user = await Registration.create({ ...req.body.data, transcetionId: trnsctnId })

        res.status(201).json({ success: true, user, message: "User Registered with a Scheme" })

    } catch (error) {
        res.status(500).json({ success: false, error: error.message })
    }


}

module.exports = { registerScheme }