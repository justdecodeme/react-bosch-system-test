import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";

import reqres from "../api/reqres";
import "./UserListProfile.css";

function UserProfile(props) {
    const { register, handleSubmit, errors } = useForm();

    let userId = props.match.params.id;
    const [user, setUser] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = (data) => {
        setIsSubmit(true);
        setIsEdit(false);
    };

    const getUserDetails = async () => {
        const response = await reqres.get("/users/" + userId, {});
        setUser({ ...response.data.data });
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    const showEdit = (e) => {
        e.preventDefault();
        setIsEdit(true);
        setFirstName(user.first_name);
        setLastName(user.last_name);
        setEmail(user.email);
    };

    const renderForm = (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors.firstName && (
                <p className="error">
                    First Name length should be between 4 &amp; 16.
                </p>
            )}
            {errors.lastName && (
                <p className="error">
                    Last Name length should be between 4 &amp; 16.
                </p>
            )}
            {errors.email && <p className="error">Email is invalid.</p>}
            <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
                ref={register({ required: true, minLength: 3, maxLength: 15 })}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
                ref={register({ required: true, minLength: 3, maxLength: 15 })}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                ref={register({
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    },
                })}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="submit" value="Submit" />
        </form>
    );

    const renderUser = (
        <div className="Info">
            <ul>
                <li>
                    <img src={user.avatar} alt={user.first_name} />
                </li>
                <li>
                    <b>First Name:</b> {user.first_name}
                </li>
                <li>
                    <b>Last Name:</b> {user.last_name}
                </li>
                <li>
                    <b>Email:</b> {user.email}
                </li>
            </ul>
            <input type="submit" value="Edit" onClick={(e) => showEdit(e)} />
        </div>
    );

    return (
        <div className="UserProfile">
            {user && !isEdit && !isSubmit ? renderUser : null}
            {isEdit ? renderForm : null}
            {isSubmit ? (
                <div className="Info">
                    <h3 style={{ color: "yellow", textAlign: "center" }}>
                        Form Submitted Successfully!
                    </h3>
                    <ul>
                        <li>
                            <b>First Name:</b> {firstName}
                        </li>
                        <li>
                            <b>Last Name:</b> {lastName}
                        </li>
                        <li>
                            <b>Email:</b> {email}
                        </li>
                    </ul>
                </div>
            ) : null}
        </div>
    );
}

export default withRouter(UserProfile);
