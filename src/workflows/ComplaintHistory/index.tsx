import { useEffect, useState } from "react";
import "./index.css";
import { fetchHistory } from "../../api/complaint";
import { ComplaintStatusDTO } from "../../api/models";
import { createSearchParams, useNavigate } from "react-router-dom";

const ComplaintView = (props: ComplaintStatusDTO) => {
    const navigateTo = useNavigate();

    const navigateToDetailPage = () => {
        navigateTo({
            pathname: "/complaint/status",
            search: createSearchParams({
                complaintId: props.id,
            }).toString(),
        });
    };

    return (
        <div onClick={navigateToDetailPage} className="complaint-view">
            <div className="row">
                <div className="col-md-3">
                    <center>
                        <img
                            height={100}
                            src={props.photo_url}
                            alt={props.text}
                        />
                    </center>
                </div>
                <div className="col-md-7">
                    <p>{props.text}</p>
                    <p>{props.created_at}</p>
                </div>
            </div>
        </div>
    );
};

export const ComplaintHistory = () => {
    const [complaints, setComplaints] = useState<
        ComplaintStatusDTO[] | undefined
    >(undefined);
    useEffect(() => {
        const fetchUserHistory = async () => {
            const response = await fetchHistory();
            setComplaints(response);
        };

        fetchUserHistory();
    }, []);

    return (
        <div className="complaint-history">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="complaint-history-title">
                            Complaint History
                        </h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="complaint-history-tagline">
                            Check all your previously made complaints here
                        </p>
                    </div>
                </div>
                <br />
                {complaints?.map((item, index) => {
                    return <ComplaintView key={index} {...item} />;
                })}
            </div>
        </div>
    );
};
