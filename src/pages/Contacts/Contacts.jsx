import axios from "axios";
import {  useEffect, useState } from "react"


// COMPONENTS
import Navbar from '../../components/Header/Header'

import { 
    AppBar,  
    Container, 
    Typography,
    Box,
    IconButton,
    SwipeableDrawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Autocomplete,
    InputLabel,
    Divider,
    Input,
    TextField,
    Button
} from '@mui/material';

export default function Contacts() {

    const [Contacts, setContacts] = useState({});

    
    
    

    useEffect(()=>{
        async function getContactsRoute(){
            try {
                const response = await axios.get('http://localhost:3010/api/contacts')

                if(!response){
                    console.log("getContactsRoute is undefined");
                    return
                }

                
                setContacts(response.data);
            } catch (error) {
                console.log("Fail to getContactsRoute", error)
            }
        }

        getContactsRoute();
        
    },[])
    
        
    console.log(Contacts);


    const servicesType = [
        { label: 'Web-Based Project'},
        { label: 'Desktop-Based Project' },
        { label: 'Front-End Development' },
        { label: 'Back-End Development' }
    ]

    return (
        <Container 
            disableGutters={true} 
            maxWidth='100%'
        >
            <Navbar mt={4} />
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    height: '725px',
                    background: 'green',
                }} 
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '558px',
                        width: '538px',
                        background: 'blue',
                    }} 
                >

                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '725px',
                        width: '565px',
                        background: 'red',
                    }} 
                >   
                    <Box>
                        <InputLabel>Name</InputLabel>
                        <Input ></Input>
                    </Box>
                    <Box>
                        <InputLabel>Email</InputLabel>
                        <Input ></Input>
                    </Box>
                    <Box>
                        <InputLabel>What Service are you Interested in</InputLabel>
                        <Autocomplete 
                            options={servicesType}
                            renderInput={(params) => <TextField {...params} label="Select Project Type" />}
                            id="movie-customized-option-demo"
                        />
                    </Box>
                    <Box>
                        <InputLabel>Message</InputLabel>
                        <TextField multiline ></TextField>
                    </Box>
                    <Box>
                        <Button>Submit</Button>
                    </Box>

                </Box>
            </Box>
        </Container>
    )
}
