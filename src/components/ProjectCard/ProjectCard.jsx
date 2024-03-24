import { useState } from 'react';
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
    Button,
    Modal
} from '@mui/material';

import Carousel from '../Carousel/Carousel'


function ProjectCard({title, about, link, img, bg, textColor, btnColor}) {

    const [handleModal, setModal] = useState(false);

    console.log(handleModal)

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
            <ViewProject isOpen={handleModal} HandleClose={handleClose}/>
        </>
    )
}

const style = {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: {md: '800px', xs: '600px'},
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


const ViewProject = ({isOpen, HandleClose}) => {

    
    return (
        <>
            <Modal
                open={isOpen}
                onClose={HandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                    <Box>
                    
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
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
}

ViewProject.propTypes = {
    isOpen: PropTypes.bool,
    HandleClose: PropTypes.func 
}

export default ProjectCard

