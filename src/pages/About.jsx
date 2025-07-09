import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    about_us_title_image,
    red_bull_image,
    ferrari_image,
    mclaren_image,
    wiwia,
    stadt_wien,
    tda,
    figure_about,
    figure2_about
} from '../assets'
import {BrandSlider, MainCardAbout} from '../Components'
import {useTranslation} from "react-i18next";

// Регістрація плагіна ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const brands = [
    {name: "Red Bull", src: red_bull_image},
    {name: "Ferrari", src: ferrari_image},
    {name: "McLaren", src: mclaren_image},
    {name: "Wiwia", src: wiwia},
    {name: "Stadt_wien", src: stadt_wien},
    {name: "TDA", src: tda}
];

function AboutUs() {
    const { t } = useTranslation();
    const whoWeAreRef = useRef(null);
    const whyChooseUsRef = useRef(null);
    const advantagesRef = useRef(null);
    const trustedByRef = useRef(null);
    const figure1Ref = useRef(null);
    const figure2Ref = useRef(null);

    const advantages = [
        {
            title: t('about.whychooseus.cards.professional.title'),
            text: t('about.whychooseus.cards.professional.subtitle')
        },
        {
            title: t('about.whychooseus.cards.available.title'),
            text: t('about.whychooseus.cards.available.subtitle')
        },
        {
            title: t('about.whychooseus.cards.flex.title'),
            text: t('about.whychooseus.cards.flex.subtitle')
        },
        {
            title: t('about.whychooseus.cards.security.title'),
            text: t('about.whychooseus.cards.security.subtitle')
        },
        {
            title: t('about.whychooseus.cards.communication.title'),
            text: t('about.whychooseus.cards.communication.subtitle')
        },
        {
            title: t('about.whychooseus.cards.license.title'),
            text: t('about.whychooseus.cards.license.subtitle')
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.timeline({
                scrollTrigger: {
                    trigger: whoWeAreRef.current,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse"
                }
            })
                .fromTo(whoWeAreRef.current.querySelector('h2'),
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 }
                )
                .fromTo(whoWeAreRef.current.querySelector('span'),
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    0.2
                );

            // Анімація заголовка "Why Choose Us"
            gsap.fromTo(whyChooseUsRef.current.querySelector('h2'),
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: whyChooseUsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Анімація фігур
            gsap.timeline({
                scrollTrigger: {
                    trigger: whyChooseUsRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            })
                .fromTo(figure1Ref.current,
                    { x: -100, opacity: 0.3, rotation: -10 },
                    { x: 0, opacity: 0.6, rotation: 0, duration: 2 }
                )
                .fromTo(figure2Ref.current,
                    { x: 100, opacity: 0.3, rotation: 10 },
                    { x: 0, opacity: 0.6, rotation: 0, duration: 2 },
                    0.5
                );

            // Анімація advantage карток
            gsap.fromTo(advantagesRef.current.querySelectorAll('li'),
                {
                    x: (i) => i % 2 === 0 ? -80 : 80,
                    opacity: 0,
                    scale: 0.8
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: advantagesRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Анімація "Trusted By" секції
            gsap.timeline({
                scrollTrigger: {
                    trigger: trustedByRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            })
                .fromTo(trustedByRef.current.querySelector('h2'),
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 }
                )
                .fromTo(trustedByRef.current.querySelector('.brand-slider-container'),
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    0.3
                );

            // Parallax ефект для фігур
            gsap.to(figure1Ref.current, {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: whyChooseUsRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.to(figure2Ref.current, {
                yPercent: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: whyChooseUsRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            });

        });

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <div className="overflow-hidden">
            <section className="relative h-[200px] md:h-[600px] overflow-hidden">
                <img src={about_us_title_image} alt="Image" className="w-full h-full object-cover brightness-20" />

                <div className="hero-content absolute inset-0 flex items-center justify-center flex-col px-6 md:px-16 py-10 md:py-20 text-white">
                    <h1 className="text-3xl mt-5 md:text-5xl font-medium leading-tight md:text-left text-center">
                        {t('about.title')}
                    </h1>
                    <p className="mt-4 text-sm md:text-lg text-gray-200 text-center mb-4">
                        {t('about.subtitle')}
                    </p>
                </div>
            </section>

            <section ref={whoWeAreRef} className="flex justify-center mt-15">
                <div className="flex flex-col items-center w-[90%] md:w-[60%]">
                    <h2 className="text-xl md:text-3xl font-medium after:content-[''] after:block after:w-1/2 md:after:h-[2px] after:h-[1px] after:bg-current after:mx-auto after:mt-1">
                        {t('about.whoweare.title')}
                    </h2>
                    <span className="text-center text-xs md:text-sm mt-4">
                        {t('about.whoweare.desc')}
                    </span>
                </div>
            </section>

            <section ref={whyChooseUsRef} className="flex justify-center flex-col items-center mt-15 relative">
                <h2 className="block text-xl md:text-3xl font-medium after:content-[''] after:block after:w-1/2 md:after:h-[2px] after:h-[1px] after:bg-current after:mx-auto after:mt-1">
                    {t('about.whychooseus.title')}
                </h2>

                <img ref={figure1Ref} src={figure_about} alt="" className="absolute top-0 w-[50%] left-[-10%]" />
                <img ref={figure2Ref} src={figure2_about} alt="" className="absolute bottom-[-10%] w-[55%] right-[-10%]" />

                <ul ref={advantagesRef} className="mt-7 flex flex-col gap-7 w-[90%] md:w-[70%]">
                    {advantages.map((adv, index) => (
                        <li key={index} className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                            <MainCardAbout title={adv.title} text={adv.text} />
                        </li>
                    ))}
                </ul>
            </section>

            <section ref={trustedByRef} className="flex flex-col items-center justify-center mt-15 w-[100%] overflow-hidden">
                <h2 className="text-xl md:text-3xl font-medium after:content-[''] after:block after:w-1/2 md:after:h-[2px] after:h-[1px] after:bg-current after:mx-auto after:mt-1">
                    {t('about.whychooseus.trusted.title')}
                </h2>
                <div className="brand-slider-container w-[100%]">
                    <BrandSlider brands={brands} />
                </div>
            </section>
        </div>
    );
}


export default AboutUs;