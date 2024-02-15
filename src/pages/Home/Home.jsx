// COMPONENTS
import Navbar from '../../components/Header/Header'

import { 
    AppBar, 
    Toolbar, 
    Container, 
    Typography,
    Box,
    Menu,
    MenuItem,
    Button,
    IconButton,
    Avatar,
    Tooltip
} from '@mui/material';

// ICONS
import { Adb as AdbIcon} from '@mui/icons-material/';

// CONTEXT
import { Theme } from '../../context/Theme/ThemeContext'
import { useContext } from 'react';



export default function Home() {

    const {theme, setTheme} = useContext(Theme);

    console.log(theme);

    // setTheme('black');

    return (
        <>
            <Container  
                disableGutters={true} 
                maxWidth='100%' 
                sx={{
                        background: theme,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
            >

            <Navbar mt={5} />

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: {md: '800px', xs: '700px'},
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: {md:'56px', xs: '30px'},
                            fontWeight: '300',
                            lineHeight: '84px',
                            textAlign: 'center',
                            color: 'rgba(227, 228, 230, 0.55)'
                        }}
                    >
                        I’m a Developer specialising in <span style={{color: '#E3E4E6'}}>Front-End Development</span> and<br></br> 
                        can <span style={{color: '#E3E4E6'}}>Full-Stack Development</span>
                    </Typography>
                </Box>






                {/* <Box
                    sx={{
                        backgroundColor: 'green',
                        height: '500px'
                    }}
                >
                    This is Second
                    <Button variant="contained">Change Value</Button>
                    <AdbIcon />
                </Box>

                <Box
                    sx={{
                        backgroundColor: 'red',
                        height: '500px'
                    }}
                >
                    This is Third
                    <Button variant="contained">Change Value</Button>
                    <AdbIcon />
                </Box> */}


            </Container>
        </>
    )
}



