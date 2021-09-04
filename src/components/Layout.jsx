import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import { Provider } from "react-redux";
import store from "../redux/store/createStore";
import SocketIOContextProvider from '../contexts/socketio/SocketIOContext';
import Routes from '../routes/Routes'

const Layout = () => {
    return (

    <Provider store={store}>
        <SocketIOContextProvider>
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )}/>
        </BrowserRouter>
        </SocketIOContextProvider>
        </Provider>
    )
}

export default Layout
