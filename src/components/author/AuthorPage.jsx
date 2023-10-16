import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

//URI
import { GET_AUTHOR_INFO } from '../../graphql/queries';

//MUI
import { Avatar, Container, Grid, Typography } from '@mui/material';

//Component
import SpinnerLoader from '../shared/SpinnerLoader';
import CardBlog from '../shared/CardBlog';

const AuthorPage = () => {

    const { slug } = useParams();
    const { data, loading, error, called } = useQuery(GET_AUTHOR_INFO, { variables: { slug } })

    if (loading) return <div style={{ minHeight: "86vh" }} > <SpinnerLoader /></div>
    if (error) return <h1>Sorry there is an error...</h1>

    if (called) {
        const { name, field, avatar, description, posts } = data.author;

        return <Container maxWidth="lg"  >
            <Grid container sx={{ minHeight: "86vh" }}>

                <Grid item xs={12} display="flex" flexDirection="column" alignItems="center" my={2}  >
                    <Avatar src={avatar.url} sx={{ width: 100, height: 100, mb: 2, boxShadow: "0px 0px 4px 4px #fff ,0px 0px 4px 4px #224F6E" }} />
                    <Typography component="h3" variant='h6' fontWeight="700" color="#224F6E" lineHeight={.9} > {name} </Typography>
                    <Typography component="p" variant='p' fontWeight="400" color="#224F6E"> {field} </Typography>
                </Grid>

                <Grid item xs={12} px={2} >
                    <div style={{ textAlign: "center" }} dangerouslySetInnerHTML={{ __html: (description.html) }} ></div>
                </Grid>

                <Grid item xs={12} >
                    <Typography
                        component="h3"
                        variant='h6'
                        fontWeight="700"
                        color="#224F6E"
                        lineHeight={.9}
                        mb={2}
                    > مقالات : </Typography>
                    
                    <CardBlog posts={posts} />
                </Grid>

            </Grid>
        </Container>
    }
};

export default AuthorPage;