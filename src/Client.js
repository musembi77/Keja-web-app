import { GraphQLClient } from 'graphql-request'
import {useState,useEffect} from 'react'


export const BASE_URL = process.env.NODE_ENV === "production" ? "https://kejaapp.herokuapp.com" :"https://kejaapp.herokuapp.com"

export const useClient =()=>{
	const[idtoken,setIdToken]=useState("")

	useEffect(()=>{
		const token = window.gapi.auth2
			.getAuthInstance()
			.currentUser.get()
			.getAuthResponse().id_token;
			setIdToken(token)


	},[idtoken])
	return new GraphQLClient(BASE_URL,{
		headers:{authorization: idtoken}	
	})
}