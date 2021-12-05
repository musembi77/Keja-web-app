import React from 'react'
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider"

function Property({property}){
    const [{ product }, dispatch] = useStateValue();
    const ViewProperty=()=>{
      console.log("dispatch fired");
      console.log(product);
      dispatch({
        type: "VIEW_PROPERTY",
        product: {
          id:property.id,
          coverimg:property.coverimg,
          name:property.name,
          price:property.price,
          location:property.location,
          stats:property.stats,
          description:property.description,
          amenities:property.amenities,
          overview:property.overview,
          review:property.review,
          contact1:property.contact1,
          contact1name:property.contact1name,
          contact2:property.contact2,
          contact2name:property.contact2name,
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
      margin:"5px auto"
    }}
    onClick={ViewProperty}
    >
    <Link
      style={{fontFamily:"Poppins-Bold",textDecoration:"none",color:"#000000"}}
      to='/property'
      >
          <img 
            src={property.coverimg}  
            alt="logo" style={{width:"100%",height:"150px",objectFit:"cover",borderRadius:"10px"}}
            
            />
          <div style={{padding:"5px"}}>
            <h3 style={{fontFamily:"Poppins-Bold"}}>Ksh.{property.price}<span style={{color:"#eeeeee"}}>/month</span></h3>
            <p>{property.name}</p>
            <p style={{fontSize:"0.6rem",color:"grey"}}>{property.location}</p>
          </div>
      </Link>
    </div>
    
  )
}

export default Property;