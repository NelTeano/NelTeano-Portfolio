import { useState } from 'react';
import { InView } from 'react-intersection-observer';

// COMPONENTS
import Navbar from '../../components/Header/Header'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Timeline from "../../components/Timeline/TimelineCard"



import {  
    Container, 
    Typography,
    Box,
    Tooltip,
    Zoom,
    Fade,
    Grow,
    Slide,
} from '@mui/material';



import { Link } from 'react-router-dom';

// ICONS
import { 
    LinkedIn as LinkedinIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
} from '@mui/icons-material/';

// CONTEXT
import { Theme } from '../../context/Theme/ThemeContext'
import { useContext } from 'react';

// IMAGES
import RightEllipse from '../../assets/Ellipse1.png'
import LeftEllipse from '../../assets/Ellipse2.png'
import AvatarImg from '../../assets/AVATAR.png'


// ELEMENTS
import { 
    projectDetails,
    toolsUsed
} from "./HomeElements"


export default function Home() {

    const { theme } = useContext(Theme);

    console.log(theme);


    const EnableAnimation = (enable) => {
        setActive(enable);
    }
    
    // ANIMATION ACTIVATION
    const [active, setActive] = useState(false); // WELCOME BOARD
    const [active2, setActive2] = useState(false); // ABOUT BOARD
    const [active3, setActive3] = useState(false); // PROJECT BOARD
    const [active4, setActive4] = useState(false); // FOOTER BOARD

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
                        mt:{md: -18, xs: -15}
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


                    <InView as="div" 
                        onChange={(inView) => { 
                            EnableAnimation(inView);
                        }}
                    >
                        <Fade in={active}  timeout={1000}>
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
                        </Fade>
                    </InView>


                    <InView as="div" 
                        onChange={(inView) => { 
                            EnableAnimation(inView);
                        }}
                    >
                        <Zoom in={active}  timeout={1500}>
                            <Typography
                                    sx={{
                                        fontWeight: '400',
                                        fontSize: {md:' 130px', xs: '70px'},
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
                            </Zoom>
                    </InView>
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
                        <InView as="div" 
                        onChange={(inView) => { 
                            EnableAnimation(inView);
                        }}
                        >
                            <Grow in={active}  timeout={2000}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: {md:' 32px', xs: '15px'},
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'center',
                                    }}
                                >
                                    FullStack Developer
                                </Typography>
                            </Grow>
                        </InView>
                        
                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography> 

                        <InView as="div" 
                        onChange={(inView) => { 
                            EnableAnimation(inView);
                        }}
                        >
                            <Grow in={active}  timeout={2500}>
                                <Typography 
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: {md:' 32px', xs: '15px'},
                                    fontWeight: '400',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                }}>
                                    MERN Developer
                                </Typography>
                            </Grow>
                        </InView>

                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography>

                        <InView as="div" 
                        onChange={(inView) => { 
                            EnableAnimation(inView);
                        }}
                        >
                            <Grow in={active}  timeout={3000}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: {md:' 32px', xs: '15px'},
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'center',
                                    }}>
                                        React Developer
                                </Typography>
                            </Grow>
                        </InView>
                    </Box>
                </Box>



                                            

                {/* --------------------- ABOUT BOARD ------------------------------------ */}            
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: {md: '576px', xs: '800px'}
                    }}
                >
                    <InView as="div" 
                        onChange={(inView) => { 
                            setActive2(inView);
                        }}
                    >
                        <Zoom in={active2}  timeout={1500}>
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: {md:' 130px', xs: '70px'},
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
                        </Zoom>
                    </InView>

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
                        <InView as="div" 
                            onChange={(inView) => { 
                                setActive2(inView);
                            }}
                        >
                            <Grow in={active2}  timeout={2000}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: {md:' 32px', xs: '17px'},
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'center',
                                    }}
                                >
                                    Education
                                </Typography>
                            </Grow>
                        </InView>
                        
                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography> 
                        <InView as="div" 
                            onChange={(inView) => { 
                                setActive2(inView);
                            }}
                        >
                            <Grow in={active2}  timeout={2500}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: {md:' 32px', xs: '17px'},
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'center',
                                    }}>
                                        Skills
                                </Typography>
                            </Grow>
                        </InView>    

                        <Typography sx={{fontFamily: 'Poppins', fontSize: '32px', fontWeight: '400',}}>|</Typography>
                        
                        <InView as="div" 
                            onChange={(inView) => { 
                                setActive2(inView);
                            }}
                        >
                            <Grow in={active2}  timeout={3000}>
                                <Typography 
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: {md:' 32px', xs: '17px'},
                                    fontWeight: '400',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                }}>
                                    Certificates
                                </Typography>
                            </Grow>
                        </InView> 
                    </Box>
                </Box>

                {/* --------------------- DETAILS ABOUT BOARD ------------------------------------ */}  
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '800px',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            gap: '40px',
                            flexWrap: 'wrap'
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Stretch Pro',
                                    fontSize: {md: '66px', xs: '30px'},
                                    fontWeight: '400',
                                    lineHeight: {md:'80px', xs: '40px'},
                                    textAlign: 'left',
                                    color: '#FFF'
                                }}
                            >
                                JONEL <br></br>TEAÑO
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
                            fontSize: {md: '20px', xs: '14px'},
                            fontWeight: '400',
                            lineHeight: '30px',
                            textAlign: {md: 'left', xs: 'center'},
                            color: '#FFF'
                        }}          
                    >
                        Hey! I&apos;m a driven student at Cavite State University, deeply passionate about
                        crafting <br></br>cutting-edge web applications. My goal? To master 
                        Full Stack Web Development,<br></br>delivering top-notch 
                        websites and apps that push boundaries.<br></br>
                        Let&apos;s innovate together and redefine 
                        the digital experience, one project at a time!
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
                        gap: {md: '48px', xs: '30px'}
                    }}
                >
                        <Typography
                            sx={{
                                fontFamily: 'Stretch Pro',
                                fontSize: {md: '66px', xs: '40px'},
                                fontWeight: '400',
                                lineHeight: '67px',
                                textAlign: 'left',
                                color: '#FFF',
                                letterSpacing: {md: '0.05em', xs:'0.1em' },
                            }}          
                        >
                            SKILLS 
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



                {/* --------------------- TIMELINE ABOUT BOARD ------------------------------------ */}   
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '300px',
                    }}
                >
                        <Typography
                            sx={{
                                fontFamily: 'Stretch Pro',
                                fontSize: {md: '66px', xs: '30px'},
                                fontWeight: '400',
                                lineHeight: '67px',
                                textAlign: {md: 'left', xs: 'center'},
                                color: '#FFF',
                                letterSpacing: {md: '0.05em', xs:'0.1em' },
                            }}          
                        >
                            EXPERIENCE TIMELINE 
                        </Typography>
                </Box>   

                {/* --------------------- TIMELINE HIERARCHY BOARD ------------------------------------ */}       
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: {md: '1700px', xs: 'auto'},
                    }}
                >
                    <Timeline defaultColor="bg-white" />
                </Box>         


                {/* --------------------- TOOLS ABOUT BOARD ------------------------------------ */}             
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '1000px',
                        gap: '50px'
                    }}
                >
                    <Typography
                            sx={{
                                fontFamily: 'Stretch Pro',
                                fontSize: {md: '66px', xs: '30px'},
                                fontWeight: '400',
                                lineHeight: '67px',
                                textAlign: 'center',
                                color: '#FFF',
                                
                            }}          
                        >
                            SOFTWARE / TOOLS <br></br> USED
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '30px'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '20px'
                            }}
                        >
                        {toolsUsed[0].map((tools, index)=> (
                            <Tooltip 
                                key={index}
                                title={tools.name}
                            >
                                <Link to={tools.link} target="_blank" rel="noopener noreferrer">
                                    <Box
                                        sx={{
                                            width: '90.94px',
                                            height: '88.67px',
                                            border: 'solid white 1px',
                                            borderRadius: '20px',
                                            background: `url(${tools.src})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                    </Box>
                                </Link>
                            </Tooltip>
                        ))}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '20px'
                            }}
                        >
                            {toolsUsed[1].map((tools, index)=> (
                                <Tooltip 
                                    key={index}
                                    title={tools.name}
                                >
                                    <Link to={tools.link} target="_blank" rel="noopener noreferrer">
                                        <Box
                                            sx={{
                                                width: '90.94px',
                                                height: '88.67px',
                                                border: 'solid white 1px',
                                                borderRadius: '20px',
                                                background: `url(${tools.src})`,
                                                backgroundSize: 'cover',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundPosition: 'center',
                                                backgroundColor: 'white',
                                            }}
                                        >
                                        </Box>
                                    </Link>
                                </Tooltip>
                            ))}
                        </Box>
                    </Box>
                </Box>



                {/* --------------------- PROJECTS BOARD ------------------------------------ */}                             
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: {md: '576px', xs: "200px"},
                        width: '100%'
                    }}
                >
                    <InView as="div" 
                        onChange={(inView) => { 
                            setActive3(inView)
                        }}
                    >
                        <Zoom in={active3}  timeout={1000}>
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
                                    WebkitBackgroundClip: 'text'}}> Projects
                                </span>
                            </Typography>
                        </Zoom>
                    </InView>  
                </Box>

                

                {/* --------------------- PROJECTS CARDS BOARD ------------------------------------ */}
                <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '100%',
                            gap: {md: '35px', xs: '50px'}
                        }}
                    >
                        
                            {projectDetails.map((details, index)=> (
                                        <ProjectCard 
                                            key={index}
                                            title={details.title} 
                                            about={details.about}
                                            img={details.img}
                                            bg={details.bg}
                                            textColor={details.textColor}
                                            btnColor={details.btnColor}
                                        />
                            ))}
                    </Box>




                {/* --------------------- FOOTER BOARD ------------------------------------ */}   
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: {md: '1000px', xs: '1100px'},
                        widht: '100%'
                    }}
                >
                    <InView as="div" 
                        onChange={(inView) => { 
                            setActive4(inView)
                        }}
                    >
                        <Slide  in={active4}  timeout={1300}>
                            <Typography
                                sx={{
                                    fontWeight: '400',
                                    fontSize: {md:' 64px', xs: '30px'},
                                    textAlign: 'center',
                                    fontFamily: 'Poppins',
                                    color: '#FFF',
                                    // mb: {xs: '100px'}
                                }}
                            >
                                <span style={{
                                    background: 'linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44)',
                                    fontFamily: 'Stretch Pro, Arial, sans-serif',
                                    WebkitTextFillColor: 'transparent',
                                    WebkitBackgroundClip: 'text'}}
                                > 
                                    LET’S CREATE <br></br>
                                    TOGEETHER
                                </span>
                            </Typography>
                        </Slide>
                    </InView>  

                    

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '242px',
                            width: {md:'892px', xs: '300px'},
                            gap: '32px',
                            color: 'white'
                        }}  
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md: '20px', xs: '14px'},
                                fontWeight: '400',
                                lineHeight: '30px',
                                textDecoration: 'none',
                            }}
                        >
                            I would like to express my heartfelt gratitude for taking the time to review my portfolio. <br></br><br></br>

                            If you have any further questions, collaborations, or opportunities you&apos;d like to discuss,
                            I would be delighted to connect with you. Please feel free to reach out to me through the following platforms:<br></br><br></br>
                            <Link to={'https://www.linkedin.com/in/teanojonel/'} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '60px'}} >
                                <LinkedinIcon fontSize='inherit' />
                            </Link>
                            <Link to={'https://www.facebook.com/96jonel96/'} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '60px'}} >
                                <FacebookIcon fontSize='inherit' />
                            </Link>
                            <Link to={'https://www.instagram.com/shu1dddd/'} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '60px'}} >
                                <InstagramIcon fontSize='inherit' />
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md: '20px', xs: '14px'},
                                fontWeight: '400',
                                lineHeight: '30px',
                            }}
                        >
                            Once again, I extend my deepest appreciation for your time and consideration.
                            I look forward to the possibility of collaborating with you in the future. Thank you!
                        </Typography>
                    </Box>
                    
                </Box>







            </Container>
        </>
    )
}

const skillsList = () => {

    const lineStyle = {
        fontSize: {md: '20px', xs: '15px'},
        lineHeight: '30px'
    }

    return (
        <>
            <ul>
                <li><Typography sx={lineStyle}>HTML</Typography></li>
                <li><Typography sx={lineStyle}>CSS</Typography></li>
                <li><Typography sx={lineStyle}>Material UI</Typography></li>
                <li><Typography sx={lineStyle}>ChakraUI</Typography></li>
            </ul>

            <ul>
                <li><Typography sx={lineStyle}>ReactJS</Typography></li>
                <li><Typography sx={lineStyle}>AngularJS</Typography></li>
                <li><Typography sx={lineStyle}>Javascript</Typography></li>
                <li><Typography sx={lineStyle}>Typescript</Typography></li>
            </ul>

            <ul>
                <li><Typography sx={lineStyle}>ElectronJS</Typography></li>
                <li><Typography sx={lineStyle}>NodeJS</Typography></li>
                <li><Typography sx={lineStyle}>MongoDB</Typography></li>
                <li><Typography sx={lineStyle}>RestAPI</Typography></li>
            </ul>
        </>
    );
}