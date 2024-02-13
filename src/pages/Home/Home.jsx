// COMPONENTS
import { Container, Button } from '@mui/material';
import Navbar from '../../components/Header/Header'

// ICONS
import { Adb as AdbIcon} from '@mui/icons-material/';




export default function Home() {



    return (
        <>
        <Navbar />
            <Container  disableGutters={true} maxWidth='xl' sx={{background: 'green', mt: 200}}>
                This is Homepage 
                <Button variant="contained">Change Value</Button>
                <AdbIcon />
            </Container>
                
        </>
    )
}



