import { useState } from "react";
import "./index.css";
import { createSearchParams, useNavigate } from "react-router-dom";

export const ComplaintSearch = () => {
    const navigateTo = useNavigate();
    const [complaintId, setComplaintId] = useState<string | undefined>(
        undefined
    );

    const fetchComplaintID = () => {
        if (complaintId) {
            if (complaintId.length !== 0) {
                navigateTo({
                    pathname: "/complaint/status",
                    search: createSearchParams({
                        complaintId: complaintId,
                    }).toString(),
                });
            }
        }
    };

    return (
        <div className="complaint-status">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="complaint-status-title">
                            Complaint Status
                        </h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="complaint-status-tagline">
                            Check the status of your complaint here
                        </p>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <label htmlFor="complaint-id">Complaint ID:</label>
                            <input
                                onChange={(e) => setComplaintId(e.target.value)}
                                type="text"
                                className="form-control"
                                id="complaint-id"
                            />
                        </div>
                        <button
                            onClick={() => fetchComplaintID()}
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
