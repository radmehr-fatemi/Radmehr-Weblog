import React from 'react';
import { useQuery } from '@apollo/client';

//URI
import { GET_COMMENTS_INFO } from '../../graphql/queries';

//MUI
import { Avatar, Box, Grid, Typography } from '@mui/material';

//Component
import SpinnerLoader from '../shared/SpinnerLoader';

const ShowComment = ({ slug }) => {

    const { data, loading, error, called } = useQuery(GET_COMMENTS_INFO, { variables: { slug } })

    if (loading) return <SpinnerLoader />
    if (error) return <h1>Sorry there is an error...</h1>

    if (called) return <Grid container my={2} >

        <Grid item xs={12} mb={1} >
            <Typography
                component="h3"
                variant='h6'
                fontWeight="700"
                color="#224Fcf"
            > نظرات کاربران : </Typography>
        </Grid>

        {
            data.comments.map(comment => <Grid
                key={comment.id}
                item xs={12}
                my={.6}
                boxShadow="1px 1px 6px #B0C4Df"
                borderRadius={2} p={.6}
                display="flex"
            >

                <Avatar> {comment.name} </Avatar>
                <Box>
                    <Typography
                        comment="h6"
                        variant='p'
                        fontWeight={700}
                        mr={.6}
                        color="#224F6E"
                    > {comment.name} </Typography>
                    <Typography
                    component="p"
                    variant='p'
                    color="#224F6E"
                    fontWeight={500}
                    fontSize=".9rem"
                    > {comment.text} </Typography>
                </Box>

            </Grid>)
        }
    </Grid>

};

export default ShowComment;