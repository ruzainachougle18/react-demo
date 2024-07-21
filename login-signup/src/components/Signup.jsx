import React from "react";
import "./Signup.css";

const Signup = () => {
    return (
        <div className="addUser">
            <h3>SignUp</h3>
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
                <p>Already have an account?
                    <a href="google.com">Log In</a>
                </p>
            </div>
        </div>
    )
}

export default Signup;