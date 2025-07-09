import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

const savedLanguage = localStorage.getItem('lang') || 'en';

i18n.use(initReactI18next).init({

    fallbackLng: 'en',
    lng: savedLanguage,

    resources: {
        en: {
            translation: {
                lang: 'English',
                nav: {
                    about: 'About us',
                    contact: 'Contact'
                },
                footer: {
                    title: 'Trusted Security. Proven Reliability',
                    name: 'SECURITY EVENTMANAGEMENT CREW',
                    desc: 'Protect what matters with expert, tailored solutions. Our skilled team is here to safeguard your future — professionally and personally. Partner with us for peace of mind.'
                },
                home: {
                    title: 'Secure Your Business with Top Talent',
                    subtitle: 'Fortify your operations with exceptional security professionals. Trust us for unmatched expertise and reliability in safeguarding your assets.',
                    experience: "Years of experience",
                    customers: 'Satisfied customers',
                    license: 'Licensed Officer',
                    solutions: 'Individual solutions',
                    sss: {
                        title: 'Security Stuffing Solutions',
                        cards: {
                            first: {
                                title: 'Comprehensive Security Analysis',
                                description: 'Our expert team conducts thorough assessments to identify vulnerabilities in your security infrastructure'
                            },
                            second: {
                                title: 'Custom Security Staffing Solutions',
                                description: 'We provide specialized security professionals tailored to meet your specific business needs and challenges'
                            },
                            third: {
                                title: 'Ongoing Security Support Services',
                                description: 'Benefit from continuous support to ensure your security systems remain robust and up-to-date'
                            }
                        },
                        second_title_1: 'Security & Protection!',
                        second_title_2: 'We meet your needs!',
                        subtitle: 'Whether you’re a business, a private client, or organizing an event — we provide tailored security solutions designed to meet the highest standards. Our expert team and cutting-edge technology ensure you’re protected 24/7. Reach out today for a free consultation — no obligations. Let’s build the perfect security plan together.',
                    },
                    cards: {
                        title: 'Comprehensive Security Solutions for Every Sector',
                        subtitle: 'We provide customized security plans tailored for events, corporate gatherings, and construction sites. Our skilled team works discreetly and dependably to safeguard both people and assets around the clock. Rely on our expertise to deliver maximum protection and minimize risks.',
                        property: {
                            title: 'Property protection',
                            subtitle: 'We specialize in securing commercial spaces, private properties, and construction areas through continuous monitoring and on-site presence. Our trained personnel work around the clock to safeguard your assets. Every solution is crafted specifically to fit your needs — delivering both reliability and peace of mind',
                            note: 'Reliable Security for All Your Facilities'
                        },
                        doorman: {
                            title: 'Doorman service',
                            subtitle: 'Our doorman service adds both security and prestige to the entrance of your business, hotel, or event venue. Professionally trained and sharply dressed, our doormen go beyond protecting against unauthorized access — they embody your brand’s image with discretion and class. Their presence creates a secure environment while leaving a lasting, professional impression on every guest and visitor.',
                            note: 'Professional Doorman Service for Security and Prestige'
                        },
                        event: {
                            title: 'Event Protection',
                            subtitle: 'No matter the size or nature of your event, our security service ensures everything runs smoothly and safely. Our trained professionals are skilled at identifying potential risks early and responding with discretion and efficiency to protect your guests. From concerts and corporate parties to trade fairs and private celebrations — we design custom security strategies tailored specifically to your event\'s needs.',
                            note: 'Seamless Security for Every Event'
                        },
                        personal_protection_driver: {
                            title: 'Personal Protection and Driver Service',
                            subtitle: 'Whether discreet personal protectors in plain clothes or visible bodyguards in suits – we provide you with a tailor-made all-around package. Armed personnel and terms available upon request.',
                            note: 'Professional bodyguards, customized to your situation.'
                        },
                        concierge: {
                            title: 'Concierge Service',
                            subtitle: 'Our concierge service covers all duties on your company premises, such as monitoring pedestrian and vehicle traffic, conducting bag checks, and performing security patrols. It also includes facility locking services, often extended to operating complex security systems and monitoring the in-house security control center',
                            note: 'Concierge Services with Security Expertise'
                        }
                    }
                },
                about: {
                    title: 'About us',
                    subtitle: 'Securing What Matters Most',
                    whoweare: {
                        title: 'Who We Are',
                        desc: 'At Security Eventmanagement Crew, we are a dedicated team of seasoned professionals committed to delivering top-tier security solutions tailored to your unique needs. With over a decade of experience, we combine expertise, technology, and personalized service to protect what matters most — your business, events, and loved ones. Our approach is built on trust, reliability, and excellence, ensuring comprehensive protection through every circumstance. From corporate security to personal protection, we pride ourselves on professionalism and discretion.'
                    },
                    whychooseus: {
                        title: 'Why choose us',
                        cards: {
                            professional: {
                                title: 'Trained Professionals',
                                subtitle: 'Certified, experienced, and ready for duty.'
                            },
                            available: {
                                title: '24/7 Availability',
                                subtitle: 'Always on guard — day or night.'
                            },
                            flex: {
                                title: 'Flexible Staffing',
                                subtitle: 'Custom solutions for any need or scale'
                            },
                            security: {
                                title: 'Proactive Security',
                                subtitle: 'We prevent threats before they happen.'
                            },
                            communication: {
                                title: 'Clear Communication',
                                subtitle: 'No surprises — full transparency and control.'
                            },
                            license: {
                                title: 'Fully Licensed',
                                subtitle: 'Compliant. Certified. Trusted'
                            }
                        },
                        trusted: {
                            title: 'Trusted By'
                        }
                    }
                },
                contact: {
                    title: 'Contact us',
                    subtitle: 'Your safety comes first – reach out to us today!',
                    formTitle: 'Contact Form',
                    form: {
                        email: {
                            title: 'Email address',
                            placeholder: 'Enter your email'
                        },
                        fullName: {
                            title: 'Full Name',
                            firstNamePlaceholder: 'Enter your firstname ',
                            lastNamePlaceholder: 'Enter your lastname ',
                        },
                        phone: {
                            title: 'Phone number',
                            placeholder: 'Enter your phone number',
                        },
                        address: {
                            title: 'Address',
                            addressPlaceholder: 'Enter preferred address',
                            plzPlaceholder: 'Enter PLZ'
                        },
                        service: {
                            title: 'Services',
                            placeholder: 'Select Service',
                            property: 'Property protection',
                            doorman: 'Doorman service',
                            event: 'Event Protection',
                            personal_protection_driver: 'Personal Protection and Driver Service',
                            concierge: 'Concierge Service',
                        },
                        equipment: {
                            title: 'Required Equipment',
                            placeholder: 'Select equipment',
                            withWeapons: 'With weapons',
                            withoutWeapons: 'Without weapons'
                        },
                        personnel: {
                            title: 'Estimated personnel requirement',
                        },
                        dressCode: {
                            title: 'Dresscode',
                            firstOption: 'Black jacket, white shirt',
                            secondOption: 'Black jacket, black shirt'
                        },
                        notes: {
                            title: 'Notes',
                            placeholder: 'Enter your notes(It\'s not required)'
                        },
                        notifications: {
                            success: 'Message sent successfully!',
                            error: 'Error sending message. Please try again later'
                        },
                        operations: {
                            loading: 'Sending...'
                        },
                        submitButton: 'Submit'
                    }
                },
                contactButton: 'Contact us'
            }
        },
        de: {
            translation: {
                lang: 'German',
                nav: {
                    about: 'Uber uns',
                    contact: 'Contact'
                },
                footer: {
                    title: 'Vertraute Sicherheit. Bewährte Zuverlässigkeit',
                    name: 'SECURITY EVENTMANAGEMENT CREW',
                    desc: 'Schütze, was dir wichtig ist, mit fachkundigen, maßgeschneiderten Lösungen. Unser erfahrenes Team ist hier, um deine Zukunft – professionell und persönlich – zu sichern. Arbeite mit uns zusammen für sorgenfreie Sicherheit'
                },
                home: {
                    title: 'Sichern Sie Ihr Unternehmen mit den besten Fachkräften',
                    subtitle: 'Stärken Sie Ihre Abläufe mit erstklassigen Sicherheitsexperten. Vertrauen Sie auf unsere unvergleichliche Expertise und Zuverlässigkeit beim Schutz Ihrer Werte.',
                    experience: "Jahre Erfahrung",
                    customers: 'Zufriedene Kunden',
                    license: 'Lizenzierte Sicherheitskräfte',
                    solutions: 'Individuelle Lösungen',
                    sss: {
                        title: 'Lösungen für die Personalausstattung im Sicherheitsdienst',
                        cards: {
                            first: {
                                title: 'Umfassende Sicherheitsanalyse',
                                description: 'Unser Expertenteam führt gründliche Bewertungen durch, um Schwachstellen in Ihrer Sicherheitsinfrastruktur zu identifizieren'
                            },
                            second: {
                                title: 'Maßgeschneiderte Sicherheitslösungen',
                                description: 'Wir bieten spezialisierte Sicherheitskräfte, die genau auf Ihre Geschäftsanforderungen und Herausforderungen abgestimmt sind'
                            },
                            third: {
                                title: 'Fortlaufende Sicherheitsunterstützungsdienste',
                                description: 'Profitieren Sie von kontinuierlicher Unterstützung, um sicherzustellen, dass Ihre Sicherheitssysteme robust und aktuell bleiben'
                            }
                        },
                        second_title_1: 'Sicherheit & Schutz!',
                        second_title_2: 'Wir erfüllen Ihre Anforderungen!',
                        subtitle: 'Ob Unternehmen, Privatkunde oder Veranstalter – wir bieten maßgeschneiderte Sicherheitslösungen nach höchsten Standards. Unser Expertenteam und modernste Technologie sorgen rund um die Uhr für Ihren Schutz. Kontaktieren Sie uns noch heute für eine unverbindliche und kostenlose Beratung. Gemeinsam entwickeln wir das ideale Sicherheitskonzept für Sie.',
                    },
                    cards: {
                        title: 'Umfassende Sicherheitslösungen für alle Branchen',
                        subtitle: 'Wir bieten maßgeschneiderte Sicherheitspläne für Events, Firmenveranstaltungen und Baustellen. Unser erfahrenes Team arbeitet diskret und zuverlässig, um Menschen und Werte rund um die Uhr zu schützen. Verlassen Sie sich auf unsere Expertise für maximalen Schutz und minimales Risiko.',
                        property: {
                            title: 'Objektschutz',
                            subtitle: 'Wir sichern Gewerbeflächen, Privatobjekte und Baustellen durch kontinuierliche Überwachung und Präsenz vor Ort. Unser geschultes Personal ist rund um die Uhr im Einsatz, um Ihre Werte zu schützen. Jede Lösung wird individuell auf Ihre Bedürfnisse zugeschnitten – für maximale Sicherheit und ein gutes Gefühl.',
                            note: 'Zuverlässige Sicherheit für all Ihre Einrichtungen'
                        },
                        doorman: {
                            title: 'Doorman service',
                            subtitle: 'Unser Doorman-Service verleiht dem Eingang Ihres Unternehmens, Hotels oder Veranstaltungsortes Sicherheit und Stil. Professionell geschult und elegant gekleidet, schützen unsere Doormen nicht nur vor unbefugtem Zutritt – sie repräsentieren Ihre Marke mit Diskretion und Klasse. Ihre Präsenz sorgt für ein sicheres Umfeld und hinterlässt bei jedem Gast und Besucher einen bleibenden, professionellen Eindruck.',
                            note: 'Professioneller Doorman-Service für Sicherheit und Prestige'
                        },
                        event: {
                            title: 'Veranstaltungssicherheit',
                            subtitle: 'Egal wie groß oder welcher Art Ihre Veranstaltung ist – unser Sicherheitsdienst sorgt für einen reibungslosen und sicheren Ablauf. Unsere Fachkräfte erkennen Risiken frühzeitig und reagieren diskret und effizient, um Ihre Gäste zu schützen. Ob Konzerte, Firmenfeiern, Messen oder private Feste – wir entwickeln passgenaue Sicherheitskonzepte für Ihre Veranstaltung.',
                            note: 'Nahtlose Sicherheit für jede Veranstaltung'
                        },
                        personal_protection_driver: {
                            title: 'Personenschutz und Fahrerservice',
                            subtitle: 'Ob Diskrete Personenschützer in Zivil oder sichtbare Bodyguards in Anzügen - wir erstellen Ihnen ein Maßgeschneidertes rundum Packet. Waffenträger und Konditionen auf Anfrage klärbar.',
                            note: 'Professionelle Personenschützer, individuell auf Ihre Situation abgestimmt.'
                        },
                        concierge: {
                            title: 'Portierdienste',
                            subtitle: 'Unser Portiersdienst umfasst alle Aufgaben auf Ihrem Firmengelände, wie die Kontrolle des Personen- und Kfz-Verkehrs, Taschenkontrollen. Sicherheitsrundgänge sowie der Betriebsschließungsdienst, oftmals erweitert um die Bedienung komplizierter Sicherheitsanlagen sowie der Überwachung der hauseigenen Sicherheitszentrale.',
                            note: 'Concierge-Service mit Sicherheitskompetenz'
                        }
                    }

                },
                about: {
                    title: 'Über uns',
                    subtitle: 'Schutz, der Ihnen am wichtigsten ist',
                    whoweare: {
                        title: 'Wer wir sind',
                        desc: 'Bei Security Eventmanagement Crew sind wir ein engagiertes Team erfahrener Fachleute, das sich darauf spezialisiert hat, maßgeschneiderte Sicherheitslösungen für Ihre individuellen Bedürfnisse zu bieten. Mit über zehn Jahren Erfahrung verbinden wir Expertise, modernste Technologie und persönlichen Service, um das zu schützen, was Ihnen am wichtigsten ist – Ihr Unternehmen, Ihre Veranstaltungen und Ihre Liebsten. Unser Ansatz basiert auf Vertrauen, Zuverlässigkeit und Exzellenz, sodass wir umfassenden Schutz in jeder Situation gewährleisten. Von der Unternehmenssicherheit bis zum Personenschutz legen wir größten Wert auf Professionalität und Diskretion.'
                    },
                    whychooseus: {
                        title: 'Warum Sie uns wählen sollten',
                        cards: {
                            professional: {
                                title: 'Geschulte Fachkräfte',
                                subtitle: 'Zertifiziert, erfahren und einsatzbereit'
                            },
                            available: {
                                title: 'Rund-um-die-Uhr-Verfügbarkeit',
                                subtitle: 'Jeden Tag und jede Nacht für Sie im Einsatz.'
                            },
                            flex: {
                                title: 'Flexible Personalplanung',
                                subtitle: 'Maßgeschneiderte Lösungen für jeden Bedarf und Umfang.'
                            },
                            security: {
                                title: 'Proaktive Sicherheit',
                                subtitle: 'Wir verhindern Bedrohungen, bevor sie entstehen.'
                            },
                            communication: {
                                title: 'Klare Kommunikation',
                                subtitle: 'Keine Überraschungen – volle Transparenz und Kontrolle.'
                            },
                            license: {
                                title: 'Vollständig lizenziert',
                                subtitle: 'Konform. Zertifiziert. Vertraulich'
                            }
                        },
                        trusted: {
                            title: 'Vertraut von'
                        }
                    }
                },
                contact: {
                    title: 'Kontaktieren Sie uns',
                    subtitle: 'Ihre Sicherheit steht an erster Stelle – kontaktieren Sie uns noch heute!',
                    formTitle: 'Kontaktformular',
                    form: {
                        email: {
                            title: 'E-Mail-Adresse',
                            placeholder: 'Geben Sie Ihre E-Mail-Adresse ein'
                        },
                        fullName: {
                            title: 'Vollständiger Name',
                            firstNamePlaceholder: 'Geben Sie Ihren Vornamen ein',
                            lastNamePlaceholder: 'Geben Sie Ihren Nachnamen ein',
                        },
                        phone: {
                            title: 'Telefonnummer',
                            placeholder: 'Geben Sie Ihre Telefonnummer ein',
                        },
                        address: {
                            title: 'Adresse',
                            addressPlaceholder: 'Geben Sie die gewünschte Adresse ein',
                            plzPlaceholder: 'Geben Sie die Postleitzahl (PLZ) ein'
                        },
                        service: {
                            title: 'Dienstleistungen',
                            placeholder: 'Dienstleistung auswählen',
                            property: 'Objektschutz',
                            doorman: 'Doorman service',
                            event: 'Veranstaltungssicherheit',
                            personal_protection_driver: 'Personenschutz und Fahrerservice',
                            concierge: 'Portierdienste',
                        },
                        equipment: {
                            title: 'Benötigte Ausstattung',
                            placeholder: 'Ausrüstung auswählen',
                            withWeapons: 'Bewaffnet',
                            withoutWeapons: 'Unbewaffnet'
                        },
                        personnel: {
                            title: 'Geschätzter Personalbedarf',
                        },
                        dressCode: {
                            title: 'Dresscode auswählen',
                            firstOption: 'Schwarzer Anzug, weißes Hemd',
                            secondOption: 'Schwarzer Anzug, schwarzes Hemd'
                        },
                        notes: {
                            title: 'Anmerkungen',
                            placeholder: 'Anmerkungen eingeben (optional)'
                        },
                        notifications: {
                            success: 'Nachricht erfolgreich gesendet!',
                            error: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut.'
                        },
                        operations: {
                            loading: 'Senden...'
                        },
                        submitButton: 'Absenden'
                    }
                },
                contactButton: 'Kontaktieren Sie uns'
            }
        }
    }
})

export default i18n;