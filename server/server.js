import Express from 'express'
import dotenv from "dotenv";
import initDatabase from "./database.js"
import cors from 'cors'

// ROUTES
import contactRoutes from './routes/contactRoutes.js'

dotenv.config(); // .ENV INIT


initDatabase(); // DATABASE CONNETION

const app = Express();
const PORT = 3010;

app.listen(PORT, ()=>{
    console.log(`Listening on port http://localhost:${PORT}`);
});

app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    })
);

// USE ROUTES
app.use('/api' ,contactRoutes);




