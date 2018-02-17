import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, HashRouter } from 'react-router-dom';

import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { About } from "./components/about/About";
import { Main } from "./components/main/Main";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { Users } from "./components/users/Users";

class App extends Component{
	
    constructor(){
		super();
	}

	render(){
		return(
			<Provider store={store}>	
	            <HashRouter>
	                <div>
	                    <Route exact path="/" component={Main} />
	                    <Route path="/about" component={About} />
						<Route path="/users" component={Users} />
	                </div>
	            </HashRouter>
	        </Provider>
		)
	}
}

ReactDOM.render( <App />,  document.getElementById('root'));
