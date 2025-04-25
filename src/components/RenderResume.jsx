export default function RenderResume({
    name,
    email,
    phone,
    address,
    workplaces,
    placesOfEducation,
}) {
    return (
        <section className="resume">
            <div className="resume-personal-info">
                <h1>{name}</h1>
                <hr />
                <div className="resume-phone-address-container">
                    <span>
                        {"📨"}
                        {email}
                    </span>
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
                <h2>Education:</h2>{" "}
                {placesOfEducation.map((placeOfEducation) => (
                    <div className="resume-place-of-education">
                        <p className="resume-place-of-education-name">
                            {placeOfEducation.name}
                        </p>
                        <p className="resume-degree">
                            {placeOfEducation.degree}
                        </p>
                        <p>
                            {placeOfEducation.start} -- {placeOfEducation.end}
                        </p>
                    </div>
                ))}
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
