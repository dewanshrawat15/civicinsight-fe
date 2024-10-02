import { useEffect, useState } from "react";
import "./index.css";
import { registerNewComplaint } from "../../api/complaint";

export const RegisterNewComplaint = () => {
    const [coords, updateCoords] = useState<GeolocationCoordinates | undefined>(
        undefined
    );
    const [complaintText, setComplaintText] = useState("");
    const [imageFile, setImageFile] = useState<File | undefined>(undefined);

    const showPosition = (position: GeolocationPosition) => {
        updateCoords(position.coords);
    };

    useEffect(() => {
        const getUserCoordinates = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            }
        };

        getUserCoordinates();
    }, []);

    const registerComplaint = async () => {
        if (imageFile) {
            if (coords) {
                const formData = new FormData();
                formData.append("image", imageFile);
                formData.append("text", complaintText);
                formData.append("latitude", coords.latitude.toString());
                formData.append("longitude", coords.longitude.toString());
                await registerNewComplaint(formData);
                alert("Complaint registered successfully");
            } else {
                alert("Location permissions are denied");
            }
        } else {
            alert("No image has been selected");
        }
    };

    return (
        <div className="register-complaint">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 text-center">
                        <h3 className="register-complaint-title">Dashboard</h3>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-10 col-md-offset-1 text-center">
                        <p className="register-complaint-tagline">
                            Welcome to our platform, register/view your
                            complaint status in real time
                        </p>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="form-group">
                            <label htmlFor="comment">Complaint:</label>
                            <textarea
                                onChange={(e) =>
                                    setComplaintText(e.target.value)
                                }
                                className="form-control"
                                rows={5}
                                id="comment"
                            />
                        </div>
                        <br />
                        <div className="input-group">
                            <span className="input-group-btn">
                                <span className="btn btn-default btn-file">
                                    Browse...
                                    <input
                                        onChange={(e) => {
                                            if (e.target.files) {
                                                if (e.target.files.length > 0) {
                                                    setImageFile(
                                                        e.target.files[0]
                                                    );
                                                }
                                            }
                                        }}
                                        accept="image/jpeg"
                                        name="image"
                                        type="file"
                                        id="image"
                                    />
                                </span>
                            </span>
                        </div>
                        <br />
                        <button
                            onClick={() => registerComplaint()}
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
