'use strict'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, HashRouter } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { About } from "./components/about/About";
import { Main } from "./components/main/Main";
import { createStore } from "redux";
import { _ } from "lodash";


const initialState = { count: 0 };

const userReducer = function(state=initialState, action){
	switch (action.type) {
		case "INC": {
			let newState = Object.assign({} , state);
			return {count: newState.count + 1}
		}
		default: {
			return state;
		}
	}
}

const store = createStore(userReducer, initialState);

class App extends Component{
	
    constructor(){
		super();

		store.subscribe((s)=>{
			console.log("state in subscribe", store.getState());
		})

		store.dispatch({type: "INC"})		
		store.dispatch({type: "INC"})		
		
		store.dispatch({type: "INC"})		
		store.dispatch({type: "INC"})		

	}

	render(){
		return(
            <HashRouter>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/about" component={About} />
                </div>
            </HashRouter>
		);
	}
}

ReactDOM.render( <App />,  document.getElementById('root'));
