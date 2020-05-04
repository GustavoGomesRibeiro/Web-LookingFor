import React from 'react';
// import {isAuthenticated} from '../Services/authService';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Login from '../View/Session/Login';
import Register from '../View/Session/Register';
import DefaultLayout from '../Container/DefaultHome';
import Profile from '../View/Profile/Profile';
import Home from '../View/Main/Home';

// const PrivateRoute = ({component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render = {props => isAuthenticated() ? (<Component {...props}/>) 
//         : (<Redirect to= {{pathname: '/', state: { from: props.location } }}/>)
//         }
//     />
// );

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Register' component={Register} />
            <DefaultLayout>
                {/* <PrivateRoute path='/DefaultLayout' component={DefaultLayout}/> */}
                <Route path='/Profile' component={Profile} />
                <Route path='/Home' component={Home} />
                {/* <Route path='/DefaultHome' component={DefaultLayout} /> */}
            </DefaultLayout>
            <Route path='*' component={() => <h1>page not Found 404</h1>} />
        </Switch>
    </BrowserRouter>
)


export default Routes;