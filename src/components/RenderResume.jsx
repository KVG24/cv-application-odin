export default function RenderResume({
    name,
    email,
    phone,
    address,
    placesOfEducation,
    setHoveredEducationId,
    deletePlaceOfEducation,
    workplaces,
    setHoveredWorkplaceId,
    deleteWorkplace,
}) {
    return (
        <section className="resume">
            <div className="resume-personal-info">
                <h1>{name}</h1>
                <hr />
                <div className="resume-info-container">
                    <span>📨 {email}</span>
                    <span>📞 {phone}</span>
                    <span>🏠 {address}</span>
                </div>
            </div>

            <div className="resume-education-info">
                <h2 className="resume-category-name">Education:</h2>
                {placesOfEducation.map((place) => (
                    <div
                        key={place.id}
                        className="resume-place-of-education"
                        onMouseEnter={() => setHoveredEducationId(place.id)}
                        onMouseLeave={() => setHoveredEducationId(null)}
                    >
                        <p className="resume-place-of-education-name">
                            {place.name}
                        </p>
                        <p className="resume-degree">{place.degree}</p>
                        <p>
                            {place.start} - {place.end ? place.end : "Present"}
                        </p>

                        <button type="button" onClick={deletePlaceOfEducation}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            <div className="resume-prof-experience-info">
                <h2 className="resume-category-name">
                    Professional Experience:
                </h2>
                {workplaces.map((workplace) => (
                    <div
                        key={workplace.id}
                        className="resume-workplace"
                        onMouseEnter={() => setHoveredWorkplaceId(workplace.id)}
                        onMouseLeave={() => setHoveredWorkplaceId(null)}
                    >
                        <p className="resume-workplace-name">
                            {workplace.name}
                        </p>
                        <p className="resume-workplace-position">
                            {workplace.position}
                        </p>
                        <p>
                            {workplace.start} -{" "}
                            {workplace.end ? workplace.end : "Present"}
                        </p>

                        <button type="button" onClick={deleteWorkplace}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
