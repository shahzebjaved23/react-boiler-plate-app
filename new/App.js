'use strict'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Main extends Component{
	
    constructor(){
		super();		
	}

	render(){
		return(
			<div className="container">hello </div>
		);
	}
}



ReactDOM.render( <Main />,  document.getElementById('root'));
