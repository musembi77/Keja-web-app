import { gql } from '@apollo/client';


export const get_AllProperties = gql`
    query{
        getallproperties{
            landlordname
            propertyname
            price
            location
            description
            amenities
            vacancy
            contact

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
