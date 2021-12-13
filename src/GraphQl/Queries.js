
import { gql,useQuery } from '@apollo/client';

export const GET_PROPERTY_QUERY = gql`
    query{
        get_Properties{
            _id
            landlordname
            propertyname
            price
            mainimage
            overviewimage
            location
            description
            amenities
            vacancy
            contact
            createdAt
            author{
                _id
                name
                email
                picture
            }
            reviews{
                
                createdAt
                author{
                    _id
                    name
                    email
                }
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
