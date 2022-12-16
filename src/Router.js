import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Listing from './containers/Listing'
import Login from './components/Login'
import BizDetails from './containers/BizDetails'
import cookie from 'cookie'


// checkAuth function below, which checks for cookies when someone is loggedin
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
        return !!cookies['loggedin']

};

// write protected routes functions here which will hide certain routes unless you are logged in
const ProtectedRoute = (props) => {
    const {component: Component} = props
    return checkAuth() === true ? <Component /> : <Navigate to='/login'></Navigate>;
}

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" component={<Listing/>} />
            <Route path="/login" element={<Login />}/>
            <Route path="/BizDetails/:id" element={<BizDetails />} />
        </Routes>
    );
};

export default Router;