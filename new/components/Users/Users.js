import React, { Component } from "react";
import { store } from "../../store/store";

export class Users extends Component{
	
	constructor(){
		store.subscribe(()=>{
			console.log(store.getState());
		})
	}	
	
	render(){
		return(
			)
	}
}