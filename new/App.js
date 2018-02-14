'use strict'

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, HashRouter } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { About } from "./components/about/About";
import { Main } from "./components/main/Main";

// class App extends Component{
	
//     constructor(){
// 		super();		
// 	}

// 	render(){
// 		return(
            
// 		);
// 	}
// }



ReactDOM.render( (<HashRouter>
                <div>
                    <Route path="/" component={Main} />
                    <Route path="/about" component={About} />
                </div>
            </HashRouter>),  document.getElementById('root'));
