import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";


// COMPONENTS
import Navbar from '../../components/Header/Header'
import ParallaxText from '../../components/ParrallaxText/ParallaxText';
import { PacmanLoader } from 'react-spinners'

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
    Divider,
    CircularProgress
} from '@mui/material';

import { 
    ArrowForwardIos as ArrowForwardIosIcon,
}
from '@mui/icons-material'

import { Link } from 'react-router-dom';

// ASSETS
import myPicture from '../../assets/mySquarePicture.png'

export default function Projects() {


    const [initParticles, setInitParticles] = useState(false);
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInitParticles(true);
        });
    }, []);

    const options = useMemo(
        () => ({
        background: {
            color: {
            value: "transparent",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            },
            modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            },
        },
        particles: {
            color: {
            value: "#ffffff",
            },
            links: {
            color: "#ffffff",
            distance: 180,
            enable: true,
            opacity: 0.5,
            width: 1,
            },
            move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
            },
            number: {
            density: {
                enable: true,
            },
            value: 80,
            },
            opacity: {
            value: 0.5,
            },
            shape: {
            type: "circle",
            },
            size: {
            value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
        }),
        [],
    );

    

    return (
            
        <>
                { initParticles ? ( 
                    <Container
                        disableGutters={true} 
                        maxWidth='100%'
                    >
                        <Particles
                            id="tsparticles"
                            options={options}
                        />
                        <Navbar />
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                flexDirection: 'row',
                                height: '800px',
                                zIndex: 100
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '60px',
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: '400',
                                        fontSize: {md:' 80px', xs: '70px'},
                                        textAlign: 'left',
                                        fontFamily: 'Stretch Pro, Arial, sans-serif',
                                        color: '#FFF',
                                        lineHeight: '100px'
                                    }}
                                >
                                    <span style={{
                                        fontFamily: 'Stretch Pro, Arial, sans-serif',
                                        WebkitTextFillColor: '#feb300',
                                        }}> My&nbsp; 
                                    </span>
                                    /
                                    <span 
                                        style={{
                                            fontFamily: 'Stretch Pro, Arial, sans-serif',
                                            WebkitTextFillColor: 'transparent',
                                            WebkitTextStrokeWidth: '1px',
                                            WebkitTextStrokeColor: '#FFF'
                                        }}
                                        > Web
                                    </span>
                                    <br></br>
                                        Development 
                                    <br></br>
                                        Projects
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: {md: '20px', xs: '14px'},
                                        fontWeight: '400',
                                        lineHeight: '30px',
                                        textAlign: {md: 'left', xs: 'center'},
                                        color: '#FFF'
                                    }}
                                >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ornare enim.  Mauris ornare <br></br>
                                tristique venenatis. Aenean ultricies posuere volutpat.  Sed facilisis nisl vel felis cursus, <br></br>
                                sodales congue lacus porttitor  consectetur adipiscing elit. Suspendisse a ornare
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: {md: '20px', xs: '14px'},
                                        fontWeight: '400',
                                        lineHeight: '30px',
                                        textAlign: {md: 'left', xs: 'center'},
                                        color: '#FFF'
                                    }}
                                >
                                    <Link
                                        className='view-design'
                                        to={'/'}
                                    >
                                        View Designs <ArrowForwardIosIcon />
                                    </Link>
                                </Typography>
                            </Box>
                                <img style={{zIndex: 100}} src={myPicture}></img>
                        </Box>
                        <Box 
                            sx={{
                                paddingTop: {md: '10vh', xs: '10vh'},
                                paddingBottom: {md: '30vh', xs: '30vh'},
                                position: 'relative'
                            }}
                        >
                            <ParallaxText baseVelocity={-3}>
                                <Typography 
                                    sx={{
                                        fontSize: {md: '30px', xs: '20px'},
                                        fontFamily: 'Stretch Pro',
                                        color: 'black'
                                    }}
                                >
                                Front-End Developer &nbsp; | 
                                &nbsp; Back-End Developer &nbsp; |
                                &nbsp; Mern Developer &nbsp; |
                                &nbsp; React Developer &nbsp; |
                                </Typography>
                            </ParallaxText>
                        </Box>

                {/* <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '800px',
                        backgroundColor: 'green',
                        position:'relative'
                    }}
                >
                    
                </Box> */}
                    </Container>
                ) : (
                    <Container
                        disableGutters={true} 
                        maxWidth='100%'
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '900px',
                                backgroundColor: 'black'
                            }}
                        >
                            <PacmanLoader
                                color="#feb300"
                                size={70}
                                speedMultiplier={1.5}
                            />
                        </Box>
                    </Container>
                )}
        </>
    )
}



