import { useState } from 'react';
import PropTypes from 'prop-types';


// COMPONENTS
import {
    Modal,
    Typography,
    Box,
    IconButton 
} from '@mui/material'


import { 
    CCarousel,
    CCarouselItem,
    CImage,
    CCarouselCaption
} from '@coreui/react'


// ICONS
import CloseIcon from '@mui/icons-material/Close';


// STYLES
import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Carousel({img}) {

    const [handleModal, setModal] = useState(false);

    console.log(handleModal)

    const handleOpen = () => setModal(true);
    const handleClose = () => setModal(false);

    const slideSource = img;

    
    return (
            <>
                <figure
                    onClick={handleOpen}
                >
                    <CCarousel 
                        controls 
                        transition="crossfade" 
                        className="carousel"
                    >
                        {slideSource.map((slide, index) => (
                            <CCarouselItem interval={1000} className='carousel-item' key={index}>
                                <CImage fluid style={{height: '100%'}} src={slide.imgPath} alt={slide.label} />
                            </CCarouselItem>
                        ))}
                    </CCarousel>
                </figure>
                <ViewImages isOpen={handleModal} HandleClose={handleClose} Images={img}/>
            </>
    );
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '710px',
    height: {md: 'auto', xs: '600px'},
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 24,
    p: 1,
};


const ViewImages = ({isOpen, HandleClose, Images}) => {

    const ImageSource = Images;

    return (
        <>
            <Modal
                open={isOpen}
                onClose={HandleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box sx={{display: 'flex', justifyContent: 'flex-end', mb: 1, width: '100%',}}>
                        <IconButton onClick={HandleClose}>
                            <CloseIcon fontSize='medium' htmlColor='rgba(19, 19, 19, 1)' />
                        </IconButton>
                    </Box>
                    <CCarousel 
                            controls 
                            transition="crossfade" 
                            className="carousel"
                        >
                            {ImageSource.map((slide, index) => (
                                <CCarouselItem interval={1000} style={{height: '700px', width: '700px'}}  className='carousel-item' key={index}>
                                    <CImage fluid style={{height: '100%'}} src={slide.imgPath} alt={slide.label} />
                                    <CCarouselCaption className="d-none d-md-block">
                                        <Typography 
                                            sx={{
                                                fontWeight: '400',
                                                lineHeight: '24px',
                                                fontSize: '20px',
                                                fontFamily: 'Poppins',
                                                
                                            }}>
                                                {slide.label}
                                        </Typography>
                                    </CCarouselCaption>
                                </CCarouselItem>
                            ))}
                        </CCarousel>
                </Box>
            </Modal>
        </>
    )
}


Carousel.propTypes = {
    img: PropTypes.array
}

ViewImages.propTypes = {
    isOpen: PropTypes.bool,
    HandleClose: PropTypes.func,
    Images: PropTypes.array
}