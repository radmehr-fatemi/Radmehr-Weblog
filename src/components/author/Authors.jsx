import React from 'react';
import { useQuery } from "@apollo/client";
import { Link } from 'react-router-dom';

//URI
import { GET_AUTHORS_INFO } from '../../graphql/queries';

//MUI
import { Avatar, Divider, Grid, Typography } from '@mui/material';

//Component
import SpinnerLoader from '../shared/SpinnerLoader';

const Authors = () => {

    const { data, loading, error, called } = useQuery(GET_AUTHORS_INFO);

    if (loading) return <SpinnerLoader />
    if (error) return <h3> Sorry there is an error </h3>

    if (called) {
        const { authors } = data;

        return <Grid container boxShadow="1px 1px 6px #B0C4Df" borderRadius={2} p={.6} >
            {
                authors.map((author, index) => <React.Fragment key={author.id} >
                    <Grid item
                        xs={12}
                        key={author.id}
                        py={1}
                    >

                        <Link to={`/authors/${author.slug}`}
                            style={{ textDecoration: "none", display: "flex", alignItems: "center", background: "333" }}
                        >

                            <Avatar src={author.avatar.url} sx={{ ml: 1 }} />
                            <Typography
                                component="h4"
                                variant='p'
                                color="#3C5F78"
                            >{author.name} </Typography>
                        </Link>
                    </Grid>

                    {
                        !index == authors.length -1 &&
                        <Grid item xs={12} >
                            <Divider variant='middle' color='#d1d1ff' />
                        </Grid>
                    }
                </React.Fragment>)
            }

        </Grid>
    }
};

export default Authors;