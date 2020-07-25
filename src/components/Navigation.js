import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faLeaf,
    faEye,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

import "./Navigation.css";

function Navigation() {
    return (
        <nav className="Navigation">
            <ul>
                <li>
                    <NavLink to="/admin">
                        <FontAwesomeIcon icon={faHome} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/features">
                        <FontAwesomeIcon icon={faLeaf} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about-us">
                        <FontAwesomeIcon icon={faEye} />
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact-us">
                        <FontAwesomeIcon icon={faAddressBook} />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
