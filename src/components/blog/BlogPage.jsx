import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

//URI
import { GET_POST_INFO } from '../../graphql/queries';

//Component
import SpinnerLoader from '../shared/SpinnerLoader';

const BlogPage = () => {

    const { slug } = useParams();
    const { data ,loading ,error ,called } = useQuery( GET_POST_INFO ,{ variables: { slug } } );
    
    if ( loading ) return <div style={{ minHeight: "86vh" }} > <SpinnerLoader /> </div>
    if ( error ) return <h1>Sorry there is an error...</h1>

    if ( called ) {
        console.log( data )
    }
};

export default BlogPage;