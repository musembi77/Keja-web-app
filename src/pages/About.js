import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

function About(){
	return(
		<div>
			
			<div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"200px",color:"#fff",backgroundColor:'#100C08',marginBottom:"-20px"}}>
				<p style={{fontFamily:"Poppins-Bold",fontSize:"2rem",textTransform:"uppercase"}}>About Us</p>
				<p style={{fontSize:"0.8rem"}}>.Keja.</p>
			</div>
			<div style={{textAlign:'center',borderRadius:"10px 10px 0 0",backgroundColor:"#e5e5e5"}}>
				<p style={{fontFamily:"Poppins-Bold",fontSize:"1.2rem",}}>Welcome to Keja</p>
				<div style={{padding:"10px 0"}}>
					<p>Founded in 2021, Keja is a platform that helps Campus Students get access to rentals around their Institution.
					We ,Keja, help them find an apartment that truly connect with them at the comfort of their homes.We redefine 
					house hunting from miserable and overwhelming to providing an easy and enjoyable experience.We Provide Listing advertisements
					of available vacancies in rentals, flats and homes.We connect house hunters to landlords, homeOwners, services through our platform.
					Click <Link to='/support'>here</Link> to have an in-depth walkthrough of the House-Hunting process.
					</p>
				</div>
				<p style={{fontFamily:"Poppins-Bold",fontSize:"1.2rem",}}>Our Vision</p>
				<div style={{padding:"10px 0"}}>
					<p>To Deliver TrustWorthy and Honest experiences while Using Our Platform
					</p>
				</div>
				<p style={{fontFamily:"Poppins-Bold",fontSize:"1.2rem",}}>Our Mission</p>
				<div style={{padding:"10px 0"}}>
					<p>To be the first choice for our consumers and partners in finding an apartment
					and finding a home.
					</p>
				</div>
				<p style={{fontFamily:"Poppins-Bold",fontSize:"1.2rem",}}>Our Virtues</p>
				<div style={{padding:"10px 0"}}>
						<p>Honesty</p>
						<p>Security</p>
						<p>Trust</p>
						<p>Conveniency</p>
						<p>Reliablity</p>
				</div>
				<img src="./keja.jpg" alt="logo" style={{width:"100%"}}/>
			</div>
			<Footer />
		</div>
	)
}

export default About