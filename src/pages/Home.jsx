import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    home_title_image,
    firstInfoCardHome,
    secondInfoCardHome,
    thirdInfoCardHome,
    under_info_cards_image,
    phone,
    property_protection_image,
    doorman_service_image,
    event_protection_image,
    personal_protection_and_driver_license,
    concierge_service_image,
    home_figure,
    home_figure_2
} from '../assets'
import {Button} from "../shared";
import {StatisticHome, InfoCardHome, MainCardHome} from "../Components";
import {useTranslation} from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

function Home() {
    const { t } = useTranslation();

    const heroRef = useRef(null);
    const statisticsRef = useRef(null);
    const securitySectionRef = useRef(null);
    const infoCardsRef = useRef(null);
    const underInfoRef = useRef(null);
    const servicesRef = useRef(null);
    const serviceCardsRef = useRef([]);
    const figuresRef = useRef([]);

    useEffect(() => {
        gsap.set([heroRef.current?.querySelector('h1'), heroRef.current?.querySelector('p'), heroRef.current?.querySelector('.hero-button')], {
            opacity: 0,
            y: 50
        });

        const heroTl = gsap.timeline();
        heroTl.to(heroRef.current?.querySelector('h1'), {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        })
            .to(heroRef.current?.querySelector('p'), {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.3")
            .to(heroRef.current?.querySelector('.hero-button'), {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.3");

        gsap.fromTo(statisticsRef.current?.children, {
            opacity: 0,
            y: 60,
            scale: 0.8
        }, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: statisticsRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(securitySectionRef.current?.querySelector('span'), {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: securitySectionRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(infoCardsRef.current?.children, {
            opacity: 0,
            y: 80,
            rotationY: 15
        }, {
            opacity: 1,
            y: 0,
            rotationY: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.3,
            scrollTrigger: {
                trigger: infoCardsRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(underInfoRef.current?.querySelector('img'), {
            opacity: 0,
            x: -100,
            scale: 0.8
        }, {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: underInfoRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(underInfoRef.current?.querySelector('.info-text'), {
            opacity: 0,
            x: 100
        }, {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: underInfoRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(servicesRef.current?.querySelector('h2'), {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.fromTo(servicesRef.current?.querySelector('span'), {
            opacity: 0,
            y: 30
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.3,
            scrollTrigger: {
                trigger: servicesRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });

        figuresRef.current.forEach((figure, index) => {
            if (figure) {
                gsap.fromTo(figure, {
                    opacity: 0,
                    scale: 0.5,
                    rotation: index % 2 === 0 ? -20 : 20
                }, {
                    opacity: 1,
                    scale: 1,
                    rotation: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: figure,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });

        serviceCardsRef.current.forEach((card, index) => {
            if (card) {
                const isLeft = index % 2 === 1;
                gsap.fromTo(card, {
                    opacity: 0,
                    x: isLeft ? -100 : 100,
                    y: 50
                }, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });

        figuresRef.current.forEach((figure) => {
            if (figure) {
                gsap.to(figure, {
                    y: -50,
                    ease: "none",
                    scrollTrigger: {
                        trigger: figure,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="overflow-hidden">
            <section ref={heroRef} className="relative h-[700px] overflow-hidden">
                <img
                    src={home_title_image}
                    alt="Image"
                    className="w-full h-full object-cover brightness-20"
                />
                <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-16 py-10 md:py-20 text-white">
                    <div className="max-w-[80%] md:max-w-[50%]">
                        <h1 className="text-3xl mt-5 md:text-5xl font-medium leading-tight md:text-left text-center">
                            {t('home.title')}
                        </h1>
                        <p className="mt-4 text-sm md:text-lg text-gray-200 md:text-left text-center mb-4">
                            {t('home.subtitle')}
                        </p>
                        <div className="mt-6 flex justify-center md:justify-start">
                            <div className="hero-button">
                                <Button color='#FFF7F7' text='black' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={statisticsRef} className="flex sm:flex-row flex-col gap-6 sm:gap-[10%] justify-center mt-20 mb-20">
                <StatisticHome topText="10+" bottomText={t('home.experience')} />
                <StatisticHome topText="100+" bottomText={t('home.customers')} />
                <StatisticHome topText="50+" bottomText={t('home.license')} />
                <StatisticHome topText="100%" bottomText={t('home.solutions')} />
            </section>

            <section ref={securitySectionRef} className="relative bg-[#191717] px-6 md:px-16 pt-12 pb-5">
                <div className="mb-8">
                    <span className="text-white text-3xl font-semibold w-[100%] flex justify-center text-center">
                        {t('home.sss.title')}
                    </span>
                </div>

                <div ref={infoCardsRef} className="flex sm:flex-row flex-col items-center justify-center 2xl:gap-45 xl:gap-35 lg:gap-25 md:gap-7 gap-3">
                    <InfoCardHome image={firstInfoCardHome} title={t('home.sss.cards.first.title')} desc={t('home.sss.cards.first.description')} />
                    <InfoCardHome image={secondInfoCardHome} title={t('home.sss.cards.second.title')} desc={t('home.sss.cards.second.description')} />
                    <InfoCardHome image={thirdInfoCardHome} title={t('home.sss.cards.third.title')} desc={t('home.sss.cards.third.description')} />
                </div>

                <div ref={underInfoRef} className="flex md:flex-row flex-col items-center justify-around text-white mt-10">
                    <img src={under_info_cards_image} alt="" className="w-80 rounded-md" />
                    <div className="info-text w-[80%] md:w-[40%] flex flex-col justify-center items-center md:items-start">
                        <h2 className="text-2xl font-bold mb-2 text-center md:mt-0 mt-4 leading-tight">
                            <span className="block text-center md:text-left">{t('home.sss.second_title_1')}</span>
                            <span className="block mr-2">{t('home.sss.second_title_2')}</span>
                        </h2>
                        <span className="text-sm md:text-left text-center">
                            {t('home.sss.subtitle')}
                        </span>
                        <div className="flex items-center gap-2 mt-4">
                            <img src={phone} alt="Phone" className="w-5" />
                            <span className="text-[#45ACB7] text-sm"><a href="tel:+43 676 542 24 57">+43 676 542 24 57</a></span>
                        </div>
                        <div className="mt-4">
                            <Button color="#FFFFFF" text="black" />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-[-47px] left-0 w-full h-12 bg-[#191717]"
                     style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)' }}>
                </div>
            </section>

            <section ref={servicesRef} className="relative mt-25 w-full mb-20">
                <div className="flex flex-col items-center">
                    <h2 className="text-2xl font-bold text-center w-[90%]">
                        {t('home.cards.title')}
                    </h2>
                    <span className="text-sm text-center w-[90%] sm:w-[60%] mt-3 mb-10">
                        {t('home.cards.subtitle')}
                    </span>
                </div>

                <img
                    ref={el => figuresRef.current[0] = el}
                    src={home_figure}
                    alt=""
                    className="absolute top-70 left-0 pointer-events-none z-0"
                />
                <img
                    ref={el => figuresRef.current[1] = el}
                    src={home_figure_2}
                    alt=""
                    className="absolute bottom-20 right-0 pointer-events-none z-0"
                />

                <div className="relative z-10 flex flex-col gap-20 items-center">
                    <div ref={el => serviceCardsRef.current[0] = el}>
                        <MainCardHome
                            image={property_protection_image}
                            title={t('home.cards.property.title')}
                            text={t('home.cards.property.subtitle')}
                            note={t('home.cards.property.note')}
                            isLeft={false}
                        />
                    </div>

                    <div ref={el => serviceCardsRef.current[1] = el}>
                        <MainCardHome
                            image={doorman_service_image}
                            title={t('home.cards.doorman.title')}
                            text={t('home.cards.doorman.subtitle')}
                            note={t('home.cards.doorman.note')}
                            isLeft={true}
                        />
                    </div>

                    <div ref={el => serviceCardsRef.current[2] = el}>
                        <MainCardHome
                            image={event_protection_image}
                            title={t('home.cards.event.title')}
                            text={t('home.cards.event.subtitle')}
                            note={t('home.cards.event.note')}
                            isLeft={false}
                        />
                    </div>

                    <div ref={el => serviceCardsRef.current[3] = el}>
                        <MainCardHome
                            image={personal_protection_and_driver_license}
                            title={t('home.cards.personal_protection_driver.title')}
                            text={t('home.cards.personal_protection_driver.subtitle')}
                            note={t('home.cards.personal_protection_driver.note')}
                            isLeft={true}
                        />
                    </div>

                    <div ref={el => serviceCardsRef.current[4] = el}>
                        <MainCardHome
                            image={concierge_service_image}
                            title={t('home.cards.concierge.title')}
                            text={t('home.cards.concierge.subtitle')}
                            note={t('home.cards.concierge.note')}
                            isLeft={false}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;