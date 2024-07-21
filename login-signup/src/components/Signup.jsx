import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="addUser">
            <h3>SignUp</h3>
            <form className="addUserForm">
                <div className="input">
                    <label htmlFor="name">Name</label>
                    <inout type="text" id="name"></inout>
                </div>
            </form>
        </div>
    )
}

export default Signup;