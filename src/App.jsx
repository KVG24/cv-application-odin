import { useState } from "react";
import "./App.css";
import InputPersonalInfo from "./components/InputPersonalInfo";
import InputEducationInfo from "./components/InputEducationInfo";
import InputProfessionalExperienceInfo from "./components/InputProfessionalExperienceInfo";
import RenderResume from "./components/RenderResume";

function ResumeBuilder() {
    // Personal Info Section
    const [personalInfo, setPersonalInfo] = useState({
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "+8888888888",
        address: "Planet Earth",
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
    const [hoveredEducationId, setHoveredEducationId] = useState(null);
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

    function addPlaceOfEducation() {
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

    function deletePlaceOfEducation() {
        const newPOEArray = placesOfEducation.filter(
            (place) => place.id !== hoveredEducationId
        );
        setPlacesOfEducation(newPOEArray);
    }

    // Professional Experience section
    const [workplaces, setWorkplaces] = useState([]);
    const [hoveredWorkplaceId, setHoveredWorkplaceId] = useState(null);
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

    function addWorkplace() {
        setWorkplaces((prevWorkplaces) => [
            ...prevWorkplaces,
            { ...newWorkplace, id: newWorkplaceId },
        ]);
        setNewWorkplaceId((prevId) => prevId + 1);
        setNewWorkplace({ name: "", position: "", start: "", end: "", id: "" });
    }

    function deleteWorkplace() {
        const newWorkplacesArray = workplaces.filter(
            (place) => place.id !== hoveredWorkplaceId
        );
        setWorkplaces(newWorkplacesArray);
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
                    onAddPlaceOfEducation={addPlaceOfEducation}
                    placeOfEducation={newPlaceOfEducation}
                />
                <InputProfessionalExperienceInfo
                    onWorkplaceNameChange={handleWorkplaceNameChange}
                    onWorkplacePositionChange={handleWorkplacePositionChange}
                    onWorkplaceStartChange={handleWorkplaceStartChange}
                    onWorkplaceEndChange={handleWorkplaceEndChange}
                    onAddWorkplace={addWorkplace}
                    workplace={newWorkplace}
                />
            </section>
            <RenderResume
                name={personalInfo.name}
                email={personalInfo.email}
                phone={personalInfo.phone}
                address={personalInfo.address}
                placesOfEducation={placesOfEducation}
                hoveredEducationId={hoveredEducationId}
                setHoveredEducationId={setHoveredEducationId}
                deletePlaceOfEducation={deletePlaceOfEducation}
                workplaces={workplaces}
                hoveredWorkplaceId={hoveredWorkplaceId}
                setHoveredWorkplaceId={setHoveredWorkplaceId}
                deleteWorkplace={deleteWorkplace}
            />
        </div>
    );
}

export default function App() {
    return <ResumeBuilder />;
}
