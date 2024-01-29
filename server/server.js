import Express from 'express'
import dotenv from "dotenv";
import initDatabase from "./database.js"

// ROUTES
import contactRoutes from './routes/contactRoutes.js'

dotenv.config(); // .ENV INIT


initDatabase(); // DATABASE CONNETION

const app = Express();
const PORT = 3010;

app.listen(PORT, ()=>{
    console.log(`Listening on port http://localhost:${PORT}`);
});

// USE ROUTES
app.use('/api' ,contactRoutes);




