import React, {Component} from "react";
import Header from "./HeaderComponent";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./HomeComponent";
import Footer from "./FooterComponent";


class Main extends Component{
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return(
            <div style={{backgroundColor: '#F8F6F5' }}>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="*"element={<Navigate to="/home" replace />}/>
                </Routes>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Main;