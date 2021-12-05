import React from 'react';
import {SearchFilter} from '../components/Search';
import {Link } from "react-router-dom"
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WeekendIcon from '@mui/icons-material/Weekend';
import WifiIcon from '@mui/icons-material/Wifi';
import {newproperty} from '../components/dummydata.js'
import {Location} from '../components/dummydata.js'
//import {Services} from '../components/dummydata.js'

import ContentSlider from '../components/ContentSlider.js';


function Home({property}){
const Services=[
  {
  icon:<CreditScoreIcon />,
  color:'#e5e5e5',
  title:"Pay Rent",
  },
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
    <div>
      <SearchFilter />
      <div style={{padding:"5px"}}>
      {
        //Communities
      } 
      <div >
        <p>Communities</p>
          <div style={{
            display:"flex",
            //justifyContent:"space-between",
            alignItems:"center",
            textAlign:"center",
            overflow:"auto",
            whiteSpace:"nowrap",
            width:"100%"
          }} className="scrollbar">
            {Location.map((item)=>{
              return(
                <div> 
                  <ul style={{
                    //backgroundColor:"#f79d00",
                    width:"100%",
                    textDecoration:"none",
                    listStyle:"none"
                  }}>
                    <li>
                      <Link style={{                      
                        fontSize:"0.9rem",
                        fontFamily:"Poppins-Regular",
                        textDecoration:"none",
                        margin:"0 20px",
                        color:"#000000"
                      }} to='/explore'>
                        {item.title}
                      </Link>
                    </li>
                  </ul>
                  
                </div>
              )
            })}
          </div>
      </div>
      {
        //Featured / Recommended
      } 
      <div>
        <p>Featured</p>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"5px",
          //padding:"10px",
        }} className="scrollbar">
          {newproperty.map((property)=>{
            return(
                <ul style={{
                  //backgroundColor:"#f79d00",
                  width:"150px",
                  height:"100%",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",
                  borderRadius:"10px",
                  //margin:"0 10px",
                  textDecoration:"none",
                  listStyle:"none",
                  //borderRadius:"30px"
                }}>
                  <li >
                    <ContentSlider
                    property={property}
                    />
                  </li>
                </ul>
                )
          })}
        </div>
      </div>
      {
        //Services
      } 
      <div>
        <p>Services</p>
        <div style={{
          display:"flex",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"90%",
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
      {
        //NewBuildings
      }
      <div>
        <p>NewBuildings</p>
        <div style={{
          display:"flex",
          //justifyContent:"space-between",
          alignItems:"center",
          textAlign:"center",
          overflow:"auto",
          whiteSpace:"nowrap",
          width:"100%",
          margin:"5px",
          //padding:"10px",
        }} className="scrollbar">
          {newproperty.map((property)=>{
            return(
                <ul style={{
                  //backgroundColor:"#f79d00",
                  width:"150px",
                  height:"100%",
                  textAlign:"center",
                  placeItems:"center",
                  position:"relative",
                  borderRadius:"10px",
                  //margin:"0 10px",
                  textDecoration:"none",
                  listStyle:"none",
                  //borderRadius:"30px"
                }}>
                  <li >
                    <ContentSlider
                    property={property}
                    />
                  </li>
                </ul>
                )
          })}
        </div>
      </div>            
      </div>
      <p>Home</p>
    </div>
  )
}

export default Home