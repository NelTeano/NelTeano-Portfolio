import PropTypes from 'prop-types'

// COMPONENTS
import { Link, Navigate} from 'react-router-dom';

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
    Paper,
    Button
} from '@mui/material';

import Carousel from '../Carousel/Carousel'


function ProjectCard({title, about, link, img, bg, textColor, btnColor}) {



    return (
        <>
            <Box
                
                sx={{
                    display: 'flex',
                    position: 'relative',
                    zIndex: 2,
                    flexDirection: {md: 'row', xs: 'column-reverse'},
                    width: {lg: '1197px', md: '997px', xs: '300px'},
                    height: {md: '400px', xs: '400px'},
                    border: 'none',
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: bg,
                        height: '100%',
                        width: {md: '50%', xs: '100%'},
                        padding: {md: '0px 0px 0px 30px', xs: '0px 0px 0px 10px'},
                        gap: '20px',
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Stretch Pro',
                            fontSize: {md: '48px', xs: '20px'},
                            fontWeight: '400',
                            lineHeight: {md: '49px', xs: '20px'},
                            letterSpacing: '0.1px',
                            textAlign: 'left',
                            color: textColor
                        }} 
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: 'Poppins',
                            fontSize: {md: '16px', xs: '10px'},
                            fontWeight: '400',
                            lineHeight: '24px',
                            textAlign: 'left',
                            color: textColor
                        }} 
                    >
                        {about}
                    </Typography>
                    <Link to={link}>
                        <Button
                            sx={{
                                backgroundColor: 'transparent',
                                borderRadius: '5px',
                                height: {md: '55.74px', xs: '30px'},
                                width: {md: '227.19px', xs: '150px'},
                                padding: {md: '12.87px, 29.6px, 12.87px, 29.6px', xs: '5px 10px 5px 10px'},
                                color: btnColor,
                                border: `solid ${btnColor} 1.29px`,
                                fontFamily: 'Poppins',
                                textTransform: 'capitalize',
                                fontWeight: '600',
                                fontSize: '19.92px'
                            }}
                        >
                            View Project
                        </Button>
                    </Link>
                </Box>
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: {md: '50%', xs: '100%'},
                    }}
                >
                    <Carousel img={img}  />
                </Box>
            </Box>
        </>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.array,
    bg: PropTypes.string,
    btnColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default ProjectCard

