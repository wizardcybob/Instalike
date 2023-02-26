import { useState } from 'react';
import { Link } from 'react-router-dom';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCompass, faSquarePlus, faCircleUser, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';


const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const handleDarkModeToggle = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark');
    };


return <>
    {/* HEADER */}
    <div className="border-b-[0.8px] dark:bg-darkblue">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-2 h-16">
            <h1 className="instalike_title text-[44px]">Instalike</h1>
            <nav className="flex gap-5">
                {/* HOME */}
                <Link to="/feed">
                    <FontAwesomeIcon className="text-[24px]" icon={faHouse} />
                </Link>
                {/* DISCOVER */}
                <Link to="/discover">
                    <FontAwesomeIcon className="text-[24px]" icon={faCompass} />
                    </Link>
                {/* ADD PICS */}
                <a href="/addpost">
                    <FontAwesomeIcon className="text-[24px]" icon={faSquarePlus} />
                </a>
                {/* PROFIL */}
                <Link to="/profile">
                    <FontAwesomeIcon className="text-[24px]" icon={faCircleUser} />
                </Link>
                {/* LIGHT/DARK MODE TOGGLE */}
                <button onClick={handleDarkModeToggle}>
                    <FontAwesomeIcon className="text-[24px]" icon={isDarkMode ? faSun : faMoon} />
                </button>
            </nav>
        </div>
    </div>
</>;
};

export default Navbar;