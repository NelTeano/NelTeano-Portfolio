import contactModel from '../models/contactModel.js'

const getContacts = async (req, res) =>{
    try {
        const contactsData = await contactModel.find({});
        res.send(contactsData);
        console.log("Get Contacts Data Success");
    } catch (error) {
        console.log("Failed getting the data", error);
        res.status(500).json({ message: "Error Get Contacts", error });
    }
}

export {
    getContacts
}