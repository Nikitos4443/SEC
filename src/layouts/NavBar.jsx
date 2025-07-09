import React, {useState} from 'react';
import {main_logo, usa_flag, german_flag, bottom_triangle} from '../assets';
import {useTranslation} from 'react-i18next';
import {Link, NavLink} from 'react-router-dom';

function NavBar() {
    const {t, i18n} = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const getCurrentFlag = () => {
        switch (i18n.language) {
            case 'de':
                return german_flag;
            case 'en':
            default:
                return usa_flag;
        }
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
        setIsDropdownOpen(false);
    };

    return (
        <nav className="w-full h-16 fixed flex justify-around items-center bg-[#191717] text-white z-30 px-4">
            <Link to='/' className="h-10 md:h-full">
                <img src={main_logo} alt="Logo" className="h-10 md:h-full"/>
            </Link>

            <ul className="list-none flex items-center gap-4 text-sm md:text-lg">
                <ul className="list-none flex items-center gap-2 sm:gap-4 text-sm md:text-lg">
                    <li>
                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                `relative px-1 
                                   after:content-[''] after:absolute after:left-0 after:h-[2px] 
                                   after:bg-white after:transition-all after:duration-300 after:ease-in-out 
                                   after:bottom-[-1px] ${isActive ? 'after:w-full' : 'after:w-0'}`
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                `relative px-1 
                                   after:content-[''] after:absolute after:left-0 after:h-[2px] 
                                   after:bg-white after:transition-all after:duration-300 after:ease-in-out 
                                   after:bottom-[-1px] ${isActive ? 'after:w-full' : 'after:w-0'}`
                            }
                        >
                            {t("nav.about")}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({isActive}) =>
                                `relative px-1 
                                   after:content-[''] after:absolute after:left-0 after:h-[2px] 
                                   after:bg-white after:transition-all after:duration-300 after:ease-in-out 
                                   after:bottom-[-1px] ${isActive ? 'after:w-full' : 'after:w-0'}`
                            }
                        >
                            {t("nav.contact")}
                        </NavLink>
                    </li>
                </ul>


                <li
                    className="relative"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <div className="flex items-center cursor-pointer">
                        <img src={getCurrentFlag()} alt="Flag" className="w-5 h-5 mr-1"/>
                        <span>{t("lang")}</span>
                        <img src={bottom_triangle} alt="Arrow" className="ml-1 w-3 h-3"/>
                    </div>

                    {isDropdownOpen && (
                        <ul className="absolute top-full left-0 bg-[#2a2a2a] text-white rounded shadow-md w-28 z-40">
                            <li
                                onClick={() => changeLanguage('en')}
                                className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer"
                            >
                                English
                            </li>
                            <li
                                onClick={() => changeLanguage('de')}
                                className="px-4 py-2 hover:bg-[#3a3a3a] cursor-pointer"
                            >
                                German
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
