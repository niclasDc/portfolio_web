import React, {Component} from "react";
import Header from "./HeaderComponent";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";


class Main extends Component{
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return(
            <div style={{backgroundColor: '#F8F6F5'}}>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route exact path="/aboutus" element={<About/>}/>
                    <Route exact path="/contactus" element={<Contact/>}/>
                    <Route path="*"element={<Navigate to="/" replace />}/>
                </Routes>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Main;