import React,{useState,useEffect}from 'react'
import ReactMapGL,{ NavigationControl,Marker } from 'react-map-gl';
import Pin from './pin.js'
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import MarkProp from './MarkProp'

function Map(){
	const { data } = useQuery(GET_PROPERTY_QUERY);
	const INITIAL_VIEWPORT ={
			width:400,
			height:200,
			latitude: -1.0969,
		    longitude: 37.0154,
		    zoom: 14
	}
	const [viewport, setViewport] = useState(INITIAL_VIEWPORT);
	const [propertyPosition, setPropertyPosition] = useState(null)
	const [dataq,setData]=useState([])
	useEffect(()=>{
        if(data){
            console.log("success")
            setData(data.get_Properties)
            
        }
    },[data]);
	useEffect(()=>{
		getPropertyPosition()
	},)
	
	const getPropertyPosition=()=>{
		if("geolocation" in navigator){
			navigator.geolocation.getCurrentPosition(position=>{
				const{latitude,longitude}=position.coords
					setViewport({...viewport, latitude,longitude})
					setPropertyPosition({latitude,longitude})
			})
		}
	}
	return(
		<ReactMapGL
			mapStyle="mapbox://styles/mapbox/outdoors-v11"
			mapboxApiAccessToken="pk.eyJ1IjoibXVzZW1iaSIsImEiOiJja3hqc2NlMmI0bGp2MnBvNXQ5NW00anV3In0.AvrW6jEWWhCoUMCaZZ5M8A"
		    {...viewport}
		      onViewportChange={nextViewport => setViewport(nextViewport)}
	    >
	    <div> 
	    	<NavigationControl 
	    		onViewportChange={nextViewport => setViewport(nextViewport)}
	    	/>
	    </div>
	    {
	    	dataq.map((property)=>{
	    	return(
	    		<MarkProp property={property}/>
	    	)
	    })}
	    {propertyPosition && (
	    	<Marker
	    		latitude={propertyPosition.latitude}
	    		longitude={propertyPosition.longitude}

	    	>	
	    		<Pin />
	    	</Marker>
	    )}
	    </ReactMapGL>
	)
}

export default Map;