import { useState, SyntheticEvent } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginWithGoogle, login } from '../../../config';
import { ArtworkContext } from '../../../core/context/artworks.context';
import './login.scss';
export default function Login() {
    const { handleUser } = useContext(ArtworkContext);
    const navigate = useNavigate();
    const initialFormData = {
        email: '',
        password: '',
    };
    const [formData, setFormData] = useState(initialFormData);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        const userCredentials = await login(formData.email, formData.password);
        handleUser(userCredentials);
        navigate('/work')
    };

    const handleLogin = async () => {
        const userCredentials = await loginWithGoogle();
        handleUser(userCredentials);
        navigate('/contact');
    };

    return (
        <>
            <section className="login">
                <p>
                    Before proceeding, please register quickly, it only takes
                    one click!
                </p>
                <h2>Log in</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onInput={handleInput}
                            required
                        />
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Password"
                            value={formData.password}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="div__btn">
                        <button type="submit">Submit</button>
                        <span>or</span>
                    </div>
                </form>
                <button onClick={handleLogin}>Sign in with Google</button>
            </section>
        </>
    );
}