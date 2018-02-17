import React, { Component } from "react";
import { store } from "../../store/store";
import { GET_USERS } from "../../actions/userActions";
import { Layout } from "../layout/Layout";
import { connect } from "react-redux";

@connect((store)=>{
	return {
		users: store.users
	}
})
export class Users extends Component{

	constructor(){
		super();
	}

	componentDidMount(){
	}	

	render(){
		console.log(this.props.users)
		return(
			<Layout>
				<h4>users</h4>
				<div className="users" ref="users">
					{this.props.users.map((user)=>{
						return <span>{user.firstName} {user.lastName}</span>
					})}
				</div>
			</Layout>
		)
	}
}
