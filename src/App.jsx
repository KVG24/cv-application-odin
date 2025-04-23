import { useState } from "react";
import "./App.css";

function InputPersonalInfo({ onNameChange, onPhoneChange, onAddressChange }) {
    return (
        <div className="input-personal-info">
            <h2>Personal information</h2>
            <label>
                <span>Full name:</span>{" "}
                <input type="text" onChange={onNameChange} />
            </label>
            <label>
                <span>Phone number:</span>{" "}
                <input type="tel" onChange={onPhoneChange} />
            </label>
            <label>
                <span>Address:</span>{" "}
                <input type="text" onChange={onAddressChange} />
            </label>
        </div>
    );
}

function InputEducationInfo({
    onSchoolChange,
    onUniversityChange,
    onAdditionalInfoChange,
}) {
    return (
        <div className="input-education-info">
            <h2>Education</h2>
            <div className="school">
                <label>
                    <span>School name:</span>{" "}
                    <input type="text" onChange={onSchoolChange} />
                </label>
                <label>
                    From:
                    <input type="date"></input>
                </label>
                <label>
                    To:
                    <input type="date"></input>
                </label>
            </div>
            <div className="university">
                <label>
                    <span>University name:</span>{" "}
                    <input type="text" onChange={onUniversityChange} />
                </label>
                <label>
                    From:
                    <input type="date"></input>
                </label>
                <label>
                    To:
                    <input type="date"></input>
                </label>
            </div>
            <label>
                <span>Additional information:</span>{" "}
                <textarea
                    rows="3"
                    cols="50"
                    onChange={onAdditionalInfoChange}
                />
            </label>
        </div>
    );
}

function Resume({ name, phone, address }) {
    return (
        <section className="resume">
            <div className="resume-personal-info">
                <h1>{name}</h1>
                <hr />
                <div className="phone-address-container">
                    <span>
                        {"📞"}
                        {phone}
                    </span>
                    <span>
                        {"🏠"}
                        {address}
                    </span>
                </div>
            </div>
        </section>
    );
}

function ResumeBuilder() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        phone: "",
        address: "",
    });

    function handleNameChange(e) {
        const newName = e.target.value;
        setPersonalInfo({ ...personalInfo, name: newName });
    }

    function handlePhoneChange(e) {
        const newPhone = e.target.value;
        setPersonalInfo({ ...personalInfo, phone: newPhone });
    }

    function handleAddressChange(e) {
        const newAddress = e.target.value;
        setPersonalInfo({ ...personalInfo, address: newAddress });
    }

    return (
        <div className="resume-builder">
            <section className="input-info-cards">
                <InputPersonalInfo
                    onNameChange={handleNameChange}
                    onPhoneChange={handlePhoneChange}
                    onAddressChange={handleAddressChange}
                />
                <InputEducationInfo />
            </section>
            <Resume
                name={personalInfo.name}
                phone={personalInfo.phone}
                address={personalInfo.address}
            />
        </div>
    );
}

export default function App() {
    return <ResumeBuilder />;
}
