import { useState } from "react";
import "./App.css";
import InputPersonalInfo from "./components/InputPersonalInfo";
import InputEducationInfo from "./components/InputEducationInfo";
import InputProfessionalExperienceInfo from "./components/InputProfessionalExperienceInfo";
import RenderResume from "./components/RenderResume";

function ResumeBuilder() {
    // Personal Info Section
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });

    function handleNameChange(e) {
        const name = e.target.value;
        setPersonalInfo({ ...personalInfo, name });
    }

    function handleEmailChange(e) {
        const email = e.target.value;
        setPersonalInfo({ ...personalInfo, email });
    }

    function handlePhoneChange(e) {
        const phone = e.target.value;
        setPersonalInfo({ ...personalInfo, phone });
    }

    function handleAddressChange(e) {
        const address = e.target.value;
        setPersonalInfo({ ...personalInfo, address });
    }

    // Education Section
    const [placesOfEducation, setPlacesOfEducation] = useState([]);

    const [newPlaceOfEducation, setNewPlaceOfEducation] = useState({
        name: "",
        degree: "",
        start: "",
        end: "",
        id: "",
    });

    const [newPlaceOfEducationId, setNewPlaceOfEducationId] = useState(0);

    function handlePlaceOfEducationNameChange(e) {
        const name = e.target.value;
        setNewPlaceOfEducation((prevPlace) => ({ ...prevPlace, name }));
    }

    function handleDegreeChange(e) {
        const degree = e.target.value;
        setNewPlaceOfEducation((prevPlace) => ({ ...prevPlace, degree }));
    }

    function handleStudyStartChange(e) {
        const start = e.target.value;
        setNewPlaceOfEducation((prevPlace) => ({ ...prevPlace, start }));
    }

    function handleStudyEndChange(e) {
        const end = e.target.value;
        setNewPlaceOfEducation((prevPlace) => ({ ...prevPlace, end }));
    }

    function handleAddPlaceOfEducation() {
        setPlacesOfEducation((prevPlaces) => [
            ...prevPlaces,
            { ...newPlaceOfEducation, id: newPlaceOfEducationId },
        ]);
        setNewPlaceOfEducationId((prevId) => prevId + 1);
        setNewPlaceOfEducation({
            name: "",
            degree: "",
            start: "",
            end: "",
            id: "",
        });
    }

    // Professional Experience section
    const [workplaces, setWorkplaces] = useState([]);

    const [newWorkplace, setNewWorkplace] = useState({
        name: "",
        position: "",
        start: "",
        end: "",
        id: "",
    });

    const [newWorkplaceId, setNewWorkplaceId] = useState(0);

    function handleWorkplaceNameChange(e) {
        const name = e.target.value;
        setNewWorkplace((prevPlace) => ({ ...prevPlace, name }));
    }

    function handleWorkplacePositionChange(e) {
        const position = e.target.value;
        setNewWorkplace((prevPlace) => ({ ...prevPlace, position }));
    }

    function handleWorkplaceStartChange(e) {
        const start = e.target.value;
        setNewWorkplace((prevPlace) => ({ ...prevPlace, start }));
    }

    function handleWorkplaceEndChange(e) {
        const end = e.target.value;
        setNewWorkplace((prevPlace) => ({ ...prevPlace, end }));
    }

    function handleAddWorkplace() {
        setWorkplaces((prevWorkplaces) => [
            ...prevWorkplaces,
            { ...newWorkplace, id: newWorkplaceId },
        ]);
        setNewWorkplaceId((prevId) => prevId + 1);
        setNewWorkplace({ name: "", position: "", start: "", end: "", id: "" });
    }

    return (
        <div className="resume-builder">
            <section className="input-info-cards">
                <InputPersonalInfo
                    onNameChange={handleNameChange}
                    onEmailChange={handleEmailChange}
                    onPhoneChange={handlePhoneChange}
                    onAddressChange={handleAddressChange}
                />
                <InputEducationInfo
                    onPlaceOfEducationNameChange={
                        handlePlaceOfEducationNameChange
                    }
                    onDegreeChange={handleDegreeChange}
                    onStudyStartChange={handleStudyStartChange}
                    onStudyEndChange={handleStudyEndChange}
                    onAddPlaceOfEducation={handleAddPlaceOfEducation}
                    placeOfEducation={newPlaceOfEducation}
                />
                <InputProfessionalExperienceInfo
                    onWorkplaceNameChange={handleWorkplaceNameChange}
                    onWorkplacePositionChange={handleWorkplacePositionChange}
                    onWorkplaceStartChange={handleWorkplaceStartChange}
                    onWorkplaceEndChange={handleWorkplaceEndChange}
                    onAddWorkplace={handleAddWorkplace}
                    workplace={newWorkplace}
                />
            </section>
            <RenderResume
                name={personalInfo.name}
                email={personalInfo.email}
                phone={personalInfo.phone}
                address={personalInfo.address}
                workplaces={workplaces}
                placesOfEducation={placesOfEducation}
            />
        </div>
    );
}

export default function App() {
    return <ResumeBuilder />;
}
