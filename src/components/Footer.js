import React from 'react'
import {Link } from "react-router-dom"
import {Room,
        Email,
        Call,
        Facebook,
        Instagram,
        Copyright,
        Twitter,
} from '@mui/icons-material'
function Footer(){
	return(
		<div style={{
			backgroundColor:"#100C08",
			color:"white",
			fontSize:"0.8rem",
			padding:"5px",
		}}>
			<div style={{display:"flex",flexWrap:"wrap"}}>
				<div
	                style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',}}
	            >	
		            <div style={{display:"flex",}}>
						<h3 >KEJA</h3>
		                <Room style={{color:'#ffa31a',fontSize:'1.1rem'}}/>
					</div>
	                <span style={{fontSize:'0.6rem'}}>Find the Right Aprtment</span>
	                <div style={{width:"",backgroundColor:"",margin:"5px 0"}}>
	                	<p style={{color:"#ffa31a"}}>Contact Us</p>
	                	<div style={{fontSize:"0.7rem",alignItems:"center"}}>
		                	<Call style={{fontSize:"0.9rem"}}/>
		                	<p>0771712005</p>
	                	</div>
	                	<div style={{display:"",fontSize:"0.7rem",alignItems:"center",}}>
		                	<Email style={{fontSize:"0.9rem"}}/>
		                	<p style={{fontSize:"0.6rem"}}>dennissammy77@gmail.com</p>
	                	</div>
	                </div>

	            </div>
	            <div
	                style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',margin:"0 20px"}}
	            >	
	            	<p style={{color:"#ffa31a"}}>Our Services</p>
		            <div style={{display:"flex",flexDirection:"column",fontSize:"0.6rem"}}>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Home</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Explore</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Features</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>List With Us</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Hire An Agent</Link>
		            </div>
	            </div>
	            <div
	                style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',margin:"0 20px"}}
	            >	
	            	<p style={{color:"#ffa31a"}}>Information</p>
		            <div style={{display:"flex",flexDirection:"column",fontSize:"0.6rem"}}>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>About Us</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>List With Us</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Testimonials</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Testimonials</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Events</Link>
		            </div>
	            </div>
	            <div
	                style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',margin:"0 20px"}}
	            >	
	            	<p style={{color:"#ffa31a"}}>Helpful Links</p>
		            <div style={{display:"flex",flexDirection:"column",fontSize:"0.6rem"}}>
						<Link to="/" style={{color:"#ffffff",textDecoration:"none",}}>Privacy Policy</Link>
						<Link to="/" style={{color:"#ffffff",textDecoration:"none",}}>Disclaimer</Link>
						<Link to="/" style={{color:"#ffffff",textDecoration:"none",}}>Terms&Conditions</Link>
						<Link to="/" style={{color:"#ffffff",textDecoration:"none",}}>Events</Link>
		            </div>
	            </div>
			</div>
			<div style={{display:"flex",justifyContent:"center",borderTop:"1px solid #ffa31a",marginTop:"5px"}}>
				<div style={{marginTop:"2px"}}>
					<Instagram style={{marginRight:"2px",fontSize:"1.2rem",color:""}}/>
					<Facebook style={{marginRight:"2px",fontSize:"1.2rem"}}/>
					<Twitter style={{marginRight:"2px",fontSize:"1.2rem",color:""}}/>
				</div>
			</div>
			<div style={{display:"flex",justifyContent:"center"}}>
			<p style={{fontSize:"0.6rem"}}><Copyright style={{fontSize:"0.7rem"}}/>2021.AllRightsReserved</p>
			</div>
			
		</div>
	)
}

export default Footer;