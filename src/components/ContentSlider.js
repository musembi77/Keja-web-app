import React,{useState} from 'react'
import {useNavigate,generatePath} from 'react-router-dom';
import { useStateValue } from "../components/StateProvider"

function ContentSlider({property}){
  // eslint-disable-next-line
	const [ {product},dispatch] = useStateValue();
    const [id] = useState(property._id);
    const navigate = useNavigate();

    const ViewProperty=()=>{
      // console.log("dispatch fired");
      id && navigate(generatePath("/property/:id", { id }))
      console.log(id)
      dispatch({
      type: "VIEW_PROPERTY",
      product: {
          id:property._id,
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
          policy:property.policy,
          reviews:property.reviews,
          vacancy:property.vacancy,
          contact:property.contact,
          area:property.area,
          longitude:property.longitude,
          latitude:property.latitude
        },
    });
  }
	return(
		<div style={{width:"200px",height:"",margin:"0px 5px",backgroundColor:"#fff"}} onClick={ViewProperty}>
			<div
		      style={{fontFamily:"Poppins-Bold",textDecoration:"none",color:"#000000"}}
		    >
				<img src={property.mainimage} 
          alt="logo"
					style={{ width:"100%",height:"130px",objectFit:"cover",borderRadius:"5px"}}
				
				/>
        <div style={{display:"flex",flexDirection:"column",textAlign:"left",padding:"0 5px"}}>
        <p style={{backgroundColor:"",marginTop:"",fontSize:"0.6rem",color:"#ffa31a"}}>{property.type}</p>
				<p style={{color:"#000",marginTop:"",fontSize:"0.9rem",fontFamily:"Poppins-Bold"}}>{property.price}<span style={{color:"grey"}}>/month</span></p>
        <p style={{backgroundColor:"",marginTop:"",fontSize:"0.7rem",color:"grey"}}>{property.area}</p>
			  
       </div>
      </div>
		</div>
	)
}
export default ContentSlider;