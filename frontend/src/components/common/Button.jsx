function Button({
    children,
    type = "button",
    onClick,
    disabled = false,
    className = ""
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:bg-gray-400 ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;