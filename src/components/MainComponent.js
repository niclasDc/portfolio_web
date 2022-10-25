import React, {Component} from "react";
import Header from "./HeaderComponent";
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./HomeComponent";


class Main extends Component{
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return(
            <div>
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="*"element={<Navigate to="/home" replace />}/>
                </Routes>
            </div>
        );
    }
}

export default Main;