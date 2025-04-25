import { useState } from "react";
import "./App.css";
import InputPersonalInfo from "./components/InputPersonalInfo";
import InputEducationInfo from "./components/InputEducationInfo";
import InputProfessionalExperienceInfo from "./components/InputProfessionalExperienceInfo";
import Resume from "./components/RenderResume";

function ResumeBuilder() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "",
        phone: "",
        address: "",
    });

    const [educationInfo, setEducationInfo] = useState({
        school: "",
        schoolStart: "",
        schoolEnd: "",
        university: "",
        universityStart: "",
        universityEnd: "",
        additionInfo: "",
    });

    const [workplaces, setWorkplaces] = useState([]);

    const [newWorkplace, setNewWorkplace] = useState({
        name: "",
        position: "",
        start: "",
        end: "",
        id: "",
    });

    const [newId, setNewId] = useState(0);

    function handleNameChange(e) {
        const name = e.target.value;
        setPersonalInfo({ ...personalInfo, name });
    }

    function handlePhoneChange(e) {
        const phone = e.target.value;
        setPersonalInfo({ ...personalInfo, phone });
    }

    function handleAddressChange(e) {
        const address = e.target.value;
        setPersonalInfo({ ...personalInfo, address });
    }

    function handleSchoolChange(e) {
        const school = e.target.value;
        setEducationInfo({ ...educationInfo, school });
    }

    function handleSchoolStartChange(e) {
        const schoolStart = e.target.value;
        setEducationInfo({ ...educationInfo, schoolStart });
    }

    function handleSchoolEndChange(e) {
        const schoolEnd = e.target.value;
        setEducationInfo({ ...educationInfo, schoolEnd });
    }

    function handleUniversityChange(e) {
        const university = e.target.value;
        setEducationInfo({ ...educationInfo, university });
    }

    function handleUniversityStartChange(e) {
        const universityStart = e.target.value;
        setEducationInfo({
            ...educationInfo,
            universityStart,
        });
    }

    function handleUniversityEndChange(e) {
        const universityEnd = e.target.value;
        setEducationInfo({ ...educationInfo, universityEnd });
    }

    function handleAdditionalInfo(e) {
        const additionInfo = e.target.value;
        setEducationInfo({ ...educationInfo, additionInfo });
    }

    function handleWorkplaceNameChange(e) {
        const name = e.target.value;
        setNewWorkplace((prevWorkplace) => ({ ...prevWorkplace, name }));
    }

    function handleWorkplacePositionChange(e) {
        const position = e.target.value;
        setNewWorkplace((prevWorkplace) => ({ ...prevWorkplace, position }));
    }

    function handleWorkplaceStartChange(e) {
        const start = e.target.value;
        setNewWorkplace((prevWorkplace) => ({ ...prevWorkplace, start }));
    }

    function handleWorkplaceEndChange(e) {
        const end = e.target.value;
        setNewWorkplace((prevWorkplace) => ({ ...prevWorkplace, end }));
    }

    function handleAddWorkplace() {
        setWorkplaces((prevWorkplaces) => [
            ...prevWorkplaces,
            { ...newWorkplace, id: newId },
        ]);
        setNewId((prevId) => prevId + 1);
        setNewWorkplace({ name: "", position: "", start: "", end: "", id: "" });
    }

    return (
        <div className="resume-builder">
            <section className="input-info-cards">
                <InputPersonalInfo
                    onNameChange={handleNameChange}
                    onPhoneChange={handlePhoneChange}
                    onAddressChange={handleAddressChange}
                />
                <InputEducationInfo
                    onSchoolChange={handleSchoolChange}
                    onSchoolStartChange={handleSchoolStartChange}
                    onSchoolEndChange={handleSchoolEndChange}
                    onUniversityChange={handleUniversityChange}
                    onUniversityStartChange={handleUniversityStartChange}
                    onUniversityEndChange={handleUniversityEndChange}
                    onAdditionalInfoChange={handleAdditionalInfo}
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
            <Resume
                name={personalInfo.name}
                phone={personalInfo.phone}
                address={personalInfo.address}
                school={educationInfo.school}
                schoolStart={educationInfo.schoolStart}
                schoolEnd={educationInfo.schoolEnd}
                university={educationInfo.university}
                universityStart={educationInfo.universityStart}
                universityEnd={educationInfo.universityEnd}
                additionInfo={educationInfo.additionInfo}
                workplaces={workplaces}
            />
        </div>
    );
}

export default function App() {
    return <ResumeBuilder />;
}
