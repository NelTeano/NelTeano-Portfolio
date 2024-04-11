import { useState } from 'react';
import { InView } from 'react-intersection-observer';

// COMPONENTS
import Navbar from '../../components/Header/Header'
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import Timeline from "../../components/Timeline/TimelineCard";
import ScrollUp from "../../components/ScrollUp/ScrollUp";
import Footer from '../../components/Footer/Footer'

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
    TrendingFlat as ArrowForwardIosIcon,
} from '@mui/icons-material/';

import { 
    IoLogoElectron as ElectronIcon,
    IoLogoReact as ReactIcon,
    IoLogoJavascript ,
    IoLogoCss3 ,
    IoLogoHtml5 ,
    IoLogoNodejs ,
    
} from "react-icons/io5";

import { 
    SiExpress ,
    SiMongodb ,
    SiTypescript ,
    SiMysql ,
    SiChakraui 
} from "react-icons/si";

// CONTEXT
import { Theme } from '../../context/Theme/ThemeContext'
import { useContext } from 'react';

// IMAGES
import RightEllipse from '../../assets/Ellipse1.png'
import LeftEllipse from '../../assets/Ellipse2.png'
import AvatarImg from '../../assets/AVATAR.png'
import muiImg from '../../assets/TOOLS-IMAGES/css.png'


// ELEMENTS
import { 
    projectDetails,
    toolsUsed,
    techSkills
} from "./HomeElements"


export default function Home() {

    const { theme } = useContext(Theme);
    const projects = projectDetails.slice(0, 2);

    console.log(theme);



    const EnableAnimation = (enable) => {
        setActive(enable);
    }
    
    // ANIMATION ACTIVATION
    const [active, setActive] = useState(false); // WELCOME BOARD
    const [active2, setActive2] = useState(false); // ABOUT BOARD
    const [active3, setActive3] = useState(false); // PROJECT BOARD

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

            {/* --------------------- COMPONENTS IMPORTS ------------------------------------ */}    
            <Navbar mt={4} />
            <ScrollUp />
                
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
                        gap: "30px"
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
                            <img width={'290px'} src={AvatarImg}></img>
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
                        height: {md: '500px', xs: '1500px'},
                        gap: {md: '48px', xs: '30px'}
                    }}
                >
                        <Typography
                            sx={{
                                fontFamily: 'Stretch Pro',
                                fontSize: {md: '66px', xs: '40px'},
                                fontWeight: '400',
                                lineHeight: '67px',
                                textAlign: 'center',
                                color: '#FFF',
                                letterSpacing: {md: '0.05em', xs:'0.1em' },
                            }}          
                        >
                            TECH SKILLS 
                        </Typography>
                        {/* <Box
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
                        </Box> */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: {md: '1000px', xs: '300px'},
                                flexWrap: 'wrap',
                                gap: {md: '20px', xs: '20px'},
                            }}
                        >
                            {techSkills.map((skills, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: 'transparent',
                                        height: '60px',
                                        width: 'auto',
                                        minWidth: {md: '150px', xs: '200px'},
                                        gap: '10px',
                                        borderRadius: '10px',
                                        border: 'solid #ffb400 1px',
                                        paddingRight: '15px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '70px',
                                            height: '100%',
                                            backgroundColor: 'white',
                                            borderTopLeftRadius: '10px',
                                            borderBottomLeftRadius: '10px',
                                            background: `url(${skills.toolIcon})`,
                                            backgroundSize: '60px 50px',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                            paddingTop: 2,
                                            paddingBottom: 2
                                        }}
                                    >
                                        
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontWeight: '400',
                                            fontSize: {md:' 15px', xs: '10px'},
                                            letterSpacing: '0.5px',
                                            textAlign: 'center',
                                            color: '#FFF',
                                            fontFamily: 'Stretch Pro, Arial, sans-serif',
                                            // WebkitTextFillColor: 'transparent',
                                            // WebkitTextStrokeWidth: '1px',
                                            // WebkitTextStrokeColor: '#FFF'
                                        }}
                                    >
                                        {skills.toolname}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                </Box>

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
                                textAlign: 'center',
                                color: '#FFF',
                                letterSpacing: {md: '0.05em', xs:'0.1em' },
                            }}          
                        >
                            SOFT SKILLS
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
                                textAlign: 'center',
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
                            gap: {md: '80px', xs: '50px'},
                            mb: {md: 10, xs: 0}
                        }}
                    >
                        
                            {projects.map((details, index)=> (
                                        <ProjectCard 
                                            key={index}
                                            title={details.title} 
                                            about={details.about}
                                            img={details.img}
                                            bg={details.bg}
                                            textColor={details.textColor}
                                            btnColor={details.btnColor}
                                            more={details.more}
                                        />
                            ))}
                        
                        <Typography
                                    sx={{
                                        mt: 4,
                                        fontFamily: 'Poppins',
                                        fontSize: {md: '24px', xs: '14px'},
                                        fontWeight: '600',
                                        lineHeight: '30px',
                                        textAlign: {md: 'center', xs: 'center'},
                                        color: '#FFF'
                                    }}
                                >
                                    <Link
                                        className='view-design'
                                        to={'/projects'}
                                    >
                                        See More Projects <ArrowForwardIosIcon />
                                    </Link>
                        </Typography>
                    </Box>




                {/* --------------------- FOOTER BOARD ------------------------------------ */}   
                
                <Footer/>
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

// const SoftSkills = () => {

//     const lineStyle = {
//         fontSize: {md: '20px', xs: '15px'},
//         lineHeight: '30px'
//     }

//     return (
//         <>
//             <ul>
//                 <li><Typography sx={lineStyle}>HTML</Typography></li>
//                 <li><Typography sx={lineStyle}>CSS</Typography></li>
//                 <li><Typography sx={lineStyle}>Material UI</Typography></li>
//                 <li><Typography sx={lineStyle}>ChakraUI</Typography></li>
//             </ul>

//             <ul>
//                 <li><Typography sx={lineStyle}>ReactJS</Typography></li>
//                 <li><Typography sx={lineStyle}>AngularJS</Typography></li>
//                 <li><Typography sx={lineStyle}>Javascript</Typography></li>
//                 <li><Typography sx={lineStyle}>Typescript</Typography></li>
//             </ul>

//             <ul>
//                 <li><Typography sx={lineStyle}>ElectronJS</Typography></li>
//                 <li><Typography sx={lineStyle}>NodeJS</Typography></li>
//                 <li><Typography sx={lineStyle}>MongoDB</Typography></li>
//                 <li><Typography sx={lineStyle}>RestAPI</Typography></li>
//             </ul>
//         </>
//     );
// }
