import React from 'react';
import {Link } from "react-router-dom"
import {useState} from 'react';
import {
    Room ,
    FavoriteBorder,
    Menu,
    Close,
} 
    from '@mui/icons-material';
import '../index.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {useStateValue} from "./StateProvider"

function Header() {
    const [{currentUser}]=useStateValue();
    console.log(currentUser)
    const [showmenu, setShowmenu]=useState('');

    const HandleMenu=()=>{
        setShowmenu(!showmenu);
    }
    return (
        <div
            style={{ 
                display:'flex',
                justifyContent: 'space-between', 
                marginleft:'10px',
                margin:'5px 10px',
                cursor:'pointer',
                
            }}
        >
            <Link to="/home"
                style={{fontFamily:'Poppins-Bold',fontsize:'1.2 rem',textDecoration:"none",color:'#1b1b1b',alignItems: 'center',textAlign:'center',display:'flex'}}
            >
                <h3 >KEJA</h3>
                <Room style={{color:'#ffa31a'}}/>
            </Link>
            <div
                style={{
                display:'flex',
                alignItems:'center',
                justifyContent:"center",
                }} 
            >
            <Link to='/wishlist' style={{textDecoration:"none",color:"#000000",paddingTop:"7px"}}><FavoriteBorder style={{fontSize:'1.2rem',margin:'5px 0'}}/></Link>
            <Link to='/wishlist' style={{textDecoration:"none",color:"#000000",paddingTop:"7px",margin:"0 4px"}}><TravelExploreIcon style={{fontSize:'1.2rem',margin:'5px 0'}}/></Link>
            <Link style={{display:"flex",alignItems:"center",textDecoration:"none"}} to='/login'>
                  
                {currentUser ? 
                    <img src={currentUser.picture} alt='pp' style={{width:"20px",height:"20px",borderRadius:"2px"}}/>
                    :
                    <p style={{fontSize:'1.2 rem',margin:'0 8px',textDecoration:"none",color:"#000000"}} >{currentUser ? 'SignOut':'SignIn'}</p>
                }
            </Link>
            <div style={{alignItems:"center"}}>
            {showmenu ?
                <div >
                    <Close onClick={HandleMenu} style={{marginTop:'10px'}}/>
                    <Menubar />
                </div>
                :
                <Menu style={{marginTop:'10px'}} onClick={HandleMenu}/>
            }
            </div>
            </div>
        </div>
    )
}

export default Header

export const Menubar = () =>{
    console.log()
    return(
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                lineHeight:'60px',
                alignItems:'center',
                fontFamily:'Poppins-Regular',
                fontSize:'1rem',
                position:"absolute",
                top:"42px",
                width:"200px",
                backgroundColor:"#ffffff",
                height:"100vh",
                float:"right",
                right: "-10px" ,
                zIndex:"999"
            }}
            >
            
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/home' >Home</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/explore' >Explore</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/' >Index</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/login'>Login</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/property'>PropertyView</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/listwithUs'>List with Us</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/postlisting'>Post an Apartment</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/wishlist'>WishList</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/productview'>ProductView</Link>
            <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/About/Contact'>About/Contact Us</Link>
        </div>
        )
}
