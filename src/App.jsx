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
                        <input
                            type="date"
                            onChange={onSchoolStartChange}
                        ></input>
                    </label>
                    <label>
                        To:{" "}
                        <input type="date" onChange={onSchoolEndChange}></input>
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
                        <input
                            type="date"
                            onChange={onUniversityStartChange}
                        ></input>
                    </label>
                    <label>
                        To:{" "}
                        <input
                            type="date"
                            onChange={onUniversityEndChange}
                        ></input>
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
        </section>
    );
}

function ResumeBuilder() {
    const [personalInfo, setPersonalInfo] = useState({
        name: "Vadym",
        phone: "+380986431254",
        address: "Ukraine, Kryvyi Rih",
    });
    const [educationInfo, setEducationInfo] = useState({
        school: "KZSH №23",
        schoolStart: "2001-01-09",
        schoolEnd: "2013-05-31",
        university: "KR National University",
        universityStart: "2013-01-09",
        universityEnd: "2014-05-31",
        additionInfo:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam molestiae natus, neque, laborum mollitia delectus sequi ab explicabo corporis facere quam est rerum, illum eum impedit similique provident sapiente nostrum consequatur obcaecati dolor quos hic quidem vero! Excepturi, aspernatur a. Provident ut, quasi veritatis nesciunt libero quas harum quibusdam asperiores.",
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

    function handleSchoolChange(e) {
        const newSchool = e.target.value;
        setEducationInfo({ ...educationInfo, school: newSchool });
    }

    function handleSchoolStartChange(e) {
        const newSchoolStart = e.target.value;
        setEducationInfo({ ...educationInfo, schoolStart: newSchoolStart });
    }

    function handleSchoolEndChange(e) {
        const newSchoolEnd = e.target.value;
        setEducationInfo({ ...educationInfo, schoolEnd: newSchoolEnd });
    }

    function handleUniversityChange(e) {
        const newUniversity = e.target.value;
        setEducationInfo({ ...educationInfo, university: newUniversity });
    }

    function handleUniversityStartChange(e) {
        const newUniversityStart = e.target.value;
        setEducationInfo({
            ...educationInfo,
            universityStart: newUniversityStart,
        });
    }

    function handleUniversityEndChange(e) {
        const newUniversityEnd = e.target.value;
        setEducationInfo({ ...educationInfo, universityEnd: newUniversityEnd });
    }

    function handleAdditionalInfo(e) {
        const newAdditionInfo = e.target.value;
        setEducationInfo({ ...educationInfo, additionInfo: newAdditionInfo });
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
            />
        </div>
    );
}

export default function App() {
    return <ResumeBuilder />;
}
