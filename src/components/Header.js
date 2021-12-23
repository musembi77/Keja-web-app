import React from 'react';
import {Link } from "react-router-dom"
import {useState} from 'react';
import {
    Room ,
    Menu,
    Close,
    Home,
    SupportAgent,
    Facebook,
    Instagram,
    Twitter,
} 
    from '@mui/icons-material';
import '../index.css'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {useStateValue} from "./StateProvider"

function Header() {
    const [{currentUser}]=useStateValue();
    //console.log(currentUser)
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
            <Link to='/home' style={{textDecoration:"none",color:"#000000",paddingTop:"7px"}}><Home style={{fontSize:'1.2rem',margin:'5px'}}/></Link>
            <Link to='/explore' style={{textDecoration:"none",color:"#000000",paddingTop:"7px",margin:"0 4px"}}><TravelExploreIcon style={{fontSize:'1.2rem',margin:'5px 0'}}/></Link>
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
                justifyContent:"space-between",
                lineHeight:'40px',
                alignItems:'center',
                fontFamily:'Poppins-Regular',
                fontSize:'1rem',
                position:"absolute",
                top:"42px",
                width:"200px",
                backgroundColor:"#ffffff",
                height:"90vh",
                float:"right",
                right: "-10px" ,
                zIndex:"999"
            }}
            >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                lineHeight:'50px',
                alignItems:'center',
                fontFamily:'Poppins-Regular',
                fontSize:'1rem',
               
            }}>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/home' >Home</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/explore' >Explore</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/' >Index</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/login'>SignIn</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/listwithUs'>List with Us</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/Services'>Services</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/about'>About</Link>

                
            </div>
            <div style={{}}>
                <div style={{display:'flex',alignItems:"center"}}>
                    <SupportAgent />
                    <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/support'>Support</Link>
                </div>
                
                <div style={{marginTop:"",borderTop:"1px solid #ffa31a",width:"100px",display:"flex"}}>
                    <a href='https://www.instagram.com/keja_app/' target="_blank" rel="noopener noreferrer" style={{color:'#000000'}}><Instagram style={{marginRight:"10px",fontSize:"1.2rem",}}/></a>
                    <p style={{color:'#000000'}}><Facebook style={{marginRight:"10px",fontSize:"1.2rem"}}/></p>
                    <p style={{color:'#000000'}}><Twitter style={{marginRight:"5px",fontSize:"1.2rem",}}/></p>
                </div>
            </div>
        </div>
        )
}
