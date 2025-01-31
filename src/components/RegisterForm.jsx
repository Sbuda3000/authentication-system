import { FormProvider, useForm } from 'react-hook-form';
import FormValidation from '../FormValidation';
import InputTextField from './InputTextField';

const RegisterForm = ({ mode }) => {
    const methods = useForm();

    return (
        <FormProvider {...methods}>
                <div className={'form-group--register' + (mode === 'login' ? ' hide-content' : '')}>
                    <InputTextField 
                        id="fullname"
                        type="text"
                        label="Full Name"
                        validation={ FormValidation.Fullame }
                        disabled={mode === 'login'}
                        mode={mode}
                    />

                    <InputTextField 
                        id="registerEmail"
                        type="text"
                        label="Email Address"
                        validation={ FormValidation.Email }
                        disabled={mode === 'login'}
                        mode={mode}
                    />

                    <InputTextField 
                        id="createpassword"
                        type="password"
                        label="Password"
                        validation={ FormValidation.Password }
                        disabled={mode === 'login'}
                        mode={mode}
                    />

                    <InputTextField 
                        id="repeatpassword"
                        type="password"
                        label="Repeat Password"
                        validation={ FormValidation.Password }
                        disabled={mode === 'login'}
                        mode={mode}
                    />
                </div>
        </FormProvider>
    )
}

export default RegisterForm;