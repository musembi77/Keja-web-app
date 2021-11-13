import React from 'react';
import {useState} from 'react';
import {Room ,AccountCircle,NotificationsNone,ArrowDropDown,Menu,Close} from '@mui/icons-material';
import '../index.css'
function Header() {

    // const HandleClick=()=>{

    // }
    const [showmenu, setShowmenu]=useState('');
    const Openmenu = ()=>{
        setShowmenu(false);
        console.log('menu opens');
    }
    const Closemenu = ()=>{
        setShowmenu(!showmenu);
        console.log('menu closes');
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
            <div
                style={{fontFamily:'Poppins-Bold',fontsize:'1.2 rem',color:'#1b1b1b',alignItems: 'center',textAlign:'center',display:'flex'}}
            >
                <h3 >KEJA</h3>
                <Room style={{color:'#ffa31a'}}/>
            </div>
            <div
                style={{
                display:'flex',
                alignItems:'center',
                }} 
            >
            <Menubar />
            <div className="Menuopen" >
                {showmenu ?
                    <Menu style={{paddingTop:'6.5 px'}} onClick={Openmenu}/>
                    :
                    <div >
                        <Close onClick={Closemenu}/>
                        <Menubar/>
                    </div>
                }
                
            
            </div>
            <NotificationsNone style={{fontSize:'1.2 rem',margin:'0 7.5 px'}}/>
            <AccountCircle style={{fontSize:'1.6 rem',margin:'0 7.5 px'}}/>
            <ArrowDropDown />
            </div>
        </div>
    )
}

export default Header

export const Menubar = ()=>{
    return(
    <div className=" Menubar_active">   
        <ul>
            <li
            style={{
                display: 'flex',
                //flexDirection: 'column',
                lineHeight:'50px',
                justifyContent:'space-between',
                alignItems:'center',
                fontFamily:'Poppins-Regular',
                fontSize:'0.9rem',
            }}
            >
            <p style={{margin: '0 10px'}}>Home</p>
            <p style={{margin: '0 10px'}}>Post an apartment</p>
            <p style={{margin: '0 10px'}}>About</p>
            <p style={{margin: '0 10px'}}>Contact</p>
            </li>
        </ul>
    </div>
        )
}
