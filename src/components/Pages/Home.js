import React from "react";
import { Route } from "react-router-dom";

import "./Home.css";
import UserList from "../UserList";
import UserProfile from "../UserProfile";
import Tabs from "../Tabs";

function Home() {
    return (
        <div className="Home">
            <Tabs />
            <div className="List">
                <Route path="/admin" exact component={UserList} />
                <Route
                    path="/admin/user-profile/:id"
                    exact
                    component={UserProfile}
                />
            </div>
        </div>
    );
}

export default Home;
