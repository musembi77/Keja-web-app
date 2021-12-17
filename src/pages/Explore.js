import React,{useEffect,useState} from 'react'
import Property from '../components/Property'
import { SearchFilter } from '../components/Search';
import {propertydata} from '../components/dummydata.js'
import {useQuery,gql,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import {useClient} from '../Client.js'
import {useStateValue} from '../components/StateProvider'
import Skeleton from '../components/Skeleton'
import SearchIcon from '@mui/icons-material/Search';

function Explore() {
    const [product,setProduct]=useState([]);
    const [isloading, setIsLoading]=useState([])
    const [{searchdata},]=useStateValue('')
    const [query, setQuery]=useState('')
    const [filteredpost, setFilteredPost]=useState([])

    const { loading, error, data } = useQuery(GET_PROPERTY_QUERY);
    
    useEffect(()=>{
        console.log(data)
        //console.log(data.get_Properties)
        if(searchdata){
            setQuery(searchdata)
        }else{
            setQuery(query)        }
        if(data){
            setProduct(data.get_Properties)
            setIsLoading(!isloading)
        }
    },[searchdata,data]);

    
    
    return (
        <div style={{width:"100%"}}>
            <div style={{position:"relative"}}>
                    
                        <input 
                        placeholder='Search Apartment'
                        style={{
                            fontSize:'0.9rem',
                            outline:'none',
                            border:'none',
                            borderRadius:"999px",
                            height:'100%',
                            width:'100%',
                            overflowWrap:'break-word',
                            backgroundColor:"#e5e5e5"
                        }}
                        onChange={(e)=>setQuery(e.target.value)}
                        />
                        
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
                        {isloading && !data? 
                            <Skeleton /> :
                             data.get_Properties.filter(property => property.propertyname.toString().toLowerCase().includes(query.toLowerCase())).map((property)=>{
                                return(
                                    <div>
                                        <Property
                                            property={property}
                                            //key={property.id}
                                        />
                                    </div>
                                )
                            })
                        }
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Explore;