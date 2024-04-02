import { useState } from 'react';
import PropTypes from 'prop-types'

// COMPONENTS
import { Link,} from 'react-router-dom';

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
    Button,
    Modal,
    Tooltip
} from '@mui/material';

import { 
    CCarousel,
    CCarouselItem,
    CImage,
    CCarouselCaption
} from '@coreui/react'

import Carousel from '../Carousel/Carousel'


// ICONS
import {
    GitHub as GitHubIcon,
    OpenInNew as LinkNewTabIcon
} from '@mui/icons-material'; 

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





function ProjectCard({title, about, link, img, bg, textColor, btnColor, more}) {

    const [handleModal, setModal] = useState(false);



    // const Responsibilities = more.responsibilities

    // const TechStackInfo = more.techStack.map((stacks) => {return (stacks) }) 
    // const ResponsibilitiesInfo = more.responsibilities.map((stacks) => {return (stacks) })
    // // {more.techStack.map((stacks, index) => (<p key={index}>{stacks.name}</p>))}
    
    // console.log(handleModal, TechStackInfo, ResponsibilitiesInfo);

    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);


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
                            onClick={handleOpen}
                        >
                            View Project
                        </Button>
                    </Link>
                </Box>
                <Tooltip  placement="right" title={'View Photos'}>
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        cursor: 'pointer',
                        width: {md: '50%', xs: '100%'},
                    }}
                >
                    <Carousel img={img}  />
                </Box>
                </Tooltip>
            </Box>
            <ViewProject isOpen={handleModal} HandleClose={handleClose} images={img} bg={bg} textColor={textColor} title={title} more={more}/>
        </>
    )
}












const ViewProject = ({isOpen, HandleClose, images, bg, textColor, title, more}) => {

    const renderIcons = (iconName) => {
        switch(iconName){
            case 'React' :
                return <ReactIcon fontSize={'20px'} />
            case 'Electron' :
                return <ElectronIcon fontSize={'20px'} />
        }
    }

    const style = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: {md: '850px', xs: '600px'},
        bgcolor: 'background.paper',
        backgroundColor: `${bg}`,
        // border: `1px solid ${textColor}`,
        boxShadow: 24,
        gap: {md: '60px'}
    };


    return (
        <>
            <Modal
                open={isOpen}
                onClose={HandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            background: 'transparent',
                            width: '800px',
                            gap: '40px'
                        }}
                    >
                        <Box>
                            <Typography
                                sx={{
                                    fontFamily: 'Stretch Pro',
                                    fontSize: {md: '48px', xs: '20px'},
                                    fontWeight: '400',
                                    lineHeight: {md: '49px', xs: '20px'},
                                    letterSpacing: '0.1px',
                                    textAlign: 'left',
                                    color: `${textColor}`
                                }} 
                            >
                                {title}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                color: `${textColor}`
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: {md: '20px', xs: '14px'},
                                    fontWeight: '400',
                                    lineHeight: '30px',
                                    textAlign: {md: 'left', xs: 'center'},
                                }}
                            >
                                Tech Stack
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', }}>
                                        {more.techStack.map((stacks, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    backgroundColor: 'transparent',
                                                    border: `solid 1px ${textColor}`,
                                                    width: '100px',
                                                    padding: 0.2,
                                                    borderRadius: '40px',
                                                    gap: '5px'
                                                }}
                                            >
                                                <Typography >{stacks.name}</Typography> 
                                                {renderIcons(stacks.icon)}
                                            </Box>
                                        ))}
                                </Box>
                            
                            <Box
                            >
                                <Typography 
                                    sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: {md: '20px', xs: '14px'},
                                        fontWeight: '400',
                                        lineHeight: '30px',
                                        textAlign: {md: 'left', xs: 'center'},
                                    }}
                                >
                                    Resposibilities :
                                </Typography>
                                    <List disablePadding sx={{ listStyleType: 'disc', listStylePosition: 'inside' }}>                                      
                                        {more.responsibilities.map((respo, index) => (
                                                <ListItem key={index} sx={{ display: 'list-item', fontSize: '15px' }}>
                                                    {respo}
                                                </ListItem>
                                        ))}
                                    </List>
                            </Box>

                            <Typography 
                                sx={{
                                    fontFamily: 'Poppins',
                                    fontSize: {md: '20px', xs: '14px'},
                                    fontWeight: '400',
                                    lineHeight: '30px',
                                    textAlign: {md: 'left', xs: 'center'},
                                }}
                            >
                                Resources :
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: '100px'
                                }}
                            >
                                <Link to={more.gitURL} target="_blank" rel="noopener noreferrer">
                                    <Typography>
                                        Source Code : <GitHubIcon />
                                    </Typography>
                                </Link>
                                <Link to={more.prevURL} target="_blank" rel="noopener noreferrer">
                                    <Typography>
                                        Live View : <LinkNewTabIcon />
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>

                    <Box 
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: `rgba(19, 19, 19, 1)`,
                            height: '100%',
                            width: '600px',
                        }}
                    >
                        <CCarousel 
                            controls 
                            transition="crossfade" 
                            className="carousel"
                        >
                            {images.map((slide, index) => (
                                <CCarouselItem interval={1000} style={{height: '780px', width: '600px'}}  className='carousel-item' key={index}>
                                    <CImage fluid style={{height: '100%'}} src={slide.imgPath} alt={slide.label} />
                                    <CCarouselCaption className="d-none d-md-block">
                                        <Typography 
                                            sx={{
                                                fontWeight: '600',
                                                lineHeight: '24px',
                                                fontSize: '20px',
                                                fontFamily: 'Poppins',
                                                color: bg
                                            }}>
                                                {slide.label}
                                        </Typography>
                                    </CCarouselCaption>
                                </CCarouselItem>
                            ))}
                        </CCarousel>
                    </Box>
                </Box>
            </Modal>
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
    more: PropTypes.object,
}

ViewProject.propTypes = {
    isOpen: PropTypes.bool,
    HandleClose: PropTypes.func,
    images: PropTypes.array,
    bg: PropTypes.string,
    textColor: PropTypes.string,
    title: PropTypes.string,
    more: PropTypes.object,
}

export default ProjectCard

