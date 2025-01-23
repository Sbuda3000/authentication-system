import InputTextField from "./InputTextField";
import RegisterForm from "./RegesterForm";

const LoginForm = ({ mode }) => {
    return (
        <form>
            <div className="input-wrapper">
                <div className="form-group--login">
                    <InputTextField 
                        id="username"
                        type="text"
                        label="User name"
                        disabled={mode === 'register'}
                    />

                    <InputTextField 
                        id="password"
                        type="text"
                        label="Password"
                        disabled={mode === 'register'}
                    />
                </div>

                <RegisterForm mode={mode} />
            </div>

            <button className="button button-primary full-width">
                {mode === 'login' ? 'Login' : 'Register'}
            </button>
        </form>
    );
}

export default LoginForm;