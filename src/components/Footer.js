import React from 'react'
import {Link } from "react-router-dom"
import {Room,
        Facebook,
        Instagram,
        Copyright,
        Twitter,
} from '@mui/icons-material'

function Footer(){
	return(
		<div style={{backgroundColor:"#100C08",color:"white",fontSize:"0.8rem",padding:"5px",}}>
			<div style={{display:"flex",flexWrap:"wrap"}}>
				<div style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',}}>	
		            		<div style={{display:"flex",}}>
						<h3 >KEJA</h3>
		                		<Room style={{color:'#ffa31a',fontSize:'1.1rem'}}/>
					</div>
	                		<span style={{fontSize:'0.6rem'}}>Find the Right Aprtment</span>
	                		<div style={{width:"",backgroundColor:"",margin:"5px 0"}}>
	                			<p style={{color:"#ffa31a"}}>Contact Us</p>
	                			<div style={{fontSize:"0.7rem",alignItems:"center"}}>
		                			<p>0771712005</p>
		                			<a href='mailto:keja.app@outlook.com'>keja.app@outlook.com</a>
	                			</div>
	                			
	                		</div>
				</div>
	            		<div style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',margin:"0 20px"}}>	
	            			<p style={{color:"#ffa31a"}}>Our Services</p>
		            		<div style={{display:"flex",flexDirection:"column",fontSize:"0.6rem"}}>
						<Link to="/home"  style={{color:"#ffffff",textDecoration:"none",}}>Home</Link>
						<Link to="/explore"  style={{color:"#ffffff",textDecoration:"none",}}>Explore</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Features</Link>
						<Link to="/listwithUs"  style={{color:"#ffffff",textDecoration:"none",}}>List With Us</Link>
						<Link to="/support"  style={{color:"#ffffff",textDecoration:"none",}}>Hire An Agent</Link>
		            		</div>
	            		</div>
	            		<div style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',margin:"0 20px"}}>	
	            			<p style={{color:"#ffa31a"}}>Information</p>
		            		<div style={{display:"flex",flexDirection:"column",fontSize:"0.6rem"}}>
		            			<Link to="/support"  style={{color:"#ffffff",textDecoration:"none",}}>How Keja Works</Link>
						<Link to="/about"  style={{color:"#ffffff",textDecoration:"none",}}>About Us</Link>
						<Link to="/"  style={{color:"#ffffff",textDecoration:"none",}}>Testimonials</Link>
					</div>
	            		</div>
	            		<div style={{fontFamily:'Poppins-Bold',fontsize:'0.7rem',textDecoration:"none",color:'#ffffff',margin:"0 20px"}}>	
	            			<p style={{color:"#ffa31a"}}>Helpful Links</p>
			            	<div style={{display:"flex",flexDirection:"column",fontSize:"0.6rem"}}>
						<a href="https://www.privacypolicygenerator.info/live.php?token=KHzPleRJifcjjGtdr7kophQ59Ao9hbHC" target="_blank" rel="noopener noreferrer"  style={{color:"#ffffff",textDecoration:"none",}}>Privacy Policy</a>
						<a href="https://www.disclaimergenerator.net/live.php?token=bygIjGNwLh6iHdHGxg3RoYHYPha9nj7k" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",textDecoration:"none",}}>Disclaimer</a>
						<a href="https://www.termsandconditionsgenerator.com/live.php?token=BiNDn4Sa6jHgN92mCrbof7VzVUEdm563" target="_blank" rel="noopener noreferrer" style={{color:"#ffffff",textDecoration:"none",}}>Terms&Conditions</a>
					</div>
	            		</div>
			</div>
			<div style={{display:"flex",justifyContent:"center",borderTop:"1px solid #ffa31a",marginTop:"5px"}}>
				<div style={{marginTop:"2px",display:"flex"}}>
					<a href='https://www.instagram.com/keja_app/' target="_blank" rel="noopener noreferrer" style={{color:"#ffffff"}}><Instagram style={{marginRight:"10px",fontSize:"1.2rem",color:""}}/></a>
		                    	<p style={{color:"#ffffff"}}><Facebook style={{marginRight:"10px",fontSize:"1.2rem"}}/></p>
		                    	<p style={{color:"#ffffff"}}><Twitter style={{marginRight:"5px",fontSize:"1.2rem",color:""}}/></p>
				</div>
			</div>
			<div style={{display:"flex",justifyContent:"center"}}>
				<p style={{fontSize:"0.6rem"}}><Copyright style={{fontSize:"0.7rem"}}/>2021.AllRightsReserved</p>
			</div>
		</div>
	)
}
export default Footer;