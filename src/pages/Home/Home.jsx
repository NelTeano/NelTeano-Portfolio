// COMPONENTS
import Navbar from '../../components/Header/Header'
import ProjectCard from '../../components/ProjectCard/ProjectCard';

import {  
    Container, 
    Typography,
    Box,
    Tooltip,
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
import vscodeImg from '../../assets/vscodeImg.jpg' // SOFTWARE TOOLS IMG
import gitImg from '../../assets/gitImg.png'        // SOFTWARE TOOLS IMG
import viteImg from '../../assets/viteImg.webp' // SOFTWARE TOOLS IMG
import postmanImg from '../../assets/postmanImg.jpg'    // SOFTWARE TOOLS IMG
import mysqlImg from '../../assets/mysqlImg.png'    // SOFTWARE TOOLS IMG
import mongodbImg from '../../assets/mongodbImg.png'    // SOFTWARE TOOLS IMG




export default function Home() {

    const { theme } = useContext(Theme);

    console.log(theme);





    const ToolsUsedTop = [
        {
            name: 'Visual Studio Code',
            src: vscodeImg,
            alt: 'Visual Studio Code Img',
            link: 'https://code.visualstudio.com/'
        },
        {
            name: 'Postman',
            src: postmanImg,
            alt: 'Postman Img',
            link: 'https://www.postman.com/'
        },
        {
            name: 'Vite',
            src: viteImg,
            alt: 'Vite Img',
            link: 'https://vitejs.dev/'
        },
    ];

    const ToolsUsedBottom = [
        {
            name: 'Git',
            src: gitImg,
            alt: 'Git Img',
            link: 'https://git-scm.com/'
        },
        {
            name: 'MongoDB',
            src: mongodbImg,
            alt: 'MongoDB Img',
            link: 'https://www.mongodb.com/'
        },
        {
            name: 'MySQL',
            src: mysqlImg,
            alt: 'MySQL Img',
            link: 'https://www.mysql.com/'
        },
    ];
    



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

                    
                    {/* <img  
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
                    </img> */}



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
                            fontSize: {md: '20px', xs: '14px'},
                            fontWeight: '400',
                            lineHeight: '30px',
                            textAlign: {md: 'left', xs: 'center'},
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
                        {ToolsUsedTop.map((tools, index)=> (
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
                            {ToolsUsedBottom.map((tools, index)=> (
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
                        height: '576px',
                        width: '100%'
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
                                WebkitBackgroundClip: 'text'}}> Projects
                            </span>
                    </Typography>
                </Box>
                

                {/* --------------------- PROJECTS CARDS BOARD ------------------------------------ */}
                <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            width: '100%',
                            gap: '35px'
                        }}
                    >
                        <ProjectCard /><div></div>
                        <ProjectCard /><div></div>
                        <ProjectCard />
                    </Box>






















                {/* --------------------- FOOTER BOARD ------------------------------------ */}   
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: '1000px',
                        widht: '100%'
                    }}
                >
                    <Typography
                            sx={{
                                fontWeight: '400',
                                fontSize: {md:' 64px', xs: '30px'},
                                textAlign: 'center',
                                fontFamily: 'Poppins',
                                color: '#FFF',
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