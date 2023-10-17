import { gql } from "@apollo/client";

const CREATE_COMMENT_INFO = gql`
    mutation createComment(
        $name: String!
        $email: String!
        $text: String!
        $slug: String!
    ) {
        createComment(
            data: {name: $name, email: $email, text: $text, post: {connect: {Post: {slug: $slug}}}}
          ) {
            id
          }
    }
`;

export { CREATE_COMMENT_INFO }