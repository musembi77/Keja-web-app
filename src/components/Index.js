
import React from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button'
import SearchIcon from "@mui/icons-material/Search"
import ExploreIcon from '@mui/icons-material/Explore';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Index(){
  const handleSubmit=(e)=>{
    e.preventDefault();
  }
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#ffa31a"),
    backgroundColor: "#ffa31a",
    '&:hover': {
      backgroundColor: "#ffa31a",
    },
  }));
  const exploreitem=[
    {
      image:"/mover.jpg",
      title:"packers & movers",
      link:"say",
    },
    {
      image:"/agent.jpg",
      title:"agents",
      link:"say",
    },
    {
      image:"/stall2.png",
      title:"stalls",
      link:"say",
    },
    {
      image:"/couch.png",
      title:"furniture",
      link:"say",
    }
  ]

  return(
    <div >
      <div style={{display:"flex",flexDirection:"column",width:"100vw"}}>
        {
          
        }
        
        {//<p style={{fontFamily:"Poppins-Bold",color:"#000000",margin:"0 25%",fontSize:"2.5rem"}}>Are you looking for an apartment?</p>
        }
      </div>
      <div style={{position:"relative"}}>
        <img src="/image1.jpg" alt="logo" style={{width:"100%",height:"450px",objectFit:"cover",}}/>
        <form 
            style={{
                display:"flex",
                position:"absolute",
                top:"50%",
                left:"25%",
                right:"25%",
                //margin:"-200px auto",
                width:"50%",
                height:"40px",
                backgroundColor:"grey"}} >
            <input placeholder="Search Apartment, property, stalls" 
                style={{
                    flex:"1",
                    width:"200px",
                    outline:"none",
                    border:"none",
                    color:"#000000",
                    padding:"5px",
                }}
            />
            <button
                style={{border:"none",padding:"10px 10px",display:"flex",justifyContent:"center",backgroundColor:"#ffa31a"}}
                onClick={handleSubmit}
            ><SearchIcon />search</button>
        </form>
      </div>
      <div style={{backgroundColor:""}}>
        <ColorButton variant="contained" endIcon={<ExploreIcon/>} >Explore</ColorButton>
        <div style={{display:"flex",}}>
            {exploreitem.map((item)=>{
              return(
                <div style={{width:"100px",height:"100px",margin:"5px 10px",borderRadius:"10px",fontSize:"0.8rem"}}>
                    <img src={item.image} alt="logo" style={{width:"100%",height:"80%",borderRadius:"10px",objectFit:"contain"}}/>
                    <p>{item.title}</p>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Index