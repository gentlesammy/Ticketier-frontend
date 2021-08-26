import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import DefaultLayouts from '../../layouts/DefaultLayouts';

const isAuth = true;
const PrivateRoute = ({children, ...rest}) => {
    return (
        <Route 
            {...rest}
            render = {()=> {
               return isAuth ?<DefaultLayouts>{children}</DefaultLayouts>: <Redirect to="/"/>
            }}
        />
    )
}

export default PrivateRoute
