import { useState } from "react";
import LoginForm from "./LoginForm";

const AuthComponent = ({ mode: initialMode }) => {
    const [mode, setMode] = useState(initialMode);

    const toggleMode = () => {
        var newMode = mode === 'login' ? 'register' : 'login';
        setMode(newMode);
    };

    return (
        <main>
            <div className={`wrapper wrapper--is-${mode}`}></div>
            <section className={`form-block form-block--is-${mode}`}>
                <header className="header">
                    <h1>{ mode === 'login' ? 'Welcome back!' : 'Register' }</h1>
                    <div className="toggle-block row">
                        <span>{ mode === 'login' ? 'Don\'t' : 'Already' } have an account? Click here &#8594;</span>
                        <div className="toggle">
                            <input 
                                id="toggler"
                                type="checkbox"
                                onClick={toggleMode}
                            />
                            <label htmlFor="toggler"></label> 
                        </div>
                    </div>
                </header>

                <LoginForm mode={mode} />
            </section>
        </main>
    );
}

export default AuthComponent;