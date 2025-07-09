import React from 'react';
import {contact_title_image} from "../assets/index.js";
import {ContactForm} from "../Components";
import {useTranslation} from "react-i18next";

function Contact() {
    const { t } = useTranslation();
    return (
        <div>
            <section className="relative h-[200px] md:h-[600px] overflow-hidden">
                <img
                    src={contact_title_image}
                    alt="Image"
                    className="w-full h-full object-cover brightness-20"
                />

                <div
                    className="absolute inset-0 flex items-center justify-center flex-col px-6 md:px-16 py-10 md:py-20 text-white">
                    <h1 className="text-3xl mt-5 md:text-5xl font-medium leading-tight md:text-left text-center">
                        {t('contact.title')}
                    </h1>
                    <p className="mt-4 text-sm md:text-lg text-gray-200 text-center mb-4">
                        {t('contact.subtitle')}
                    </p>
                </div>
            </section>

            <section>
                <ContactForm />
            </section>
        </div>
    );
}

export default Contact;