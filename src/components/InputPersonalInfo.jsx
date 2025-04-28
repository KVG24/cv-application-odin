export default function InputPersonalInfo({
    onNameChange,
    onEmailChange,
    onPhoneChange,
    onAddressChange,
}) {
    return (
        <div className="input-personal-info do-not-print">
            <h2>Personal information</h2>

            <input
                type="text"
                name="name"
                autoComplete="on"
                placeholder="Full name"
                onChange={onNameChange}
            />

            <input
                type="email"
                name="email"
                autoComplete="on"
                placeholder="Email"
                onChange={onEmailChange}
            />

            <input
                type="tel"
                name="phone"
                autoComplete="on"
                placeholder="Phone"
                onChange={onPhoneChange}
            />

            <input
                type="text"
                name="address"
                autoComplete="on"
                placeholder="Address"
                onChange={onAddressChange}
            />
        </div>
    );
}
