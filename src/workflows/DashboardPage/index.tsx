import { useEffect } from "react";
import "./index.css";
import { getUserSession } from "../../api/auth";
import { useNavigate } from "react-router-dom";

interface LinkItemProps {
    name: string;
    path: string;
}

const LinkItem = (props: LinkItemProps) => {
    const navigateTo = useNavigate();

    return (
        <li
            style={{
                cursor: "pointer",
            }}
            onClick={() => {
                navigateTo(props.path);
            }}
            className="list-group-item"
        >
            {props.name}
        </li>
    );
};

export const DashboardPage = () => {
    useEffect(() => {
        const fetchSession = async () => {
            await getUserSession();
        };

        fetchSession();
    }, []);

    const dashboardLinks: LinkItemProps[] = [
        {
            name: "Register New Complaint",
            path: "/complaint/register",
        },
        {
            name: "Previous Complaints",
            path: "/complaint/history",
        },
        {
            name: "Search Complaint",
            path: "/complaint/search",
        },
    ];

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
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <ul className="list-group"></ul>
                        {dashboardLinks.map((item, index) => {
                            return <LinkItem {...item} key={index} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
