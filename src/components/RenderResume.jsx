export default function Resume({
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
