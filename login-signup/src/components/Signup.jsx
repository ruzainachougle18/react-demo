import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="addUser">
            <h3>Sign Up</h3>
            <form className="addUserForm">
                <div className="input">
                    <label for="name">NAME</label>
                    <input type="text" id="name" />
                    <label for="email">EMAIL</label>
                    <input type="email" id="mail" />
                    <label for="password">PASSWORD</label>
                    <input type="password" id="p-word" />

                    <button type="submit" class="create-btn">Sign Up</button>
                </div>
            </form>

            <div class="login">
                <p>Already have an account?</p>
                <Link to="/login" type="submit" class="login-btn">Log In</Link>
            </div>
        </div>
    )
}

export default Signup;