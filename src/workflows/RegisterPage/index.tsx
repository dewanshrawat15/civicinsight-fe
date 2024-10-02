import { useState } from "react";
import "./index.css";
import { registerNewUser } from "../../api/auth";

export const RegisterPage = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async () => {
        await registerNewUser({
            first_name: firstName,
            last_name: lastName,
            email: email,
            username: username,
            password: password,
        });
    };

    return (
        <div id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="hero-title">Registration Page</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="hero-tagline">Register on our platform</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <label htmlFor="first_name">First Name:</label>
                            <input
                                onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="first_name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name:</label>
                            <input
                                onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                className="form-control"
                                id="last_name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                id="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                onChange={(e) => setUsername(e.target.value)}
                                type="username"
                                className="form-control"
                                id="username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="pwd"
                            />
                        </div>
                        <button
                            onClick={() => handleRegister()}
                            className="btn btn-default"
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
