import React from "react";
import { withRouter } from "react-router-dom";

import "./Breadcrumb.css";

function Breadcrumb(props) {
    const capitalizeFirstLetter = (string) =>
        string.charAt(0).toUpperCase() + string.slice(1);

    let pageName = props.location.pathname;
    pageName = pageName.substring(1, pageName.length).replace("-", " ");
    pageName = capitalizeFirstLetter(pageName);
    if (pageName.includes("profile")) pageName = "User Profile";
    if (pageName === "Admin") pageName = "Home";

    return (
        <nav className="Breadcrumb">
            <ul>
                {pageName !== "Home" ? (
                    <li>
                        Home<span> &gt; </span>
                    </li>
                ) : null}

                <li>{pageName}</li>
            </ul>
        </nav>
    );
}

export default withRouter(Breadcrumb);
