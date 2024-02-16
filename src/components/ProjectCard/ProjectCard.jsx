import PropTypes from 'prop-types'

// COMPONENTS
import { Link } from 'react-router-dom';

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
    Divider,
    Paper 
} from '@mui/material';

import Carousel from '../Carousel/Carousel'


function ProjectCard({title, about, link, img}) {
    return (
        <>
            <Box
                
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: {md: '1197px', xs: '300px'},
                    height: {md: '400px', xs: '300px'},
                    backgroundColor: 'green',
                }}
            >
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'blue',
                        height: '100%',
                        width: '50%'
                    }}
                >
                    Card1
                </Box>
                <Box 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'green',
                        height: '100%',
                        width: '50%'
                    }}
                >
                    <Carousel />
                </Box>
            </Box>
        </>
    )
}

ProjectCard.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.string
}

export default ProjectCard

