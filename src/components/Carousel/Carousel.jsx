import { useState } from 'react';

import { 
    CCarousel,
    CCarouselItem,
    CImage
} from '@coreui/react'

import 'bootstrap/dist/css/bootstrap.min.css'

const slides = [
        {
        label: 'San Francisco Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
        },
        {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
        },
        {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
        },
];


export default function Carousel() {
    return (
        <CCarousel 
            controls 
            transition="crossfade" 
            className="carousel"
        >
            {slides.map((slide, index) => (
                <CCarouselItem style={{height: '400px'}} key={index}>
                    <CImage style={{height: '100%'}} src={slide.imgPath} alt={`slide ${index + 1}`} />
                </CCarouselItem>
            ))}
        </CCarousel>
    );
}
