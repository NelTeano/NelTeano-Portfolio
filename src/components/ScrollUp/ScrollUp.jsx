import { useState, useEffect } from 'react'
import { Button, Box } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollUp() {

    const [isRender, setRender] = useState({color: 'transparent', bg: 'transparent'})

    const GoTopWindow = () => {
        window.scrollTo(0, 0);
    }

    const renderOnScroll = () => {
        if (window.scrollY < 73) {
            return setRender({color: 'transparent', bg: 'transparent'})
        } else if (window.scrollY > 70) {
            return setRender({color: 'black', bg: '#fff'})
        } 
    }


    useEffect(() => {
        window.addEventListener('scroll', renderOnScroll);

        return () =>
            window.removeEventListener('scroll', renderOnScroll);
    }, []);





    return (
        
        <Box
        sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '5%',
            top: '85%',
            height: {md: '50px', xs: '40px'},
            width: {md: '50px', xs: '40px'},
            borderRadius: '50%',
            zIndex: 999,
            cursor: 'pointer',
            backgroundColor: isRender.bg,
            transition: '0.8s',
            '&:hover': {
                background: "#202020",
                '& .upBTN': {
                    color: 'white' 
                }
            },
            "&:hover .upBTN": {
                display: "block"
            }
        }}
        onClick={GoTopWindow}
    >
        <KeyboardArrowUpIcon sx={{color: isRender.color, fontSize: {md: '40px', xs: '25px'}, transition: '0.8s',}} className="upBTN" />
    </Box>
    )
}
