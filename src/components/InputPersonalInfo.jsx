export default function InputPersonalInfo({
    onNameChange,
    onEmailChange,
    onPhoneChange,
    onAddressChange,
}) {
    return (
        <div className="input-personal-info do-not-print">
            <h2>Personal information</h2>
            <label>
                <span>Full name:</span>{" "}
                <input
                    type="text"
                    name="name"
                    autoComplete="on"
                    onChange={onNameChange}
                />
            </label>
            <label>
                <span>Email:</span>{" "}
                <input
                    type="email"
                    name="email"
                    autoComplete="on"
                    onChange={onEmailChange}
                />
            </label>
            <label>
                <span>Phone number:</span>{" "}
                <input
                    type="tel"
                    name="phone"
                    autoComplete="on"
                    onChange={onPhoneChange}
                />
            </label>
            <label>
                <span>Address:</span>{" "}
                <input
                    type="text"
                    name="address"
                    autoComplete="on"
                    onChange={onAddressChange}
                />
            </label>
        </div>
    );
}
