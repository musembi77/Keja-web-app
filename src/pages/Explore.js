import React,{useEffect,useState} from 'react'
import Property from '../components/Property'
import { SearchFilter } from '../components/Search';
import {propertydata} from '../components/dummydata.js'
import {useQuery,gql,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import {useClient} from '../Client.js'
import {useStateValue} from '../components/StateProvider'

function Explore() {
    const [product,setProduct]=useState([]);
    const { loading, error, data } = useQuery(GET_PROPERTY_QUERY);
    
    useEffect(()=>{
        console.log(data)
        //console.log(data.get_Properties)
        if(data){
            setProduct(data.get_Properties)
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
                                                               
                    }} >
                        
                        <div style={{display:"flex",
                        flexWrap:"wrap",justifyContent:"space-around"   }}>
                          {product.map((property)=>{
                            return(
                                <div>
                                    <Property
                                        property={property}
                                        //key={property.id}
                                    />
                                </div>
                            )
                        })}
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Explore;