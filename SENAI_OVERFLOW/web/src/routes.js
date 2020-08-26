import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {Login} from './pages/login/index.js';
import {Home} from './pages/home/index.js';
import { isSignIn } from './services/security'	

const PrivateRoute = ( { children , ...rest} ) => {


	return ( 
		<Route 
			{...rest} 
			render={ 
				( {location} ) => 
				 	isSignIn() ? (children) :
				 	( <Redirect 
				 		to={ 
					 			{ pathname:"/", 
					 			state: { from:location },
					 			} 
				 			} 
				 		/>
				 	) 
				 
			} 
		/>			
			);

}
function Routes(){
	return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" >
						<Login />
					</Route>
					<PrivateRoute path="/home">
						<Home />
					</PrivateRoute>
					
				</Switch>
			</BrowserRouter>
		);
}


export default Routes;