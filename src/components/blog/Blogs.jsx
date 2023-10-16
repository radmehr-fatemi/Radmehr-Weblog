import React from 'react';
import { useQuery } from '@apollo/client';

//URI
import { GET_POSTS_INFO } from '../../graphql/queries';


//Component
import SpinnerLoader from '../shared/SpinnerLoader';
import CardBlog from '../shared/CardBlog';

const Blogs = () => {

    const { data, loading, error, called } = useQuery(GET_POSTS_INFO);

    if (loading) return <SpinnerLoader />
    if (error) return <h1> Sorry there is an error.. </h1>

    if (called) {
        const { posts } = data
        return <CardBlog posts={posts} />
    }
};

export default Blogs;