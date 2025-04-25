export default function InputProfessionalExperienceInfo({
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
