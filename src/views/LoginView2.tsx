import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import useAuthInterceptors from '../hooks/useAuthInterceptors';
import { loginAsync } from '../redux/auth/thunks';
import useIsAuth from '../hooks/useIsAuth';

const LoginView = () => {
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const isAuth = useIsAuth();

    if (isAuth) {
        return <Navigate to="feed" />
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync(email, password))
            .then((userInfo) => {
                // Store user session info in localStorage
                // localStorage.setItem('userSession', JSON.stringify(userInfo)); -> il faut que dans le localstorage on mette les infos du user connecté
                // Redirect to home page or other page
                navigate('/home');
            })
            .catch((e) => setMessage(e.response.data.message));
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="instalike_title text-[64px] leading-[76px]">Instalike</h1>
            <p className="text-red-500">Faire afficher un message d'erreur ici si les id/mdp ne sont pas bon</p>
            <form className="flex flex-col gap-4 w-[348px] mt-4" onSubmit={handleSubmit}>
                <p className="text-lg">Welcom back <span className="font-bold">Chloé</span> !</p>
                <input
                    id="email"
                    className="px-4 bg-gray-200 h-12 rounded-md"
                    type="email"
                    name="email"
                    placeholder="Adresse mail"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    id="password"
                    className="px-4 bg-gray-200 h-12 rounded-md"
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-sm">Not Chloé ? <a className="font-bold text-blue-400" href="#">Change account</a></p>
                <button type="submit" className="bg-blue-400 text-white font-bold h-10 rounded-md mt-2">Login</button>
            </form>
        </div>
    );
};

export default LoginView;
