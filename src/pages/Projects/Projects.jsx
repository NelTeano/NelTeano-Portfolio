// COMPONENTS
import Navbar from '../../components/Header/Header'
import ParallaxText from '../../components/ParrallaxText/ParallaxText';
import Particles from '../../components/Particles/Particles'

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
    Divider
} from '@mui/material';

import { 
    ArrowForwardIos as ArrowForwardIosIcon,
}
from '@mui/icons-material'

import { Link } from 'react-router-dom';

// ASSETS
import myPicture from '../../assets/mySquarePicture.png'

export default function Projects() {

    
    return (
            <Container
                disableGutters={true} 
                maxWidth='100%'
            >
                <Particles />
                <Navbar />

                {/* <Typography>Under Construction</Typography> */}
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
                                // background: 'linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44)',
                                fontFamily: 'Stretch Pro, Arial, sans-serif',
                                WebkitTextFillColor: '#feb300',
                                // WebkitBackgroundClip: 'text'
                                }}> My&nbsp; 
                            </span>
                            /
                            <span 
                                style={{
                                    // background: 'linear-gradient(to right, #f32170, #ff6b08,#cf23cf, #eedd44)',
                                    // border: 'solid black 1px',
                                    fontFamily: 'Stretch Pro, Arial, sans-serif',
                                    WebkitTextFillColor: 'transparent',
                                    // WebkitBackgroundClip: 'text'
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

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '800px',
                        backgroundColor: 'green',
                        position:'relative'
                    }}
                >
                    
                </Box>
            </Container>
    )
}



