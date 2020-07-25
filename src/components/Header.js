import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <h1>
                <NavLink to="/" exact>
                    <FontAwesomeIcon icon={faIgloo} />
                    <span>Brand</span>
                </NavLink>
            </h1>
            <p>User Name</p>
        </div>
    );
}

export default Header;
