/* eslint-disable array-callback-return */
import React,{useState,useEffect} from 'react'

import SearchIcon from '@mui/icons-material/Search';
import {Link } from "react-router-dom"

import {useQuery,} from '@apollo/client';
import {GET_SERVICE_QUERY} from '../GraphQl/Queries.js'
import Skeleton from '../components/Skeleton'
import Footer from '../components/Footer'
import { useStateValue } from "../components/StateProvider";

function Services(){
  const [isloading, setIsLoading]=useState([]);
  const [query, setQuery]=useState('');
    const { loading, data } = useQuery(GET_SERVICE_QUERY);
    useEffect(()=>{
        if(loading){
            setIsLoading(isloading)
        }
        if(data){
            //console.log(data.Services)
            
        }
    },[data,isloading,loading]);
    const [searchoption, setSearchOption]=useState('servicename')
	return(
		<div style={{padding:""}}>
			<div style={{display:"flex",alignItems:"center",backgroundColor:"#eeeeee",margin:"10px 0",justifyContent:"space-between"}}>
            <p style={{fontSize:"0.7rem",padding:"0 10px"}}>Select option to search by:</p>
            <select 
                  style={{
                    fontFamily: "Poppins-Regular",
                    fontSize: "14px",
                    color: "#1b1b1b",
                    border: "none",
                    height: "100%",
                    padding: "5px 10px",
                    outline: "none",
                    overflowWrap: "break-word",
                    flex:0.7
                  }}
                  onChange={(e)=>{
                  setSearchOption(e.target.value)
                  }}
                  >
                  <option value="servicename">default</option>
                    <option value="servicename">Name</option>
                    <option value="area">Area</option>
                    <option value="type">service type</option>
                </select>
        </div>
        
            <div style={{display:"flex",justifyContent:"center",margin:"0 10%",alignItems:"center"}}>
                <input 
                    placeholder="Search service by ..."
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
            </div >
			
      		<div style={{display:"flex",flexWrap:"Wrap",backgroundColor:"",margin:"10px 0"}}>
      		{isloading && !data? 
              <Skeleton /> :
                data.get_Services
                .filter(service => 
                                    {
                                        if(searchoption === 'servicename')
                                    { 
                                        return (service.servicename.toString().toLowerCase().includes(query.toLowerCase()));
                                    }
                                    else if(searchoption === 'area'){
                                        return (service.area.toString().toLowerCase().includes(query.toLowerCase()));
                                    }
                                    else if(searchoption === "type"){
                                        return (service.type.toString().toLowerCase().includes(query.toLowerCase()));
                                    }
                                })
                                        .map((service)=>{
                    return(
                      <div>
                        <Product
                          service={service}
                          key={service.id}
                        />
                      </div>
                    )
                  })
                }
      		</div>
			<Footer />
		</div>
	)
}
export default Services;

export const Product=({service})=>{
  // eslint-disable-next-line no-unused-vars
    const [ {services},dispatch] = useStateValue();
    const ViewService=()=>{
      //console.log("dispatch fired");
      //console.log(services)
      dispatch({
        type: "VIEW_SERVICE",
        services: {
          id:service._id,
          mainimage:service.mainimage,
          servicename:service.servicename,
          location:service.location,
          description:service.description,
          contact:service.contact,
          area:service.area,
          type:service.type
        },
      });
    }
	return(
		<div  style={{
      lineHeight:"14px",
      fontSize:"0.7rem",
      //border:"1px solid grey",
      width:"10rem",
      borderRadius:"10px",
      height:"210px",
      margin:"5px"
    }}
    onClick={ViewService}
    >
    <Link
      style={{fontFamily:"Poppins-Bold",textDecoration:"none",color:"#000000"}}
      to='/services'
      >
          <img 
            src={service.mainimage} 
            alt="logo" style={{width:"100%",height:"150px",objectFit:"cover",borderRadius:"10px"}}
            />
          <div style={{padding:"5px"}}>
            <h3 style={{fontFamily:"Poppins-Bold"}}>{service.servicename}<span style={{color:"#eeeeee"}}></span></h3>
            <p style={{fontSize:"0.6rem",color:"grey"}}>{service.location}</p>
          </div>
      </Link>
    </div>
	)
}