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
    

    // PROJECT SLIDES MANAGER
    const projectDetails = [
        {
            title: 'WATER REFILLING SYSTEM',
            about: 'A mobile app design for Bean Block’s E-commerce app ',
            link: '#',
            img: 
            [   
                {   
                    label: 'Test1',
                    imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
                },
                {
                    label: 'Test2',
                    imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                },
            ],
        },
        {
            title: 'WATER REFILLING SYSTEM',
            about: 'A mobile app design for Bean Block’s E-commerce app ',
            link: '#',
            img: 
            [   
                {   
                    label: 'Test1',
                    imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                },
                {
                    label: 'Test2',
                    imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                },
                {
                    label: 'Test3',
                    imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                },
            ],
        },
        {
            title: 'WATER REFILLING SYSTEM',
            about: 'A mobile app design for Bean Block’s E-commerce app ',
            link: '#',
            img: 
            [   
                {   
                    label: 'Test1',
                    imgPath: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
                },
                {
                    label: 'Test2',
                    imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                },
            ],
        },
        {
            title: 'WATER REFILLING SYSTEM',
            about: 'A mobile app design for Bean Block’s E-commerce app ',
            link: '#',
            img: 
            [   
                {   
                    label: 'Test1',
                    imgPath: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
                },
                {
                    label: 'Test2',
                    imgPath: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
                },
                {
                    label: 'Test3',
                    imgPath: 'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
                },
            ],
        },
    ]


    const EnableAnimation = (enable) => {
        setActive(enable);
    }
    
    // ANIMATION ACTIVATION
    const [active, setActive] = useState(false); // WELCOME BOARD
    const [active2, setActive2] = useState(false); // ABOUT BOARD
    const [active3, setActive3] = useState(false); // PROJECT BOARD
    const [active4, setActive4] = useState(false); // FOOTER BOARD


    // <InView as="div" 
    //                     onChange={(inView) => { 
    //                         EnableAnimation(inView);
    //                     }}
    //                 >
    //                     <Zoom in={active}  timeout={3000}>

    //                     </Zoom>
    // </Inview>               

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
                                        fontSize: {md:' 32px', xs: '13px'},
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
                                    fontSize: {md:' 32px', xs: '13px'},
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
                                        fontSize: {md:' 32px', xs: '13px'},
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
                        height: '576px'
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
                                        fontSize: {md:' 32px', xs: '13px'},
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
                                        fontSize: {md:' 32px', xs: '13px'},
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
                                    fontSize: {md:' 32px', xs: '13px'},
                                    fontWeight: '400',
                                    letterSpacing: '0em',
                                    textAlign: 'center',
                                }}>
                                    Certificates & Licenses
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
                    <Timeline defaultColor="bg-[darkOrange]" />
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
                        height: '1000px',
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