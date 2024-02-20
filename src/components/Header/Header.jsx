import { useState, cloneElement  } from 'react';
import PropTypes  from 'prop-types'

import './styles.css'

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
    Home as HomeIcon,
    Web as WebIcon,
    ContactMail as ContactIcon,
    GitHub as GitHubIcon
} from '@mui/icons-material'; 


const ScrolltoAbout = () => {
    console.log("working");
    window.scrollTo(0, 800);
}



const navPages = [
    {
        page: 'HOME',
        link: '/',
        icon: <HomeIcon />,
    },
    {
        page: 'ABOUT',
        icon: <ContactIcon />,
        onClick: ScrolltoAbout
    },
    {
        page: 'WORK',
        link: '/work',
        icon: <WebIcon />,
    },
    {
        page: 'CONTACT',
        link: '/contact',
        icon: <ContactIcon />,
    },
];

const renderIcon = (icon) => {
    return cloneElement(icon, { fontSize: '24px',  });
};

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
                sx={{ width: 250, fontFamily: 'Poppins', fontWeight: '400', mt: 5 }}
                role="presentation"
                onClick={handleCloseNavMenu}
                onKeyDown={handleCloseNavMenu}
            >
                
                <List>
                    {navPages.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            {renderIcon(item.icon)}
                        </ListItemIcon>
                            <Link to={item.link} style={{ textDecoration: 'none', color: '#212B36' }}>{item.page}</Link>
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
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    color: 'white',
                                    gap: '10px'
                                }}  
                            >
                                <span>
                                    <Link to={'https://github.com/NelTeano'} target="_blank" rel="noopener noreferrer" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',}} >
                                        <GitHubIcon fontSize='inherit' sx={{fontSize: '40px', backgroundColor: 'black', color: 'white', borderRadius: '20px', border: 'solid white 1px '}}/>
                                    </Link>
                                </span>
                                <Link to={'https://github.com/NelTeano'} style={{color: 'white', textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                                    NelTeano
                                </Link>
                            </Typography>
                        </Box>
                        <Box sx={{display: { xs: 'none', md:'flex'}, gap:'40px', }}>
                            {navPages.map((pages, index)=>(
                                <Link onClick={pages.onClick} 
                                    className='nav-option'
                                    to={pages.link} 
                                    key={index}
                                >
                                    <Typography 
                                        sx={{
                                            fontSize: '15px', 
                                            fontWeight: '600',
                                        }}
                                    >
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