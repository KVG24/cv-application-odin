export default function InputEducationInfo({
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
