import React from "react";
import {useLocation} from "react-router-dom";
import './App.css';

function PageNotFound() {
    let location = useLocation();
    return(
        <p>The page {location.pathname} could not be found.</p>
    );
}

export default PageNotFound;