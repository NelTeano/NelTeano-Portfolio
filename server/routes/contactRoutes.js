import { Router } from "express";

// CONTROLLERS 
import { getContacts } from "../controllers/contactControllers.js"

const contactRoutes = Router();

contactRoutes.get('/contacts', getContacts);



export default contactRoutes