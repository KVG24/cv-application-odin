import { useState } from "react";
import "./App.css";

function InputPersonalInfo({ onNameChange, onPhoneChange, onAddressChange }) {
    return (
        <div className="input-personal-info">
            <label htmlFor="name">
                Full name:{" "}
                <input id="name" type="text" onChange={onNameChange} />
            </label>
            <label htmlFor="tel">
                Phone number:{" "}
                <input id="tel" type="tel" onChange={onPhoneChange} />
            </label>
            <label htmlFor="address">
                Address:{" "}
                <input id="address" type="text" onChange={onAddressChange} />
            </label>
        </div>
    );
}

function Resume({ name, phone, address }) {
    return (
        <div className="resume">
            <h1>{name}</h1>
            <hr />
            <p>
                {"📞"}
                {phone} {"🏠"}
                {address}
            </p>
        </div>
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
            <InputPersonalInfo
                onNameChange={handleNameChange}
                onPhoneChange={handlePhoneChange}
                onAddressChange={handleAddressChange}
            />
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
