import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";

export const LoginPage = () => {
    const navigateTo = useNavigate();
    const [username, updateUsername] = useState("");
    const [password, updatePassword] = useState("");

    const handleLogin = async () => {
        const authData = { username, password };
        await loginUser(authData);
        navigateTo("/dashboard");
    };

    return (
        <div id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="hero-title">Login Page</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="hero-tagline">Login into our platform</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                onChange={(e) => updateUsername(e.target.value)}
                                type="username"
                                className="form-control"
                                id="username"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pwd">Password:</label>
                            <input
                                onChange={(e) => updatePassword(e.target.value)}
                                type="password"
                                className="form-control"
                                id="pwd"
                            />
                        </div>
                        <button
                            onClick={() => handleLogin()}
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
