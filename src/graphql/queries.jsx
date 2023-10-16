import { gql } from "@apollo/client"

const GET_AUTHORS = gql`
    query {
        authors {
            id
            name
            slug
            avatar { url }
        }
    }
`;

export { GET_AUTHORS }