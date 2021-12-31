import React from 'react'
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import WeekendIcon from '@mui/icons-material/Weekend';
import WifiIcon from '@mui/icons-material/Wifi';
import Review from '../components/Review.js'

export const Location=[
    {
      image:"",
      title:"Gate A",
      link:"./explore",
    },
    {
      image:"",
      title:"Gate B",
      link:"./explore",
    },
    {
      image:"",
      title:"Gate C",
      link:"./explore",
    },
    {
      image:"",
      title:"Gate D",
      link:"./explore",

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