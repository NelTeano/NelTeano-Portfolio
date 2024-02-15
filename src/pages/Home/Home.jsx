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
    Tooltip,
    
} from '@mui/material';



// ICONS
import { 
    Adb as AdbIcon,
} from '@mui/icons-material/';

// CONTEXT
import { Theme } from '../../context/Theme/ThemeContext'
import { useContext } from 'react';

// IMAGES
import RightEllipse from '../../assets/Ellipse1.png'
import LeftEllipse from '../../assets/Ellipse2.png'
import AvatarImg from '../../assets/AVATAR.png'



export default function Home() {

    const {theme, setTheme} = useContext(Theme);

    console.log(theme);


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

            <Navbar mt={4} />
                
                {/* --------------------- WELCOME BOARD ------------------------------------ */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: {md: '1000px', xs: '700px'},
                        mt:{md: -18, xs: -10}
                    }}
                >

                    {/* FLOATING ELIPSES ( CAUSING OVERLAPPED IN MOBILE VIEW) */}

                    
                    <img  
                        style={{
                            width: '678px',
                            height: '678px',
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            zIndex: 2
                        }}
                        src={RightEllipse}>
                    </img>
                    
                    <img
                        style={{
                            width: '678px',
                            height: '678px',
                            position: 'absolute',
                            top: '600px',
                            left: '0',
                        }}    
                        src={LeftEllipse}  
                    >
                    </img>



                    <Typography
                        sx={{
                            fontWeight: '700',
                            fontSize: {md:' 32px', xs: '20px'},
                            textAlign: 'center',
                            lineHeight: '48px',
                            fontFamily: 'Poppins',
                            color: '#FFF'
                        }}
                    >
                    Hello there &#128075;
                    </Typography>
                    <Typography
                            sx={{
                                fontWeight: '400',
                                fontSize: {md:' 130px', xs: '50px'},
                                textAlign: 'center',
                                fontFamily: 'Poppins',
                                color: '#FFF'
                            }}
                        >
                            I’m 
                            <span style={{
                                background: 'linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44)',
                                fontFamily: 'Stretch Pro, Arial, sans-serif',
                                WebkitTextFillColor: 'transparent',
                                WebkitBackgroundClip: 'text'}}> Jonel
                            </span>
                        </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            width: '100%',
                            height: '64px',
                            color: '#FFF'

                        }}
                    >
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md:' 32px', xs: '13px'},
                                fontWeight: '400',
                                letterSpacing: '0em',
                                textAlign: 'center',
                            }}
                        >
                            FullStack Developer
                        </Typography>
                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography> 
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md:' 32px', xs: '13px'},
                                fontWeight: '400',
                                letterSpacing: '0em',
                                textAlign: 'center',
                            }}>
                                MERN Developer
                        </Typography>
                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography>
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md:' 32px', xs: '13px'},
                                fontWeight: '400',
                                letterSpacing: '0em',
                                textAlign: 'center',
                            }}>
                                React Developer
                        </Typography>
                    </Box>
                </Box>





                {/* --------------------- ABOUT BOARD ------------------------------------ */}            
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '576px'
                    }}
                >
                    <Typography
                            sx={{
                                fontWeight: '400',
                                fontSize: {md:' 130px', xs: '50px'},
                                textAlign: 'center',
                                fontFamily: 'Poppins',
                                color: '#FFF',
                            }}
                        >
                            <span style={{
                                background: 'linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44)',
                                fontFamily: 'Stretch Pro, Arial, sans-serif',
                                WebkitTextFillColor: 'transparent',
                                WebkitBackgroundClip: 'text'}}> About Me
                            </span>
                        </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '20px',
                            width: '100%',
                            height: '64px',
                            color: '#FFF'

                        }}
                    >
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md:' 32px', xs: '13px'},
                                fontWeight: '400',
                                letterSpacing: '0em',
                                textAlign: 'center',
                            }}
                        >
                            Education
                        </Typography>
                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography> 
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md:' 32px', xs: '13px'},
                                fontWeight: '400',
                                letterSpacing: '0em',
                                textAlign: 'center',
                            }}>
                                Skills
                        </Typography>
                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography>
                        <Typography 
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md:' 32px', xs: '13px'},
                                fontWeight: '400',
                                letterSpacing: '0em',
                                textAlign: 'center',
                            }}>
                                Certificates & Licenses
                        </Typography>
                    </Box>
                </Box>

                {/* --------------------- DETAILS ABOUT BOARD ------------------------------------ */}  
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '700px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            gap: '40px'
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Stretch Pro',
                                    fontSize: {md: '66px', xs: '30px'},
                                    fontWeight: '400',
                                    lineHeight: '67px',
                                    textAlign: 'left',
                                    color: '#FFF'
                                }}
                            >
                                JONEL <br></br>TEANO
                            </Typography>
                        </Box>
                        <Box>
                            {/* IMAGE HERE */}
                            <img src={AvatarImg}></img>
                        </Box>
                    </Box>

                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: {md: '20px', xs: '10px'},
                            fontWeight: '400',
                            lineHeight: '30px',
                            textAlign: 'left',
                            color: '#FFF'
                        }}          
                    >
                        Hey! With 7 years in digital design, I&apos;m like a wizard turning screens<br></br>
                        into envy-inducing masterpieces.Let&apos;s craft smooth user experiences<br></br>
                        and sprinkle some fun into the internet, one quirky UI at a time!<br></br>
                    </Typography>
                </Box>






                {/* --------------------- SKILLS ABOUT BOARD ------------------------------------ */}        
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '500px',
                        gap: {md: '48px', xs: '20px'}
                    }}
                >
                        <Typography
                            sx={{
                                fontFamily: 'Stretch Pro',
                                fontSize: {md: '66px', xs: '30px'},
                                fontWeight: '400',
                                lineHeight: '67px',
                                textAlign: 'left',
                                color: '#FFF'
                            }}          
                        >
                            Skills
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: {md: '85px', xs: '20px'},
                                fontFamily:'Poppins',
                                fontWeight: '400',
                                color: '#FFF'
                            }}
                        >
                            {skillsList()}
                        </Box>
                </Box>




                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        backgroundColor: 'blue',
                        height: '1000px',
                    }}
                >
                    NEW CONTENT SOON HERE
                </Box>

                {/* <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        backgroundColor: 'blue',
                        height: '1000px',
                    }}
                >
                    
                </Box> */}
                
            </Container>
        </>
    )
}

const skillsList = () => {
    return (
        <>
            <ul>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>HTML</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>CSS</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>Material UI</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>ChakraUI</Typography></li>
            </ul>

            <ul>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>ReactJS</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>AngularJS</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>Javascript</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>Typescript</Typography></li>
            </ul>

            <ul>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>ElectronJS</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>NodeJS</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>MongoDB</Typography></li>
                <li><Typography sx={{fontSize: {md: '20px', xs: '10px'}, lineHeight: '30px'}}>RestAPI</Typography></li>
            </ul>
        </>
    );
}