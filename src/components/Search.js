import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react'
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Filter from "./Filter.js"

//searchInput
export const SearchInput = ()=>{

    return(
        <div 
            style={{
                    display: 'flex',
                    borderRadius:'999px',
                    //border:'1px solid grey',
                    padding:'1px 10px',
                    alignItems:'center',
                    backgroundColor:"#e5e5e5",
                    width:"85vw",
                    height:"30px",
                    marginLeft:"10px"
            }}>
            <SearchIcon />
                <input 
                    placeholder='Search Apartment'
                    
                    style={{
                        fontSize:'0.9rem',
                        outline:'none',
                        border:'none',
                        borderRadius:"999px",
                        height:'100%',
                        width:'100%',
                        overflowWrap:'break-word',
                        backgroundColor:"#e5e5e5"
                    }}
                    
                />
            </div>
    )
}

export const SearchFilter=()=>{
    const[showFilter,setShowFilter]=useState();

    const HandleFilter=()=>{
        setShowFilter(!showFilter);
    }
    return(
        <div style={{display:"flex",alignItems:"center"}}>
                        {showFilter ? 
                            (
                                <div style={{
                                    width:"200px",
                                    height:'100vh',
                                    padding:'0 5px',
                                    position:"absolute",
                                    top:"0",
                                    //left:"0px",
                                    zIndex:"1",
                                    backgroundColor:"#ffffff",
                                }}>
                                    <IconButton onClick={HandleFilter} style={{position:"absolute",top:"10px",right:"0",zIndex:"1"}}>
                                        <CloseIcon style={{cursor:"pointer"}}/>                            
                                    </IconButton>                                    
                                    <Filter />
                                </div>   
                                
                            )
                            :
                            (
                                <div style={{display:"flex"}}>
                                    <SearchInput />
                                    <IconButton onClick={HandleFilter}>
                                        <AlignHorizontalLeftIcon 
                                        style={{
                                            fontSize:"1rem",
                                            margin:"0 5px",
                                            color:"#000000"
                                        }}/>
                                    </IconButton>
                                </div>                                               
                            )
                        }
                    </div>
    )
}