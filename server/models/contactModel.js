import mongoose from "mongoose";

const contactSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    messege: {
        type: String,
        required: true
    },

    
}, 
    { timestamps: true }
)

const Contact = mongoose.model('contacts', contactSchema);

export default Contact