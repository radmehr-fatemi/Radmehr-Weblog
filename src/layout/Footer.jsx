import React from 'react';

//MUI
import { Container, Grid, Typography } from '@mui/material';

const Footer = () => {
    return <Grid container>
            <Grid item xs={12}>

                <Typography
                    padding={.6}
                    textAlign="center"
                    color="primary"
                    bgcolor="#e5e5e5"
                > پروژه وبلاگ | با کد نویسی رادمهر </Typography>

            </Grid>
        </Grid>
};

export default Footer;