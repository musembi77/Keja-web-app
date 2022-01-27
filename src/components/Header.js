import React from 'react';
import {Link } from "react-router-dom"
import {
    Room ,
    Menu,
    Close,
    SupportAgent,
    Instagram,
    Twitter,
} 
    from '@mui/icons-material';
import '../index.css'
import {useStateValue} from "./StateProvider"

function Header({onClick,showmenu}) {
    const [{currentUser}]=useStateValue();
    //console.log(currentUser)
    // const [showmenu, setShowmenu]=useState('');

    // const HandleMenu=()=>{
    //     setShowmenu(!showmenu);
    // }
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
                style={{fontFamily:'Poppins-Bold',fontsize:'1.2 rem',textDecoration:"none",color:'#1b1b1b',display:'flex',justifyContent:"center",alignItems: 'center',textAlign:'center'}}
            >
                <h3 style={{marginTop:"10px"}}>KEJA</h3>
                <Room style={{color:'#ffa31a'}}/>
            </Link>
            <div
                style={{
                display:'flex',
                alignItems:'center',
                justifyContent:"center",
                }} 
            >
            <Link to='/home' style={{textDecoration:"none",color:"#000",fontFamily:'Poppins-Bold',backgroundColor:"#e5e5e5",padding:"2px"}}>Home</Link>
            <Link to='/explore' style={{textDecoration:"none",color:"#ffa31a",margin:"0 5px"}}>Explore</Link>
            <Link style={{display:"flex",alignItems:"center",textDecoration:"none"}} to='/login'>
                  
                {currentUser ? 
                    <div style={{display:"flex",alignItems:"center"}}>
                    <img src={currentUser.picture} alt='pp' style={{width:"20px",height:"20px",borderRadius:"2px"}}/>
                    <p style={{fontSize:"0.6rem",margin:"0 5px"}}>{currentUser.name}</p>
                    </div>
                    :
                    <p style={{fontSize:'1.2 rem',margin:'0 8px',textDecoration:"none",color:"#000000"}} >{currentUser ? 'SignOut':'SignIn'}</p>
                }
            </Link>
            <div style={{alignItems:"center"}}>
            {showmenu ?
                <div onClick={onClick}>
                    <Close onClick={onClick} style={{marginTop:'10px'}}/>
                    <Menubar />
                </div>
                :
                <Menu style={{marginTop:'10px'}} onClick={onClick} currentUser={currentUser}/>
            }
            </div>
            </div>
        </div>
    )
}

export default Header

export const Menubar = ({currentUser}) =>{
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
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/exploreservices'>Services</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/map'>Map</Link>
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/login'>SignIn</Link>
                
                
                <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/about'>About</Link>

                
            </div>
            <div style={{}}>
                <div style={{display:'flex',alignItems:"center"}}>
                    <SupportAgent />
                    <Link style={{margin: '0 10px',textDecoration:"none",color:"#000000"}} to ='/support'>Support</Link>
                </div>
                
                <div style={{marginTop:"",borderTop:"1px solid #ffa31a",width:"100px",display:"flex",justifyContent:"center"}}>
                    <a href='https://www.instagram.com/keja_app/' target="_blank" rel="noopener noreferrer" style={{color:'#000000'}}><Instagram style={{marginRight:"10px",fontSize:"1.2rem",}}/></a>
                    <a href='https://twitter.com/intent/tweet?url=https://twitter.com/Keja_app?t=zgzb5QSgs_tYOu8YGH9uKg&s=08&text=' target="_blank" rel="noopener noreferrer"  style={{color:'#000000'}}><Twitter style={{marginRight:"5px",fontSize:"1.2rem",color:""}}/></a>
                </div>
            </div>
        </div>
        )
}
