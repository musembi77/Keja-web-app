import React from 'react'
import Skeleton from '../components/Skeleton.js'

function ProductView(){
	return(
		<div style={{padding:"10px"}}>
			ProductView
			<Product />
		</div>
	)
}
export default ProductView;

const Product=()=>{
	return(
		<div 
			style={{
				height:"200px",
				width:"300px",
				lineHeight:"20px",
				borderRadius:"10px",
				//padding:"5px",
				margin:"5px 0px"
			}}>
			<img src="./room6.jpg" alt="" 
				style={{height:"120px",width:"100%",objectFit:"cover",borderRadius:"10px"}}/>
			<div style={{margin:"0 5px"}}>
				<p style={{fontSize:"1.2rem"}}>Laundry</p>
				<p style={{fontSize:"0.8rem"}}>0759233322</p>
				<a href="https://keja.netlify.app/" style={{fontSize:"0.8rem",color:"grey"}}>website</a>
			</div>
			<Skeleton />

		</div>
	)
}