export default function InputPersonalInfo({
    onNameChange,
    onEmailChange,
    onPhoneChange,
    onAddressChange,
}) {
    return (
        <div className="input-personal-info">
            <h2>Personal information</h2>
            <label>
                <span>Full name:</span>{" "}
                <input type="text" onChange={onNameChange} />
            </label>
            <label>
                <span>Email:</span>{" "}
                <input type="email" onChange={onEmailChange} />
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
