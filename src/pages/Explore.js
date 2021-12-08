import React  from 'react'
import Property from '../components/Property'
import { SearchFilter } from '../components/Search';
import {propertydata} from '../components/dummydata.js'
import {gql} from 'apollo-boost'
import {graphql} from 'react-apollo'

const getPropertiesQuery = gql`
    {
        properties{
            name
        }
    }
`

function Explore() {
    console.log(getPropertiesQuery)
    return (
        <div style={{width:"100%"}}>
            <div style={{position:"relative"}}>
                    <SearchFilter />
                    <div style={{
                        width:'100vw',
                        backgroundColor:'#ffffff',
                        height:'100vh',
                        textDecoration:"none",
                        color:"#000000",
                        padding:"10px",
                                                               
                    }} >
                        <div style={{display:"flex",
                        flexWrap:"wrap",justifyContent:"space-around"   }}>
                          {propertydata.map((property) => (
                            <div>
                              <Property
                                property={property}
                                //key={property.id}
                                />
                            </div>
                          ))}
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default graphql(getPropertiesQuery)(Explore);