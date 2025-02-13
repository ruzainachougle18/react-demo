import React from "react";
import "./login.css";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="addUser">
            <h3>Login</h3>
            <form className="addUserForm">
                <div className="input">

                    <label for="email">EMAIL</label>
                    <input type="email" id="mail" />
                    <label for="password">PASSWORD</label>
                    <input type="password" id="p-word" />

                    <button type="submit" class="create-btn">Login</button>
                </div>
            </form>

            <div class="login">
                <p>Don't have an Account?</p>
                <Link to="/" type="submit" class="login-btn-success">Sign up</Link>
            </div>
        </div>
    )
}

export default Login;