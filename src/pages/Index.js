/* eslint-disable react-hooks/exhaustive-deps */
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import RoomIcon from "@mui/icons-material/Room"
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { useNavigate } from 'react-router-dom';
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY,GET_USERS_QUERY} from '../GraphQl/Queries.js'
import Footer from '../components/Footer'

function Index(){
  const navigate = useNavigate();
  const HandleFilter=(e)=>{
    navigate("/home");
  }

  const { loading, data } = useQuery(GET_PROPERTY_QUERY);
    const users = useQuery(GET_USERS_QUERY);

    const [propertynumber,setNumber]=useState('...')
    const [totalusers,setTotalUsers] = useState('loading')

    useEffect(()=>{
        if(data){
            setNumber(data.get_Properties.length)
            try {
              const userscount = (users.data.get_Users.length)
              setTotalUsers(userscount)
              console.log(userscount)
              }
              catch(err){
                console.error('unable to find the number of users')
              }
            
            //setUsers(users.get_Users.length)
        }
    },[data,loading]);

  return(
    <div >
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"relative",backgroundColor:"#ffffff"}}>
        <button
                style={{position:"absolute",
                top:"40%",
                zIndex:"99",border:"none",fontSize:"1rem",color:"#000000",textDecoration:"none",padding:"10px 10px",display:"flex",justifyContent:"center",backgroundColor:"#ffa31a"}}
                type="submit"
                onClick={HandleFilter}
            >
            Get Started
            <RoomIcon style={{fontSize:"1.2rem",marginLeft:"10px",color:"#ffffff"}}/>
            </button>
        <img src="/index1.jpg" alt="logo" style={{width:"100%",height:"450px",objectFit:"cover",}}/>
      </div>

      <div style={{backgroundColor:"#ffffff",justifyContent:'center',color:"#000000",textAlign:"center",width:"100%",height:"300px",fontSize:"1.8rem",fontWeight:"bold",padding:"10px"}}>
          <p>Every Apartment Near You, In One Place</p>
          <span style={{fontSize:"0.9rem",margin:"0 5%",width:"50%",color:"#000000"}}>Find Rental Apartments around Top institutions</span>
          <Link className="btn_1" to="./explore">
            <TravelExploreIcon />
            <p>Explore</p>
          </Link>
      </div>
      <div style={{marginTop:"10px",height:"300px",width:"",backgroundColor:"#ffa31a"}}>
        <div style={{display:"",justifyContent:"space-between",width:"100%",textAlign:"right",}}>
          <p style={{
          color:"#ffffff",
          fontSize:"2.4rem",
          textAlign:"right",
          overflow:"wrap",
          width:"",
          fontFamily:"Portico-regular",
          //backgroundColor:"rgb(255,255,255,0.7",
          
        }}>Find a home</p>
        <p>Find a home , find affordable housing around your
           instituion from the comfort of your phone.</p>
           <p>Say no to Scammers, no to agent fees, no to scorching heat when looking for a home</p>
           <p>We redefine House Hunting and make the process safe, reliable, affordable and efficient</p>
        </div>
      </div>
      {
        //host an apartment
      }
      <div style={{position:"relative",height:"400px",width:"100%"}}>
        <img src="./index2.jpg" alt="" style={{height:"100%",width:"100%",objectFit:"cover"}}/>
        <p style={{
          position:"absolute",
          top:"20px",
          left:"20px",
          color:"#ffffff",
          fontSize:"2.4rem",
          textAlign:"center",
          overflow:"wrap",
          width:"50px",
          fontFamily:"Portico-regular",
          //backgroundColor:"rgb(255,255,255,0.7",
          
        }}>List an Apartment</p>
        <Link style={{
          position:"absolute",
          top:"250px",
          left:"20px",
          color:"#ffffff",
          fontSize:"0.9rem",
          textAlign:"center",
          overflow:"wrap",
          fontFamily:"Poppins-regular",
          backgroundColor:"#ffa31a",
          padding:"10px",
          textDecoration:"none"
          
        }} to="./listwithUs">List an Apartment </Link>
      </div>
      {loading && !data? 
      
      
      <p>Loading</p>
      :
      <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"grey",height:"100%",color:"white",fontFamily:"Poppins-Bold",padding:"10px"}}>
        <div >
          <p style={{fontSize:"1.5rem",color:"#ffa31a"}}>{propertynumber} </p>
          <span>verified flats listed</span>
          
          <p  style={{fontSize:"1.5rem",color:"#ffa31a"}}>{totalusers}</p>
          <span>Home seekers</span>
        </div>  
        <RoomIcon style={{fontSize:"5rem",margin:"50px",color:"#ffa31a"}}/>
      </div>
      }
      <Footer />
    </div>
  )
}

export default Index