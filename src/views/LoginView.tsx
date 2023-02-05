const LoginView = () => {
    return <>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="instalike_title text-[64px] leading-[76px]">Instalike</h1>
            <form action="" className="flex flex-col gap-4 w-[348px] mt-4">
                <p className="text-lg">Welcom back <span className="font-bold">Chloé</span> !</p>
                <input className="px-4 bg-gray-200 h-12 rounded-md" type="email" placeholder="Adresse mail"></input>
                <input className="px-4 bg-gray-200 h-12 rounded-md" type="password" placeholder="Mot de passe"></input>
                <p className="text-sm">Not Chloé ? <a className="font-bold text-blue-400" href="">Change account</a></p>
                <button type="submit" className="bg-blue-400 text-white font-bold h-10 rounded-md mt-2">Login</button>
            </form>
        </div>
    </>;
};

export default LoginView;  