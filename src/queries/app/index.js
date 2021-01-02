import { gql } from '@apollo/client';

export const GET_PINS_QUERY = gql`
    query {
        getPins {
            title
        }
    }
`;

export const PIN_UPDATE_SUBSCRIPTION = gql`
    subscription {
        pinUpdated {
            _id
            createdAt
            title
            content
            image
            latitude
            longitude
            author {
                _id
                name
            }
            comments {
                text
                createdAt
                author {
                    name
                    picture
                }
            }
        }
    }
`;
