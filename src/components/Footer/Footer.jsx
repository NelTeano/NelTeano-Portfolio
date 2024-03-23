import { useState } from 'react'
import { InView } from 'react-intersection-observer';
import {Box, Slide, Typography,} from '@mui/material'

import { Link } from 'react-router-dom';

// ICONS
import { 
    LinkedIn as LinkedinIcon,
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    Mail as MailIcon
} from '@mui/icons-material/';

const Footer = () => {


    const [initAnimation, setInitAnimation] = useState(false);


    return (
        <>
            <Box
                    sx={{
                        display: 'flex',
                        position: 'relative',
                        backgroundColor: 'rgba(19, 19, 19, 1)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        height: {md: '1000px', xs: '1100px'},
                        widht: '100%'
                    }}
                >
                    <InView as="div" 
                        onChange={(inView) => { 
                            setInitAnimation(inView)
                        }}
                    >
                        <Slide  in={initAnimation}  timeout={1300}>
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
                                fontSize: {md: '20px', xs: '12px'},
                                fontWeight: '400',
                                lineHeight: '30px',
                                textDecoration: 'none',
                            }}
                        >
                            I would like to express my heartfelt gratitude for taking the time to review my portfolio. <br></br><br></br>

                            If you have any further questions, collaborations, or opportunities you&apos;d like to discuss,
                            I would be delighted to connect with you. Please feel free to reach out to me through the following platforms:<br></br><br></br>
                            <Link to={'mailto:jonelteano29@gmail.com'} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '60px'}} >
                                <MailIcon sx={{fontSize: {md: '70px', xs: '50px'}}} fontSize='inherit' />
                            </Link>
                            <Link to={'https://www.linkedin.com/in/teanojonel/'} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '60px'}} >
                                <LinkedinIcon sx={{fontSize: {md: '70px', xs: '50px'}}} fontSize='inherit' />
                            </Link>
                            <Link to={'https://www.facebook.com/96jonel96/'} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '60px'}} >
                                <FacebookIcon sx={{fontSize: {md: '70px', xs: '50px'}}} fontSize='inherit' />
                            </Link>
                            <Link to={'https://www.instagram.com/shu1dddd/'} target="_blank" rel="noopener noreferrer" style={{color: 'white', fontSize: '60px'}} >
                                <InstagramIcon sx={{fontSize: {md: '70px', xs: '50px'}}} fontSize='inherit' />
                            </Link>
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: 'Poppins',
                                fontSize: {md: '20px', xs: '12px'},
                                fontWeight: '400',
                                lineHeight: '30px',
                            }}
                        >
                            Once again, I extend my deepest appreciation for your time and consideration.
                            I look forward to the possibility of collaborating with you in the future. Thank you!
                        </Typography>
                    </Box>
                    
                </Box>
        </>
    )
}

export default Footer
