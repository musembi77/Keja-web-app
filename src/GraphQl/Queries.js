import { gql } from '@apollo/client';

export const GET_PROPERTY_QUERY = gql`
    query{
        get_Properties{
            _id
            landlordname
            propertyname
            price
            type
            longitude
            latitude
            location
            area
            description
            amenities
            policy
            vacancy
            mainimage
            overviewimage
            contact
            createdAt
            reviews{
                review
                createdAt
                author{
                   _id
                    name
                    email
                    picture 
                }
            }
            author{
                _id
                name
                email
                picture
            }
        }
    }
`
export const GET_USER_QUERY=`
      {
        get_User {
                name
                _id
                email
                picture
              }
      }
              
`
export const GET_SERVICE_QUERY = gql`
    query{
        get_Services{
            _id
            ownername
            servicename
            type
            location
            area
            description
            packages
            policy
            contact
            mainimage
            overviewimage
            createdAt
            author{
                _id
                name
                email
                picture
            }
        }
    }
`
