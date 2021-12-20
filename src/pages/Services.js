import React from 'react'
// import Skeleton from '../components/Skeleton.js'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';

import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WeekendIcon from '@mui/icons-material/Weekend';
import WifiIcon from '@mui/icons-material/Wifi';
import SearchIcon from '@mui/icons-material/Search';
import {Link } from "react-router-dom"
function Services(){
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
                  width:"120px",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",              
                  margin:"0 5px",
                  textDecoration:"none",
                  listStyle:"none",
                  borderRadius:"5px",

                }}>
                  <li style={{width:"120px"}}>
                    <Link style={{
                      color:"#000000",
                      fontSize:"0.9rem",
                      fontFamily:"Poppins-Bold",
                      textDecoration:"none",
                      padding:"10px",

                    }} to=''>
                      <div style={{fontSize:"20px"}}>{item.icon}</div>
                      <p>{item.title}</p>
                    </Link>
                  </li>
                </ul>
            )
          })}
        </div>
      </div>
      		<div style={{display:"flex",flexWrap:"Wrap"}}>
      		<Product />
      		<Product />
      		<Product />
      		<Product />
      		</div>
			
		</div>
	)
}
export default Services;

const Product=()=>{
	return(
		<div  style={{
      lineHeight:"14px",
      fontSize:"0.7rem",
      //border:"1px solid grey",
      width:"10rem",
      borderRadius:"10px",
      height:"210px",
      margin:"5px auto"
    }}
    >
    <Link
      style={{fontFamily:"Poppins-Bold",textDecoration:"none",color:"#000000"}}
      to='/product'
      >
          <img 
            src='./Keja (3).png'  
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