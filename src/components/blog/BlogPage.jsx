import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//URI
import { GET_POST_INFO } from '../../graphql/queries';

//MUI
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';

//ICON
import BackIcon from '@mui/icons-material/ReplyAll';

//Component
import SpinnerLoader from '../shared/SpinnerLoader';
import ScrollToTop from '../shared/ScrollToTop';
import CommentField from '../comment/CommentField';
import ShowComment from '../comment/ShowComment';

const BlogPage = () => {

    const { slug } = useParams();
    const { data, loading, error, called } = useQuery(GET_POST_INFO, { variables: { slug } });
    const navigate = useNavigate();
    
    if (loading) return <div style={{ minHeight: "86vh" }} > <SpinnerLoader /> </div>
    if (error) return <h1>Sorry there is an error...</h1>

    if (called) {
        const { author: { name, field, avatar }, title, coverPhoto, content } = data.post;

        return <Container maxWidth="lg" >
            <Grid container>

                <Grid item xs={12} display="flex" alignItems="flex-start" justifyContent="space-between" py={2} >
                    <Typography
                        component="h3"
                        variant='p'
                        fontWeight={700}
                        color="primary"
                        width="90%"
                    // textAlign="center"
                    > {title} : </Typography>
                    <BackIcon onClick={() => navigate(-1)} />
                </Grid>

                <Grid item xs={12} sm={10}>
                    <img src={coverPhoto.url} alt={slug} style={{ width: "100%", borderRadius: 20  }} />
                </Grid>

                <Grid item xs={8} sm={6} md={4} my={2} boxShadow='1px 1px 6px 2px #B0C4Df' p={1} borderRadius={2} display="flex" alignItems="center" justifyContent="flex-start" >
                    <Avatar src={avatar.url} sx={{ ml: 1 }} />
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }} >
                        <Typography component="h4" variant='p' color="#224F6E" > {name} </Typography>
                        <Typography component="p" variant='p' color="#224F6E" fontSize={13} lineHeight={.7} > {field} </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} my={1} >
                    {/* <Typography component="h4" variant='h6' color="#224F6E" fontWeight={700} > توضیحات : </Typography> */}
                    <div dangerouslySetInnerHTML={{ __html: (content.html) }} ></div>
                </Grid>

                <Grid item xs={12} >
                    <CommentField slug={slug} />
                </Grid>

                <Grid item xs={12} >
                    <ShowComment slug={slug} />
                </Grid>

            </Grid>
            <ScrollToTop />
        </Container>
    }
};

export default BlogPage;