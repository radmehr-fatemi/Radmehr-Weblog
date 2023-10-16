import React from 'react';

//MUI
import { Container, Grid, Typography } from '@mui/material';

const Footer = () => {
    return <Grid container>
            <Grid item xs={12}>

                <Typography
                    padding={.6}
                    textAlign="center"
                    color="#fff"
                    bgcolor="#4E7590"
                > پروژه وبلاگ | با کد نویسی رادمهر </Typography>

            </Grid>
        </Grid>
};

export default Footer;