import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

//URI
import { GET_POSTS_INFO } from '../../graphql/queries';

// MUI
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';

//function
import { shortHandler } from '../shared/function';

//Component
import SpinnerLoader from '../shared/SpinnerLoader';

const Blogs = () => {

    const { data, loading, error, called } = useQuery(GET_POSTS_INFO);

    if (loading) return <SpinnerLoader />
    if (error) return <h1> Sorry there is an error.. </h1>

    if (called) {
        const { posts } = data

        return <Grid container spacing={1}>

            {posts.map(post => <Grid item xs={12} sm={6} md={4} key={post.id} >

                <Card sx={{ maxWidth: "100%", boxShadow: "1px 1px 4px 1px #B0C4Df", borderRadius: 2 }} >

                    <CardHeader
                        sx={{ padding: "0", py: 1 }}
                        avatar={<Avatar src={post.author.avatar.url} />}
                        title={<Typography
                            component="p"
                            variant='p'
                            fontWeight={700}
                            mr={1}
                        > {post.author.name} </Typography>}
                    />

                    <CardMedia
                        component="img"
                        // height="140"
                        width="190"
                        height="140"
                        image={post.coverPhoto.url}
                        alt={post.slug}
                    />

                    <CardContent>
                        <Typography component="h4" variant='p' color="primary" > {shortHandler(post.title, 30)} ... </Typography>
                    </CardContent>

                    <CardActions>
                        <Link to={`/blogs/${post.slug}`} style={{ width: "100%" ,textDecoration: "none" }} >
                            <Button variant="outlined" sx={{ width: "100%" }} > مشاهده مقاله </Button>
                        </Link>
                    </CardActions>

                </Card>
            </Grid>)}
        </Grid>
    }
};

export default Blogs;