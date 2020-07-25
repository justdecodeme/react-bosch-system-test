import React from "react";
import { NavLink } from "react-router-dom";

import "./Tabs.css";

function Tabs(props) {
    const disableClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="Tabs">
            <ul>
                <li>
                    <NavLink to="/admin" exact>
                        User List
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/user-profile" onClick={disableClick}>
                        User Profile
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Tabs;
