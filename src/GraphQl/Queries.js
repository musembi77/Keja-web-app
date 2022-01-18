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
            image1
            image2
            image3
            image4
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
            contact
            mainimage
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
