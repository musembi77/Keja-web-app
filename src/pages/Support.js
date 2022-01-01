import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import FlagIcon from '@mui/icons-material/Flag';

function Support (){
	return(
		<div style={{textAlign:"center"}}>
			
			<div style={{height:"200px",color:"",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"relative"}}>
				<img src='./support.jpg' alt='logo' style={{width:"100%",objectFit:"cover",height:"100%"}}/>
				<p style={{fontSize:"1.5rem",position:"absolute",
                top:"40%",
                zIndex:"99",margin:"0 auto",fontFamily:"Poppins-bold",color:"#ffffff"}}>How can we Help You?</p>
			</div>
			<div style={{backgroundColor:"",display:"flex",justifyContent:"space-around",alignItem:"center",margin:"10px 0"}}>
				<p style={{width:"40%",margin:"auto 0",fontFamily:"Poppins-bold",textTransform:"uppercase"}}>contact us</p>
				<div style={{fontSize:"0.8rem"}}>
					<EmailIcon/><a href='mailto:keja.app@outlook.com'><p>keja.app@outlook.com</p></a>
					<WhatsAppIcon/><p>0771712005</p>
					<CallIcon/><p>0771712005</p>
				</div>
			</div>
			<div style={{backgroundColor:"#e5e5e5",fontSize:"0.7rem",height:"150px",lineHeight:"30px"}}>
				<p style={{fontSize:"1.2rem"}}>Are you Looking for an Agent?</p>
				<p>Use Our Agent to help you find the perfect house for you</p>
				<p><span style={{color:"red"}}>Note:</span> You will not incur a fee when using this service</p>
				<p>Contact us</p>
			</div>
			
			<p>How to Get an Aprtment</p>
			<img src='./howitworks.jpg' alt='logo' style={{width:"100vw",height:""}}/>
			<div style={{display:"flex",textAlign:"center",justifyContent:"center",margin:"10px 0"}}>
				<FlagIcon/>
				<a href = "https://wa.link/nv8tti" 
                        target="_blank"
                        rel="noopener noreferrer">Report</a>
			</div>
		</div>
	)	
}

export default Support;
