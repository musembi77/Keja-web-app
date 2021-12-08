import { gql } from '@apollo/client';


export const get_AllProperties = gql`
    query{
        getallproperties{
            name
            price
        }
    }   
`