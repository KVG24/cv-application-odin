export default function InputEducationInfo({
    placeOfEducation,
    onPlaceOfEducationNameChange,
    onDegreeChange,
    onStudyStartChange,
    onStudyEndChange,
    onAddPlaceOfEducation,
}) {
    return (
        <div className="input-education-info">
            <h2>Education</h2>
            <div className="input-education-flex">
                <label className="input-education">
                    Place of Education:{" "}
                    <input
                        type="text"
                        value={placeOfEducation.name}
                        onChange={onPlaceOfEducationNameChange}
                    />
                </label>
                <label className="input-degree">
                    Degree:{" "}
                    <input
                        type="text"
                        value={placeOfEducation.degree}
                        onChange={onDegreeChange}
                    />
                </label>
            </div>
            <div className="input-study-period">
                <label>
                    From:{" "}
                    <input
                        type="date"
                        value={placeOfEducation.start}
                        onChange={onStudyStartChange}
                    />
                </label>
                <label>
                    To:{" "}
                    <input
                        type="date"
                        value={placeOfEducation.end}
                        onChange={onStudyEndChange}
                    />
                </label>
            </div>
            <button type="button" onClick={onAddPlaceOfEducation}>
                Add Place of Education
            </button>
        </div>
    );
}
