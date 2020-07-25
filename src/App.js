import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import ContactUs from "./components/Pages/ContactUs";
import Features from "./components/Pages/Features";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="Nav">
                    <Navigation />
                </div>
                <div className="Content">
                    <Header />
                    <Breadcrumb />
                    <Route path="/about-us" exact component={AboutUs} />
                    <Route path="/contact-us" exact component={ContactUs} />
                    <Route path="/features" exact component={Features} />
                    {/* <Route path="/admin" component={Home} /> */}
                    <Route path="/admin" render={() => <Home />} />
                    <Redirect from="/" to="/admin" />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
