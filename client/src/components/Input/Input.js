function Input({ type, name, id, value, placeholder, onChange, err, required, classNames}) {
    return (
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            placeholder={placeholder}
            className={`primary-border-focus border w-100 ${!classNames && "px-2 py-2 mb-3"} ${err?.message && "border-accent"} ${classNames}`}
            onChange={(e) => onChange(e.target)}
            required={required}
        />
    )
}

export default Input