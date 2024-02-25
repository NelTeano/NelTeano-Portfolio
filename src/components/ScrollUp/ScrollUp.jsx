import { Button } from "@mui/material";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollUp() {
    const GoTopWindow = () => {
        window.scrollTo(0, 0);
    }

    return (
        <Button
        sx={{
            display: 'fixed',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'fixed',
            right: '5%',
            top: '85%',
            borderRadius: '60%',
            height: '50px',
            width: '30px',
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
        <KeyboardArrowUpIcon sx={{color: 'black'}} className="upBTN" fontSize="large" />
    </Button>
    )
}
