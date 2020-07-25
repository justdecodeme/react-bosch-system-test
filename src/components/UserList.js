import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import reqres from "../api/reqres";
import "./UserList.css";

function UserList(props) {
    const [users, setUsers] = useState([]);

    const getUserList = async () => {
        const response = await reqres.get("/users", {});
        let sortedUsers = [...response.data.data].sort((a, b) =>
            a["first_name"] > b["first_name"] ? 1 : -1
        );
        setUsers(sortedUsers);
    };

    useEffect(() => {
        getUserList();
        // return () => {};
    }, []);

    const userClickHandler = (userId) => {
        props.history.push("/admin/user-profile/" + userId);
    };

    const renderUsersList = () => {
        if (users) {
            let list = users.map((user) => {
                return (
                    <ul onClick={() => userClickHandler(user.id)} key={user.id}>
                        <li>
                            <img src={user.avatar} alt={user.first_name} />
                        </li>
                        <li>{user.first_name}</li>
                        <li>{user.last_name}</li>
                        <li>{user.email}</li>
                    </ul>
                );
            });

            return list;
        }
    };

    const sortUsers = (e, filter) => {
        let sortedUsers = [...users];
        if (e.target.classList.contains("Active")) {
            if (e.target.classList.contains("Up")) {
                e.target.classList.remove("Up");
                e.target.classList.add("Down");
                sortedUsers.sort((a, b) => (a[filter] > b[filter] ? 1 : -1));
            } else {
                sortedUsers.sort((a, b) => (a[filter] < b[filter] ? 1 : -1));
                e.target.classList.add("Up");
                e.target.classList.remove("Down");
            }
        } else {
            document.querySelector(".Fixed .Active").classList.remove("Active");
            e.target.classList.add("Active");
            if (e.target.classList.contains("Up")) {
                sortedUsers.sort((a, b) => (a[filter] < b[filter] ? 1 : -1));
            } else {
                sortedUsers.sort((a, b) => (a[filter] > b[filter] ? 1 : -1));
            }
        }
        setUsers(sortedUsers);
    };

    return (
        <div className="UserList">
            <ul className="Fixed">
                <li>Avatar</li>
                <li
                    className="Active Down"
                    onClick={(e) => sortUsers(e, "first_name")}
                >
                    First Name <FontAwesomeIcon icon={faArrowDown} />{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                </li>
                <li className="Down" onClick={(e) => sortUsers(e, "last_name")}>
                    Last Name <FontAwesomeIcon icon={faArrowDown} />{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                </li>
                <li className="Down" onClick={(e) => sortUsers(e, "email")}>
                    Email <FontAwesomeIcon icon={faArrowDown} />{" "}
                    <FontAwesomeIcon icon={faArrowUp} />
                </li>
            </ul>
            <ul className="Scroll">
                <li>{renderUsersList()}</li>
            </ul>
        </div>
    );
}

export default withRouter(UserList);
