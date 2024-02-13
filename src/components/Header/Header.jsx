import { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    Container, 
    Typography,
    Box,
    Menu,
    MenuItem,
    Button,
    IconButton,
    Avatar,
    Tooltip
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

// const pages = ['Products', 'Pricing', 'Blog'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const navPages = [
    {
        page: 'Products',
        link: '/',
    },
    {
        page: 'Pricing',
        link: '/',
    },
    {
        page: 'Blog',
        link: '/',
    },
]

export default function Header() {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

      
    return (
        <>
           <AppBar position="fixed">
            <Container maxWidth="xl">
                <Box sx={{display: 'flex', justifyContent:'space-between', alignItems: 'center', height: '40px'}}>
                    <Box>
                        <Typography>Logo</Typography>
                    </Box>
                    <Box sx={{display: { xs: 'none', md:'flex'}, gap:'40px', }}>
                        {navPages.map((pages, index)=>(
                            <Link to={pages.link} key={index}>
                                <Typography>{pages.page}</Typography>
                            </Link>
                        ))}
                    </Box>
                    <Box sx={{display: { xs: 'flex', md:'none'}, gap:'40px', }}>
                        {/* {navPages.map((pages, index)=>(
                            <Link to={pages.link} key={index}>
                                <Typography>{pages.page}</Typography>
                            </Link      >
                        ))} */}
                        <IconButton>

                        </IconButton>
                    </Box>
                </Box>
            </Container>
            </AppBar>
        </> 
    )
}
