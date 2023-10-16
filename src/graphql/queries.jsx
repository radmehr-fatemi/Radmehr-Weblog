import { gql } from "@apollo/client"

const GET_AUTHORS_INFO = gql`
    query {
        authors {
            id
            name
            slug
            avatar { url }
        }
    }
`;

const GET_POSTS_INFO = gql`
    query {
        posts {
            id
            slug
            title
            coverPhoto { url }
            author {
            ... on Author {
                name
                avatar { url }
            }
            }
        }
    }
`;

const GET_AUTHOR_INFO = gql`
    query getAuthor( $slug: String ) {
        author(where: {slug: $slug}) {
            avatar { url }
            description { html }
            name
            field
            posts {
                id
                slug
                title
                coverPhoto { url }
            }
        }
    }
`;

const GET_POST_INFO = gql`
    query getPost( $slug: String ) {
        post(where: {slug: $slug}) {
            coverPhoto { url }
            title
            content { html }
            author {
            ... on Author {
                name
                avatar { url }
                field
            }
            }
        }
    }
`;

export { GET_AUTHORS_INFO ,GET_POSTS_INFO ,GET_AUTHOR_INFO ,GET_POST_INFO }