import React, { Component } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './header';
import FormOne from './formOne';
import FormTwo from './formtwo';
import FormThree from './formThree';

import FormFour from './formFour';

class Router extends Component {

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/formfour" element={<FormFour/>} />
                    <Route path="/formthree" element={<FormThree/>} />
                    <Route path="/formtwo" element={<FormTwo/>} />
                    <Route path="/" element={<FormOne/>} />

                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;