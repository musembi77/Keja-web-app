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
		const [ dispatch] = useStateValue();
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
	          overviewimage:property.overviewimage,
	          review:property.review,
	          vacancy:property.vacancy
	        },
	      });
	      
	    }
	return(
	
		<div style={{display:"flex",width:"50px",height:"",backgroundColor:"grey",borderRadius:"5px",flexDirection:"column"}} onClick={ViewProperty}>
		
			<img src={mainimage} alt="pp" style={{width:"100%",height:"35px",objectFit:"cover",borderRadius:"5px 5px 0 0"}}/>
		
			<p style={{fontSize:"0.65rem",padding:"0 5px"}}>{propertyname}</p>
		</div>

	)
}