import React,{useState,useEffect}from 'react'
import ReactMapGL,{ NavigationControl,Marker } from 'react-map-gl';
import Pin from './pin.js'
import {useQuery,} from '@apollo/client';
import {GET_PROPERTY_QUERY} from '../GraphQl/Queries.js'
import MarkProp from './MarkProp'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
mapboxgl.workerClass = MapboxWorker;

function Map(){
	const { data } = useQuery(GET_PROPERTY_QUERY);
	const INITIAL_VIEWPORT ={
			width:390,
			height:400,
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
			mapboxApiAccessToken={"pk.eyJ1IjoibXVzZW1iaSIsImEiOiJja3h6cWhkODkycjh2MndvMDdoMGtrcWM1In0.KBLhl5R-PKGzcIpa039aLg"}
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