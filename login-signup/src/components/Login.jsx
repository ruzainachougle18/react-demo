import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="addUser">
            <h3>Login</h3>
            <form className="addUserForm">
                <div className="input">
                    <label for="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                    <label for="email">Email:</label>
                    <input type="email" id="mail" placeholder="Enter your Email id" />
                    <label for="password">Password:</label>
                    <input type="password" id="p-word" placeholder="Enter password" />

                    <button type="submit" class="create-btn">Sign Up</button>
                </div>
            </form>

            <div class="login">
                <p>Already have an account?</p>
                <button type="submit" class="login-btn">Log In</button>
            </div>
        </div>
    )
}

export default Login;