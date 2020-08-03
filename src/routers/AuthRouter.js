import React from 'react';
import LoginScreen from "../components/auth/LoginScreen";
import RegisterScreen from "../components/auth/RegisterScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


const AuthRouter = () => {
    return ( 
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route path="/auth/login" component={LoginScreen}/>
                    <Route path="/auth/register" component={RegisterScreen}/>
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </div>
    );
}
 
export default AuthRouter;