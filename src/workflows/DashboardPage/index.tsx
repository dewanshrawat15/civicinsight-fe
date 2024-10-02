import { useEffect } from "react";
import "./index.css";
import { getUserSession } from "../../api/auth";

export const DashboardPage = () => {
    useEffect(() => {
        const fetchSession = async () => {
            await getUserSession();
        };

        fetchSession();
    }, []);

    return (
        <div id="hero">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="hero-title">Dashboard</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="hero-tagline">
                            Welcome to our platform, register/view your
                            complaint status in real time
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
