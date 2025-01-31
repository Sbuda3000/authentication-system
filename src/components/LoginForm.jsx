import { FormProvider, useForm } from "react-hook-form";
import InputTextField from "./InputTextField";
import RegisterForm from "./RegisterForm";

const LoginForm = ({ mode }) => {
    const methods = useForm();
    
    return (
        <FormProvider {...methods}>
            <form>
                <div className="input-wrapper">
                    <div className={"form-group--login" + (mode === 'register' ? ' hide-content' : '')}>
                        <InputTextField 
                            id="loginEmail"
                            type="email"
                            label="Email Address"
                            validation={{ required: "Email address is required." } }                           
                            disabled={mode === 'register'}
                            mode={mode}
                        />

                        <InputTextField 
                            id="password"
                            type="text"
                            label="Password"
                            validation={{ required: "Password is required." } }                           
                            disabled={mode === 'register'}
                            mode={mode}
                        />
                    </div>

                    <RegisterForm mode={mode} />
                </div>

                <button type="submit" className="button button-primary full-width">
                    {mode === 'login' ? 'Login' : 'Register'}
                </button>
            </form>
        </FormProvider>
    );
}

export default LoginForm;