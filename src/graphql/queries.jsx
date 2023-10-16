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
`

export { GET_AUTHORS_INFO ,GET_POSTS_INFO }