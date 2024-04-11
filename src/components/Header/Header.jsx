import { useState, cloneElement, useEffect  } from 'react';
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


import Logo from '../../assets/PortfolioLogo.png'

const navPages = [
    {
        page: 'HOME',
        link: '/',
        icon: <HomeIcon />,
        onClick: () => {window.scrollTo(0, 0);}
    },
    {
        page: 'ABOUT',
        link: '/',
        icon: <ContactIcon />,
        onClick: () => {window.scrollTo(0, 800);}
    },
    {
        page: 'PROJECTS',
        link: '/',
        icon: <WebIcon />,
        onClick: () => {window.scrollTo(0, 5950)}
    },
    {
        page: 'CONTACT',
        link: '',
        icon: <ContactIcon />,
        onClick: () => {window.scrollTo(0, 7700);}
    },
];

const renderIcon = (icon) => {
    return cloneElement(icon, { fontSize: '24px',  });
};

export default function Header({mt, onscrollChangeColor}) {
    
    const [headerColor, setHeaderColor] = useState({
        color: 'white',
        bgColor: 'transparent',
    });

    const [anchorElNav, setAnchorElNav] = useState(false);
    
    const handleOpenNavMenu = () => {
        setAnchorElNav(true);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(false);
    };

    // ACTIVATOR onscrollChangeColor props
    if(onscrollChangeColor){
        const listenScrollEvent = (e) => {
            if (window.scrollY < 73) {
                return setHeaderColor({
                    color: 'white',
                    bgColor: 'transparent',
                    fontWeight: '600'
                })
            } else if (window.scrollY > 70) {
                return setHeaderColor({
                    color: 'white',
                    bgColor: 'rgb(19, 19, 19, 1)',
                    fontWeight: '600'
                })
            } 
        }
        
        // useEffect(() => {
            window.addEventListener('scroll', listenScrollEvent);
    
        //     return () =>
        //         window.removeEventListener('scroll', listenScrollEvent);
        // }, []);
    }    

    

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
                            <Link onClick={item.onClick} to={item.link} style={{ textDecoration: 'none', color: '#212B36' }}>{item.page}</Link>
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        );


    return (
        <>
            <AppBar position="sticky" sx={{mt: mt, backgroundColor: headerColor.bgColor, boxShadow: 'none', transition: '0.5s'}}>
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
                                <Link to={'https://github.com/NelTeano'} style={{color: headerColor.color, textDecoration: 'none'}} target="_blank" rel="noopener noreferrer">
                                    NelTeano
                                </Link>
                            </Typography>
                            {/* <img width={'90px'} height={'100px'} src={Logo}></img> */}
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
                                            color: headerColor.color,
                                            transition: '0.5s'
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
    mt: PropTypes.number,
    onscrollChangeColor: PropTypes.bool
}