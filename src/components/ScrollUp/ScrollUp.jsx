import { Button, Box } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollUp() {
    const GoTopWindow = () => {
        window.scrollTo(0, 0);
    }

    return (
        
        <Box
        sx={{
            display: 'fixed',
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
            backgroundColor: '#FFF',
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
        <KeyboardArrowUpIcon sx={{color: 'black', fontSize: {md: '40px', xs: '25px'}}} className="upBTN" />
    </Box>
    )
}
