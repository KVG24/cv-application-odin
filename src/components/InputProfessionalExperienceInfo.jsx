export default function InputProfessionalExperienceInfo({
    workplace,
    onWorkplaceNameChange,
    onWorkplacePositionChange,
    onWorkplaceStartChange,
    onWorkplaceEndChange,
    onAddWorkplace,
}) {
    return (
        <div className="input-prof-experience-info do-not-print">
            <h2>Professional Experience</h2>
            <div className="input-prof-exp-flex">
                <input
                    type="text"
                    name="workplace-name"
                    placeholder="Workplace name"
                    value={workplace.name}
                    onChange={onWorkplaceNameChange}
                />

                <input
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={workplace.position}
                    onChange={onWorkplacePositionChange}
                />
            </div>
            <div className="input-work-period">
                <label>
                    From:{" "}
                    <input
                        type="date"
                        name="job-start-date"
                        value={workplace.start}
                        onChange={onWorkplaceStartChange}
                    />
                </label>
                <label>
                    To:{" "}
                    <input
                        type="date"
                        name="job-end-date"
                        value={workplace.end}
                        onChange={onWorkplaceEndChange}
                    />
                </label>
                <div className="tooltip">
                    ❔
                    <span className="tooltip-text">
                        Skip end date if ongoing
                    </span>
                </div>
            </div>
            <button type="button" onClick={onAddWorkplace}>
                Add Workplace
            </button>
        </div>
    );
}
