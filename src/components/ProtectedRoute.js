import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import { useSelector } from 'react-redux'



const ProtectedRoute = ({ component: Component, ...rest }) => {
    console.log('protected work')
    const isToken = useSelector(state => state.appData.isToken);

    return (
        <Route {...rest} render={
            props => {
                console.log('isToken is = ' + isToken)
                if (isToken) {
                    console.log('protected returned component')
                    return (
                        <div>
                            <Navbar />
                            <Component {...rest} {...props} />
                        </div>
                    ) 
                } else {
                    console.log('protected returned LOGIN')
                    return <Redirect to={
                                {
                                    pathname: '/login',
                                    state: {
                                        from: props.location
                                    }
                                }
                            } />
                }
            }
        } />
    )


}
  
export default ProtectedRoute