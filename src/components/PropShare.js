import React from 'react'
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import CallEndSharpIcon from '@mui/icons-material/CallEndSharp';
import LocationCitySharpIcon from '@mui/icons-material/LocationCitySharp';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { Image } from 'antd';
//import moment from 'moment'

function PropShare({item}){
	return(
		<div style={{
			backgroundColor:"#e5e5e5",
			padding:"",
			borderRadius:"10px",
			margin:"10px",
			display:"flex",
			alignItems:"center",
			fontSize:"0.6rem",	
				//justifyContent:"space-between"
		}}>
			<Image width={100} src={item.coverimage} style={{height:"100%",objectFit:'',}}/>
			<div style={{flex:1,padding:"5px"}}>
				<p style={{color:"#ffa31a",fontFamily:'Poppins-bold',fontSize:""}}>Ksh {item.price}/month</p>
				<p style={{fontFamily:'Poppins-bold'}}><LocationCitySharpIcon style={{fontSize:"0.6rem"}}/>{item.propertytype}</p>
				<p><InfoSharpIcon style={{fontSize:"0.6rem"}}/>{item.description}</p>
				<p><RoomRoundedIcon style={{fontSize:"0.6rem"}}/>{item.location}</p>
				<p><AccountCircleSharpIcon style={{fontSize:"0.6rem"}}/>{item.gender} preferred</p>
				<div style={{display:"flex",justifyContent:"space-between",fontSize:"",alignItems:"center"}}>
					<a href="tel:0759233322"><CallEndSharpIcon style={{fontSize:"0.6rem"}}/>{item.contact}</a>
					<p>2 days ago</p>
				</div>
				
			</div>
		</div>
	)
}

export default PropShare;