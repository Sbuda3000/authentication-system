const FormValidation = {
    Fullame: {
        required: "Full name is required",
        pattern: {
            value: /^[a-zA-Z\s]+$/i,
            message: "Invalid full name"
        }
    },
    Email: {
        required: "Email address is required",
        pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address"
        }
    },
    Password: {
        required: "Password is required",
        minLength: {
            value: 8,
            message: "Password must be at least 8 characters"
        }
    }
}

export default FormValidation;