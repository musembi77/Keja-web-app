import React from 'react'
import Property from './Property'
import Search from './Search'
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div style={{width:"100%"}}>
            <div style={{display: 'flex',flexDirection:'row'}}>
                <div style={{width:'200px',height:'100vh',padding:'0 5px'}}>
                    <Search />
                </div>
                <Link style={{width:'70vw',backgroundColor:'#ffffff',height:'100vh',textDecoration:"none",color:"#000000"}} to='/property'>
                    <Property />
                </Link>
            </div>
        </div>
    )
}

export default Home
