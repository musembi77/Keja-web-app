import React from 'react'
import './skeleton.css'

function Skeleton ({type}){
	const FeedSkeleton=()=>(
		<div className="p_Sk">
	    	<div className="p_imgSk"/>
	    		<div className="p_infoSk">
            <div className="p_textSk1"/>
            <div className="p_textSk2"/>
            <div className="p_textSk3" />
          </div>
    </div>
	)
	return(
		<div style={{display:"flex",flexWrap:"wrap"}}>
			<FeedSkeleton />
			<FeedSkeleton />
			<FeedSkeleton />
			<FeedSkeleton />
			<FeedSkeleton />
			<FeedSkeleton />
			<FeedSkeleton />
			<FeedSkeleton />
		</div>
		)
}
export default Skeleton;