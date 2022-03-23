import React from 'react'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WeekendIcon from '@mui/icons-material/Weekend';
import WifiIcon from '@mui/icons-material/Wifi';
import Review from '../components/Review.js'

export const Location=[
    {
      value:"propertyname",
      title:"Name",
    },
    {
      value:"price",
      title:"Price",
    },
    {
      value:"area",
      title:"Area",
    },
    {
      value:"type",
      title:"Property type",

    },
    
]
export const review=[
    {title:<Review />},
    {title:<Review />},
    {title:<Review />},
    {title:<Review />},
    {title:<Review />},
]
export const newproperty=[
  {
    name:"Executive",
    price:10000,
    description:"",
    amenities:"",
    review:[
    {
      content:"Good House I cold give it a 10 but it has water issues and electricity shortages once in a while at the most inconviniencing moments",
      date:"20-02-21",
      name:"Sam",
    },
    {
      content:"Good House I cold give it a 10 but it has water issues and electricity shortages once in a while at the most inconviniencing moments",
      date:"20-02-21",
      name:"Sam",
    },
    {
      content:"Good House I cold give it a 10 but it has water issues and electricity shortages once in a while at the most inconviniencing moments",
      date:"20-02-21",
      name:"Sam",
    },
    ],
    contact1:"",
    contact2:"",
    coverimg:"./room4.jpg",
    overview:
    [
      {overviewimg:"./room3.jpg"},
      {overviewimg:"./room3.jpg"},
      {overviewimg:"./room3.jpg"},
      {overviewimg:"./room3.jpg"},
    ],
    stats:"2.3"
  },
]
export const Services=[
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
{
          <Link to='/support' style={{position:"relative"}}>
          <img src='./support.jpg' alt='banner' style={contentStyle}/>
          <p style={{fontSize:"1.3rem",position:"absolute",top:"40%",
                zIndex:"99",margin:"auto",fontFamily:"Poppins-bold",color:"#ffffff"}}>Get Gas Delivery around juja</p>
                <p style={{fontSize:"1.5rem",position:"absolute",top:"55%",
                zIndex:"99",margin:"auto",fontFamily:"Poppins-bold",color:"#000"}}>Contact Us <span style={{fontSize:"1rem"}}>0771712005</span></p>
        </Link>
        <Link to='/exploreservices' style={{position:"relative"}}>
          <img src='./gas.jpeg' alt='banner' style={contentStyle}/>
        </Link>
      }