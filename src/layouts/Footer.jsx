import {
    footer_image,
    main_logo,
    phone,
    location,
    mail,
    instagram,
    linkedin,
    whatsapp
} from '../assets';
import React from "react";
import {Button} from "../shared";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-[#191717] text-white w-[100%]">
            <section className="relative">
                <img src={footer_image} alt="" className="brightness-20 h-80 object-cover z-0 w-full"/>
                <div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center gap-2 z-10 px-4 py-8">
                    <p className="text-base md:text-lg">Trusted Security. Proven Reliability</p>
                    <p className="text-lg md:text-xl font-bold tracking-wide text-center md:mb-4 mb-7">
                        SECURITY EVENTMANAGEMENT CREW
                    </p>
                    <p className="text-sm md:text-base max-w-[90%] lg:max-w-[60%] md:block hidden mb-4">
                        Protect what matters with expert, tailored solutions. Our skilled team is here to safeguard your
                        future — professionally and personally. Partner with us for peace of mind.
                    </p>
                    <div>
                        <Link to="contact">
                            <Button/>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="flex flex-col md:flex-row items-center justify-around gap-8 py-8 px-4">
                <img src={main_logo} alt="Logo" className="h-16 md:h-30"/>

                <ul className="list-none flex flex-col gap-3 text-sm md:text-base">
                    <li className="flex items-center gap-2">
                        <img src={phone} alt="Phone" className="w-5 md:w-6"/>
                        <span className="text-[#45ACB7]">+43 676 542 24 57</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src={location} alt="Location" className="w-5 md:w-6"/>
                        <span className="text-[#45ACB7]">Apollogasse 11, 1070 Wien</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <img src={mail} alt="Email" className="w-5 md:w-6"/>
                        <span className="text-[#45ACB7]">office@sec-crew.at</span>
                    </li>
                </ul>

                <div className="flex gap-3">
                    <a href="">
                        <img src={instagram} alt="Instagram" className="w-8 md:w-10"/>
                    </a>
                    <a href="">
                        <img src={whatsapp} alt="WhatsApp" className="w-8 md:w-10"/>
                    </a>
                    <a href="">
                        <img src={linkedin} alt="LinkedIn" className="w-8 md:w-10"/>
                    </a>
                </div>
            </section>

            <section className="border-t border-white text-center text-xs md:text-sm py-2">
                Copyright © 2025 Security Eventmanagement Crew
            </section>
        </footer>
    );
}

export default Footer;
