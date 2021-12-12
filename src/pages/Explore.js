import React,{useEffect,useState} from 'react'
import Property from '../components/Property'
import { SearchFilter } from '../components/Search';
import {propertydata} from '../components/dummydata.js'
import {
  useQuery,
  gql,
  
} from '@apollo/client';
import {get_AllProperties} from '../GraphQl/Queries.js'


function Explore() {

    const { loading, error, data } = useQuery(get_AllProperties);
    const [propertydata,setPropertydata]=useState([]);
    
    useEffect(()=>{
        console.log(data)
        if(data){
            setPropertydata(data.getallproperties)
        }
    },[data]);

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
                                                               
                    }} >price
                        <div style={{display:"flex",
                        flexWrap:"wrap",justifyContent:"space-around"   }}>
                          {propertydata.map((property) => (
                            <div>
                                <Property
                                property={property}
                                key={property.id}
                                />
                                
                            </div>
                          ))}
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Explore;