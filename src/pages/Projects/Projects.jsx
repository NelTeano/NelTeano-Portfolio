import PropTypes from 'prop-types'
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { motion, useAnimation, } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { InView } from 'react-intersection-observer';



// COMPONENTS
import Navbar from '../../components/Header/Header'
import ParallaxText from '../../components/ParrallaxText/ParallaxText';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Footer from '../../components/Footer/Footer'
import { PacmanLoader } from 'react-spinners'


import { 
    Container, 
    Typography,
    Box,
    Grow,
} from '@mui/material';


import { 
    ArrowForwardIos as ArrowForwardIosIcon,
}
from '@mui/icons-material'

import { Link } from 'react-router-dom';

// ASSETS
import myPicture from '../../assets/mySquarePicture.png'
import TopographicImg from '../../assets/ProjectsBG.png'

import { projectDetails } from '../Home/HomeElements'

export default function Projects() {

    const [ProjectText, setProjectText] = useState(false);
    const [initParticles, setInitParticles] = useState(false);

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
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInitParticles(true);
        });
    }, []);


    console.log("Checking Particles", initParticles);







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
                                flexDirection: {md: 'row', xs: 'column'},
                                height: '800px',
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
                                        display: {md: 'flex'},
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
                                paddingBottom: {md: '0vh', xs: '30vh'},
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
                        
                        
                        <Box
                            sx={{
                                display: 'flex',
                                position:'relative',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                height: {md: '976px', xs: "200px"},
                                backgroundColor: 'rgba(19, 19, 19, 1)',
                                width: '100%'
                            }}
                        >
                            <InView as="div" 
                                onChange={(inView) => { 
                                    setProjectText(inView)
                                }}
                            >
                                <Grow in={ProjectText}  timeout={2000}>
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
                                            fontFamily: 'Stretch Pro, Arial, sans-serif',
                                            WebkitTextFillColor: 'transparent',
                                            WebkitTextStrokeWidth: '1px',
                                            WebkitTextStrokeColor: '#FFF'
                                            }}> Projects
                                        </span>
                                    </Typography>
                                </Grow>
                            </InView>  
                        </Box>
                        
                        <Box sx={{backgroundColor: 'rgba(19, 19, 19, 1)', position: 'relative'}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: 'rgba(19, 19, 19, 1)',
                                    background: `url(${TopographicImg})`,
                                    flexWrap: 'wrap',
                                    position:'relative',
                                    height: 'auto',
                                    width: '100%',
                                    gap: {md: '140px', xs: '50px'},
                                    padding: '100px 0px 200px 0px',
                                    zIndex: 1000,
                                }}
                            >
                                    {projectDetails.map((details, index)=> (
                                        <AnimationContainer key={index}>
                                                <ProjectCard 
                                                    title={details.title} 
                                                    about={details.about}
                                                    img={details.img}
                                                    bg={details.bg}
                                                    textColor={details.textColor}
                                                    btnColor={details.btnColor}
                                                />
                                        </AnimationContainer>
                                    ))} 
                                
                            </Box>
                        </Box>

                        <Footer />
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
                                height: '800px',
                                backgroundColor: 'rgba(19, 19, 19, 1)',
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



const AnimationContainer = ({children}) => {

    const cardVariants = {
        offscreen: {
            rotate: -50,
            y: 3000,
            },
        onscreen: {
            y: 50,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1
            }
        }
    };

    return (
        <>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >        
                <motion.div variants={cardVariants}>
                    {children}
                </motion.div>
            </motion.div>
        </>
    )
}




AnimationContainer.propTypes = {
    children: PropTypes.node
}


