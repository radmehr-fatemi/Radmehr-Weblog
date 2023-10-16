import React from 'react';
import { Link } from 'react-router-dom';

//MUI
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

//ICON
import BookmarksIcon from '@mui/icons-material/Bookmarks';

const Header = () => {
    return <AppBar position='sticky'>
        <Container maxWidth="lg" >
            <Toolbar sx={{ mr: 0 ,p:0 }}>

                <Link to="/" style={{ textDecoration: "none", color: "#fff", width: "100%" }} >
                    <Typography component="h2" variant='h5' fontWeight="500" flex={1} > وبلاگ رادمهر </Typography>
                </Link>
                
                <Link to="/" style={{ textDecoration: "none", color: "#fff" }} >
                    <BookmarksIcon />
                </Link>

            </Toolbar>
        </Container>
    </AppBar >
};

export default Header;