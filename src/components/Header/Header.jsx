import { useState } from 'react';
import PropTypes  from 'prop-types'

// COMPONENTS
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

// ICONS
import {
    Menu as MenuIcon,
    Face6TwoTone as Face6TwoToneIcon,
} from '@mui/icons-material'; 




const navPages = [
    {
        page: 'HOME',
        link: '/',
    },
    {
        page: 'WORK',
        link: '/',
    },
    {
        page: 'CONTACT',
        link: '/',
    },
]

export default function Header({mt}) {

    const [anchorElNav, setAnchorElNav] = useState(false);

    const handleOpenNavMenu = () => {
        setAnchorElNav(true);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };

    const list = () => (
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleCloseNavMenu}
                onKeyDown={handleCloseNavMenu}
            >
                <List>
                    <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                        <Face6TwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    {navPages.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <MenuIcon />
                        </ListItemIcon>
                            <a href={item.link} style={{ textDecoration: 'none', color: '#212B36' }}>{item.page}</a>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        );


    return (
        <>
            <AppBar position="sticky" sx={{mt: mt, backgroundColor: 'transparent', boxShadow: 'none' }}>
                <Container maxWidth="xl">
                    <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', height: '100px',}}>
                        <Box>
                            <Typography
                                sx={{
                                    fontWeight: '700',
                                    fontSize: '25px',
                                    fontFamily: 'Poppins',
                                }}  
                            >
                                NelTeano
                            </Typography>
                        </Box>
                        <Box sx={{display: { xs: 'none', md:'flex'}, gap:'40px', }}>
                            {navPages.map((pages, index)=>(
                                <Link style={{textDecoration: 'none', color: 'white',}} to={pages.link} key={index}>
                                    <Typography sx={{fontSize: '15px', fontWeight: '600'}}>
                                        {pages.page}
                                    </Typography>
                                </Link>
                            ))}
                        </Box>
                        <Box sx={{display: { xs: 'flex', md:'none'}, gap:'40px', }}>
                            <IconButton onClick={handleOpenNavMenu}>
                                <MenuIcon sx={{color: 'white'}}/>
                            </IconButton>   
                        </Box>
                    </Box>
                </Container>
            </AppBar>
            <SwipeableDrawer
                anchor={'right'}
                open={anchorElNav}
                onClose={handleCloseNavMenu}
                onOpen={handleOpenNavMenu}
            >
                {list()}
            </SwipeableDrawer>
        </> 
    )

    
}

Header.propTypes = {
    mt: PropTypes.number
}