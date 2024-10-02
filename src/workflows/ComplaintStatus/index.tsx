import "./index.css";

export const ComplaintStatus = () => {
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
            </div>
        </div>
    );
};
