import React from 'react'
//import Header from './Header'
import Search from './Search'

function Home() {
    return (
        <div style={{width:"100%"}}>
            <div style={{display: 'flex',flexDirection:'row'}}>
                <div style={{width:'200px',height:'100vh',padding:'0 5px'}}>
                    <Search />
                </div>
                <div style={{width:'70vw',backgroundColor:'#ffffff',height:'100vh',}}>
                    <h1>s</h1>
                </div>
            </div>
        </div>
    )
}

export default Home
