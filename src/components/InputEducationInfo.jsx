export default function InputEducationInfo({
    placeOfEducation,
    onPlaceOfEducationNameChange,
    onDegreeChange,
    onStudyStartChange,
    onStudyEndChange,
    onAddPlaceOfEducation,
}) {
    return (
        <div className="input-education-info do-not-print">
            <h2>Education</h2>
            <div className="input-education-flex">
                <label className="input-education">
                    Place of Education:{" "}
                    <input
                        type="text"
                        name="place-of-education"
                        value={placeOfEducation.name}
                        onChange={onPlaceOfEducationNameChange}
                    />
                </label>
                <label className="input-degree">
                    Degree:{" "}
                    <input
                        type="text"
                        name="degree"
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
                        name="education-start-date"
                        value={placeOfEducation.start}
                        onChange={onStudyStartChange}
                    />
                </label>
                <label>
                    To:{" "}
                    <input
                        type="date"
                        name="education-end-date"
                        value={placeOfEducation.end}
                        onChange={onStudyEndChange}
                    />
                </label>
                <div className="tooltip">
                    ❔
                    <span className="tooltip-text">
                        Skip end date if ongoing
                    </span>
                </div>
            </div>
            <button type="button" onClick={onAddPlaceOfEducation}>
                Add Place of Education
            </button>
        </div>
    );
}
