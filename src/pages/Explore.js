import React ,{useState} from 'react'
import Property from '../components/Property'
import Search, { SearchFilter } from '../components/Search';
import {SearchInput} from '../components/Search';
import AlignHorizontalLeftIcon from '@mui/icons-material/AlignHorizontalLeft';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';


function Explore() {
    const[showFilter,setShowFilter]=useState();

    const HandleFilter=()=>{
        setShowFilter(!showFilter);
    }
    const Components = [
        <Property />,
        <Property />,
        <Property />,
        <Property />,
    ]
    return (
        <div style={{width:"100%"}}>
            <div style={{position:"relative"}}>
                    <SearchFilter />
                    <div style={{
                        width:'100vw',
                        backgroundColor:'#ffffff',
                        height:'100vh',
                        textDecoration:"none",
                        color:"#000000",
                        padding:"10px",
                                                               
                    }} >
                        <div style={{display:"flex",
                        flexWrap:"wrap",justifyContent:"space-around"   }}>
                            {Components.map((Component, key) => (
                                <div>
                                {Component}
                                </div>
                                
                            ))}
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Explore
