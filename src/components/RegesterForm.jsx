import InputTextField from './InputTextField';

const RegisterForm = ({ mode }) => {
    return (
        <div className='form-group--register'>
            <InputTextField 
                id="fullname"
                type="text"
                label="Full Name"
                disabled={mode === 'login'}
            />

            <InputTextField 
                id="email"
                type="text"
                label="Email Address"
                disabled={mode === 'login'}
            />

            <InputTextField 
                id="createpassword"
                type="password"
                label="Password"
                disabled={mode === 'login'}
            />

            <InputTextField 
                id="repeatpassword"
                type="password"
                label="Repeat Password"
                disabled={mode === 'login'}
            />
        </div>
    )
}

export default RegisterForm;