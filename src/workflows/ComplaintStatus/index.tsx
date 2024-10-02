import { useEffect, useState } from "react";
import "./index.css";
import { fetchHistoryDetail } from "../../api/complaint";
import { useSearchParams } from "react-router-dom";
import { ComplaintStatusDTO } from "../../api/models";

interface Props {
    data: ComplaintStatusDTO;
}

const ComplaintDetail = ({ data }: Props) => {
    const openGoogleMapsLink = () => {
        const mapsUrl = `https://maps.google.com/?q=${data.latitude},${data.longitude}`;
        window.open(mapsUrl);
    };

    return (
        <div className="row">
            <div className="col-md-4">
                <img src={data.photo_url} alt="" className="img-responsive" />
            </div>
            <div className="col-md-8">
                <p>{data.created_at}</p>
                <p>{data.text}</p>
                <p onClick={openGoogleMapsLink}>
                    Reported at - {data.latitude}, {data.longitude}
                </p>
            </div>
        </div>
    );
};

export const ComplaintStatus = () => {
    const [searchParams] = useSearchParams();
    const [details, updateDetails] = useState<ComplaintStatusDTO | undefined>(
        undefined
    );
    const complaintId = searchParams.get("complaintId");
    useEffect(() => {
        const getComplaintDetail = async () => {
            console.info(complaintId);
            if (complaintId) {
                const result = await fetchHistoryDetail(complaintId);
                updateDetails(result);
            }
        };

        getComplaintDetail();
    }, [complaintId]);

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
                <br />
                <br />
                <br />
                {details ? <ComplaintDetail data={details} /> : <></>}
            </div>
        </div>
    );
};
