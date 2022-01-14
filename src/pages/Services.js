import React,{useState,useEffect} from 'react'
// import Skeleton from '../components/Skeleton.js'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WeekendIcon from '@mui/icons-material/Weekend';
import WifiIcon from '@mui/icons-material/Wifi';
import SearchIcon from '@mui/icons-material/Search';
import {Link } from "react-router-dom"

import {useQuery,} from '@apollo/client';
import {GET_SERVICE_QUERY} from '../GraphQl/Queries.js'
import Skeleton from '../components/Skeleton'
import Footer from '../components/Footer'
import { useStateValue } from "../components/StateProvider";

function Services(){
  const [isloading, setIsLoading]=useState([]);
    const { loading, data } = useQuery(GET_SERVICE_QUERY);
    useEffect(()=>{
        if(loading){
            setIsLoading(isloading)
        }
        if(data){
            //console.log(data.Services)
            
        }
    },[data,isloading,loading]);
	const Services=[
  // {
  // icon:<CreditScoreIcon />,
  // color:'#e5e5e5',
  // title:"Pay Rent",
  // },
  {
    icon:<LocalShippingIcon/>,
    image:"./movers.svg",
    title:"Movers",
  },
  {
    icon:<WeekendIcon />,
    image:"./furniture.svg",
    title:"Furniture",
  },
  {
    icon:<DryCleaningIcon />,
    image:"./laundry.png",
    title:"Laundry",
  },
  {
    icon:<WifiIcon />,
    image:"./wifi.png",
    title:"Wi-fi",
  },
]
	return(
		<div style={{padding:"10px"}}>
			<div style={{display:"flex",justifyContent:"center",margin:"0 10%",alignItems:"center"}}>
            <input 
                placeholder='Search for Service'
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
            />
            <SearchIcon />
            </div>
			<div>
        <p>Services</p>
        <div style={{
          display:"flex",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
        }} className="scrollbar">
          {Services.map((item)=>{
            return(
              <ul style={{
                  backgroundColor:"#f79d00",
                  width:"",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",              
                  margin:"0 5px",
                  textDecoration:"none",
                  listStyle:"none",
                  borderRadius:"999px",

                }}>

                  <li style={{width:"80px",height:"80px",borderRadius:"999px"}}>
                    <Link style={{
                      color:"#000000",
                      fontSize:"0.9rem",
                      fontFamily:"Poppins-Bold",
                      textDecoration:"none",paddingTop:"10px",
                      display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"

                    }} to=''>
                    {item.icon}
                      <p style={{fontSize:"1rem"}}>{item.title}</p>
                      
                      
                    </Link>
                  </li>
                </ul>
            )
          })}
        </div>
      </div>
      		<div style={{display:"flex",flexWrap:"Wrap"}}>
      		{isloading && !data? 
              <Skeleton /> :
                data.get_Services.map((service)=>{
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
      console.log("dispatch fired");
      console.log(services)
      dispatch({
        type: "VIEW_SERVICE",
        services: {
          id:service._id,
          mainimage:service.mainimage,
          servicename:service.servicename,
          price:service.price,
          location:service.location,
          stats:service.stats,
          description:service.description,
          amenities:service.amenities,
          overviewimage:service.overviewimage,
          reviews:service.reviews,
          vacancy:service.vacancy,
          contact:service.contact,
          area:service.area
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
            <h3 style={{fontFamily:"Poppins-Bold"}}>Laundry<span style={{color:"#eeeeee"}}></span></h3>
            <p>Rate</p>
            <p style={{fontSize:"0.6rem",color:"grey"}}>Location</p>
          </div>
      </Link>
    </div>
	)
}