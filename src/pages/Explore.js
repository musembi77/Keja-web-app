import React,{useEffect,useState} from 'react'
import Property from '../components/Property'
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import Skeleton from '../components/Skeleton'
import SearchIcon from '@mui/icons-material/Search';


function Explore() {
    const [isloading, setIsLoading]=useState([]);
    const [query, setQuery]=useState('');
    
    const { data } = useQuery(GET_PROPERTY_QUERY);
    
    useEffect(()=>{
        //console.log(data)
        if(data){
            setIsLoading(!isloading)
        }
    },[data]);
    
    return (
        <div style={{width:"100%"}}>
            <div style={{position:"relative"}}>
            <div style={{display:"flex",justifyContent:"center",margin:"0 10%",alignItems:"center"}}>
            <input 
                placeholder='Search Apartment'
                style={{
                    fontSize:'0.9rem',
                    outline:'none',
                    padding:'7px',
                    border:'none',
                    borderRadius:"999px",
                    height:'100%',
                    
                    width:'80%',
                    overflowWrap:'break-word',
                    backgroundColor:"#e5e5e5"
                }}
                onChange={(e)=>setQuery(e.target.value)}
            />
            <SearchIcon />
            </div>    
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