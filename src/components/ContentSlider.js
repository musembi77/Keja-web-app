import React from 'react'
import {Link} from 'react-router-dom'
import { useStateValue } from "../components/StateProvider"

function ContentSlider({property}){
	const [dispatch] = useStateValue();

    const ViewProperty=()=>{
      // console.log("dispatch fired");
      // console.log(product);
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
		<div>
			<Link
		      style={{fontFamily:"Poppins-Bold",textDecoration:"none",color:"#000000"}}
		      to='/property'
		    >
				<img src={property.coverimg} 
          alt="logo"
					style={{ width:"150px",height:"110px",objectFit:"cover",borderRadius:"5px"}}
				onClick={ViewProperty}
				/>
				<p style={{backgroundColor:"",marginTop:"-5px",fontSize:"0.9rem"}}>{property.name}</p>
			</Link>
		</div>
	)
}
export default ContentSlider;