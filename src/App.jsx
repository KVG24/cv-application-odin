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
    onSchoolStartChange,
    onSchoolEndChange,
    onUniversityChange,
    onUniversityStartChange,
    onUniversityEndChange,
    onAdditionalInfoChange,
}) {
    return (
        <div className="input-education-info">
            <h2>Education</h2>
            <div className="input-school">
                <label>
                    <span>School name:</span>{" "}
                    <input type="text" onChange={onSchoolChange} />
                </label>
                <div className="input-study-period">
                    <label>
                        From:{" "}
                        <input type="date" onChange={onSchoolStartChange} />
                    </label>
                    <label>
                        To: <input type="date" onChange={onSchoolEndChange} />
                    </label>
                </div>
            </div>
            <div className="input-university">
                <label>
                    <span>University name:</span>{" "}
                    <input type="text" onChange={onUniversityChange} />
                </label>
                <div className="input-study-period">
                    <label>
                        From:{" "}
                        <input type="date" onChange={onUniversityStartChange} />
                    </label>
                    <label>
                        To:{" "}
                        <input type="date" onChange={onUniversityEndChange} />
                    </label>
                </div>
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

function InputProfessionalExperienceInfo({
    workplace,
    onWorkplaceNameChange,
    onWorkplacePositionChange,
    onWorkplaceStartChange,
    onWorkplaceEndChange,
    onAddWorkplace,
}) {
    return (
        <div className="input-prof-experience-info">
            <h2>Professional Experience</h2>
            <label className="input-prof-exp">
                Workplace name:{" "}
                <input
                    type="text"
                    value={workplace.name}
                    onChange={onWorkplaceNameChange}
                />
            </label>
            <label className="input-prof-position">
                Position:{" "}
                <input
                    type="text"
                    value={workplace.position}
                    onChange={onWorkplacePositionChange}
                />
            </label>
            <div className="input-work-period">
                <label>
                    From:{" "}
                    <input
                        type="date"
                        value={workplace.start}
                        onChange={onWorkplaceStartChange}
                    />
                </label>
                <label>
                    To:{" "}
                    <input
                        type="date"
                        value={workplace.end}
                        onChange={onWorkplaceEndChange}
                    />
                </label>
            </div>
            <button type="button" onClick={onAddWorkplace}>
                Add Workplace
            </button>
        </div>
    );
}

function Resume({
    name,
    phone,
    address,
    school,
    schoolStart,
    schoolEnd,
    university,
    universityStart,
    universityEnd,
    additionInfo,
    workplaces,
}) {
    return (
        <section className="resume">
            <div className="resume-personal-info">
                <h1>{name}</h1>
                <hr />
                <div className="resume-phone-address-container">
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
            <div className="resume-education-info">
                <div className="resume-school">
                    <h2>School:</h2>{" "}
                    <p className="resume-ed-place-name">{school}</p>
                    <p>
                        {schoolStart} -- {schoolEnd}
                    </p>
                </div>
                <div className="resume-university">
                    <h2>University:</h2>{" "}
                    <p className="resume-ed-place-name">{university}</p>
                    <p>
                        {universityStart} -- {universityEnd}
                    </p>
                </div>
                <div className="resume-additional-info">
                    <h2>Addition Info:</h2> <p>{additionInfo}</p>
                </div>
            </div>
            <div className="resume-prof-experience-info">
                <h2>Professional Experience:</h2>{" "}
                {workplaces.map((workplace) => (
                    <div key={workplace.id} className="resume-workplace">
                        <p className="resume-workplace-name">
                            {workplace.name}
                        </p>
                        <p className="resume-workplace-position">
                            {workplace.position}
                        </p>
                        <p>
                            {workplace.start} -- {workplace.end}
                        </p>
                    </div>
                ))}
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
