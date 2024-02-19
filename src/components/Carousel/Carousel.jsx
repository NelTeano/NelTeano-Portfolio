
import PropTypes from 'prop-types';




import { 
    CCarousel,
    CCarouselItem,
    CImage
} from '@coreui/react'

import './Styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Carousel({img}) {

    const slideSource = img;

    
    return (
        
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
       
    );
}


Carousel.propTypes = {
    img: PropTypes.array
}