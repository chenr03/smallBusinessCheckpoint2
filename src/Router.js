import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Listing from './containers/Listing'
import Login from './containers/Login'
import BizDetails from './containers/BizDetails'
import cookie from 'cookie'
import AdminView from './components/AdminView'
import AddListing from './containers/AddListing'


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
            <Route path="/" element={<Listing />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/BizDetails/:id" element={<BizDetails />} />
            <Route path="/AdminView" element={<ProtectedRoute component={AdminView} />} />
            <Route path="/AddListing" element={<ProtectedRoute component={AddListing} />} />
        </Routes>
    );
};

export default Router;