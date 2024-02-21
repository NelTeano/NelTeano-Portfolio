// COMPONENTS
import Navbar from '../../components/Header/Header'

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
    Divider
} from '@mui/material';

import { Link } from 'react-router-dom';

export default function Projects() {
    return (
            <Container
                disableGutters={true} 
                maxWidth='100%'
            >
                <Navbar />
                This is Projects Page
            </Container>
    )
}

