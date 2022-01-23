import React from 'react'
import { Marker } from 'react-map-gl';
import Pin from './pin.js'
import {Link} from 'react-router-dom';
import { useStateValue } from "./StateProvider"

function MarkProp({property}){
	
	return(
		<Marker
	    	latitude={parseFloat(property.latitude)}
	    	longitude={parseFloat(property.longitude)}
	    	
	    >
	    <Link to='/property' style={{marginBottom:"-10px"}}>
	    <PopUp
	    	propertyname={property.propertyname}
	    	mainimage={property.mainimage}
	    	property={property}
	    />
	    </Link>
	    	<Pin style={{color:"red"}} />
	    </Marker>
	)
}
export default MarkProp

const PopUp=({
	propertyname,
	mainimage,property})=>{
		// eslint-disable-next-line
		const [{product}, dispatch] = useStateValue();
	const ViewProperty=()=>{
	      // console.log("dispatch fired");
	      // console.log(product);
	      dispatch({
	        type: "VIEW_PROPERTY",
	        product: {
	          id:property.id,
	          mainimage:property.mainimage,
	          propertyname:property.propertyname,
	          price:property.price,
	          location:property.location,
	          stats:property.stats,
	          description:property.description,
	          amenities:property.amenities,
	          image1:property.image1,
          image2:property.image2,
          image3:property.image3,
          image4:property.image4,
	          reviews:property.reviews,
	          vacancy:property.vacancy,
	          policy:property.policy
	        },
	      });
	      
	    }
	return(
	
		<div style={{display:"flex",width:"50px",height:"",backgroundColor:"grey",borderRadius:"5px",flexDirection:"column"}} onClick={ViewProperty}>
		<img src={mainimage} alt="pp" style={{width:"",height:"35px",objectFit:"cover",borderRadius:"5px 5px 0 0"}}/>
		<p style={{fontSize:"0.4rem",padding:"0 5px"}}>{propertyname}</p>
		</div>

	)
}