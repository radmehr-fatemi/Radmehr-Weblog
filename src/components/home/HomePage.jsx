import React from 'react';

// MUI
import { Container, Grid, Typography } from '@mui/material';

//Component
import Authors from '../author/Authors';
import Blogs from '../blog/Blogs';

const HomePage = () => {
    return <Container maxWidth="lg" sx={{ minHeight: "86vh" }}  >
        <Grid container spacing={1} >

            <Grid item xs={12} md={3} my={1} >
                <Typography
                    component="h2"
                    variant='h6'
                    fontWeight="700"
                    mb={.5}
                    color="#000000"
                > نویسندگان : </Typography>
                <Authors />
            </Grid>

            <Grid item xs={12} md={9} my={1} >
            <Typography
                    component="h2"
                    variant='h6'
                    fontWeight="700"
                    mb={.5}
                    color="#000000"
                > مقالات : </Typography>
                <Blogs />
            </Grid>

        </Grid>
    </Container>
};

export default HomePage;