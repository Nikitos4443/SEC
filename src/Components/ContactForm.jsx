import React, {useState, useRef} from 'react';
import {Mail, User, Phone, MapPin, Briefcase, Users, StickyNote, CheckCircle, AlertCircle, Loader2} from 'lucide-react';
import {black_dresscode, white_dresscode} from '../assets'
import ReCAPTCHA from "react-google-recaptcha";
import {useTranslation} from "react-i18next";

const ContactForm = () => {
    const [captcha, setCaptcha] = useState(null);

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        postcode: '',
        service: '',
        equipment: '',
        personnel: 25,
        dresscode: '',
        notes: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');
    const [lastSubmit, setLastSubmit] = useState(0);
    const recaptchaRef = useRef(null);
    const { t } = useTranslation();

    const services = [
        t('contact.form.service.property'),
        t('contact.form.service.doorman'),
        t('contact.form.service.event'),
        t('contact.form.service.personal_protection_driver'),
        t('contact.form.service.concierge')
    ];

    const equipmentOptions = [
        '', // Empty option for default
        t('contact.form.equipment.withWeapons'),
        t('contact.form.equipment.withoutWeapons')
    ];

    const dresscodeOptions = [
        {id: 'black-jacket-white-shirt', label: t('contact.form.dressCode.firstOption'), image: white_dresscode},
        {id: 'black-jacket-black-shirt', label: t('contact.form.dressCode.secondOption'), image: black_dresscode}
    ];

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Name validation
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }

        // Phone validation
        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        }

        // Address validation
        if (!formData.address.trim()) {
            newErrors.address = 'Address is required';
        }

        // Service validation
        if (!formData.service) {
            newErrors.service = 'Please select a service';
        }

        // Equipment validation
        if (!formData.equipment) {
            newErrors.equipment = 'Please select equipment preference';
        }

        // Dresscode validation
        if (!formData.dresscode) {
            newErrors.dresscode = 'Please select dresscode';
        }

        // reCAPTCHA validation
        if (!captcha) {
            newErrors.captcha = 'Please complete the reCAPTCHA';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleCaptchaChange = (value) => {
        setCaptcha(value);
        // Clear captcha error when user completes it
        if (errors.captcha && value) {
            setErrors(prev => ({
                ...prev,
                captcha: ''
            }));
        }
    };

    const handleSubmit = async () => {
        // Rate limiting check
        const now = Date.now();
        if (now - lastSubmit < 10000) {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(''), 3000);
            return;
        }

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('');

        try {
            // Підготовка даних для відправки
            const requestData = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                address: formData.address,
                postcode: formData.postcode,
                service: formData.service,
                equipment: formData.equipment,
                personnel: formData.personnel,
                dresscode: formData.dresscode,
                notes: formData.notes,
                recaptchaToken: captcha
            };

            // Відправка на сервер
            const response = await fetch('http://localhost:4000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData)
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setLastSubmit(now);

                // Reset form
                setFormData({
                    email: '',
                    firstName: '',
                    lastName: '',
                    phone: '',
                    address: '',
                    postcode: '',
                    service: '',
                    equipment: '',
                    personnel: 25,
                    dresscode: '',
                    notes: ''
                });

                // Reset captcha
                setCaptcha(null);
                if (recaptchaRef.current) {
                    recaptchaRef.current.reset();
                }
            } else {
                console.error('Server error:', result.message);
                setSubmitStatus('error');
            }

        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">{t('contact.formTitle')}</h2>

            <div className="space-y-6">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="inline w-4 h-4 mr-2"/>
                        {t('contact.form.email.title')}
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.email.placeholder')}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                {/* Full Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline w-4 h-4 mr-2"/>
                        {t('contact.form.fullName.title')}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.fullName.firstNamePlaceholder')}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.fullName.lastNamePlaceholder')}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                        </div>
                    </div>
                </div>

                {/* Phone */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="inline w-4 h-4 mr-2"/>
                        {t('contact.form.phone.title')}
                    </label>
                    <div className="flex rounded-md">
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={t('contact.form.phone.placeholder')}
                            className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                errors.phone ? 'border-red-500' : 'border-gray-300'
                            }`}
                        />
                    </div>
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="inline w-4 h-4 mr-2"/>
                        {t('contact.form.address.title')}
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.address.addressPlaceholder')}
                                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                    errors.address ? 'border-red-500' : 'border-gray-300'
                                }`}
                            />
                            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
                        </div>
                        <div>
                            <input
                                type="text"
                                name="postcode"
                                value={formData.postcode}
                                onChange={handleInputChange}
                                placeholder={t('contact.form.address.plzPlaceholder')}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Service */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Briefcase className="inline w-4 h-4 mr-2"/>
                        {t('contact.form.service.title')}
                    </label>
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.service ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                        <option value="">{t('contact.form.service.placeholder')}</option>
                        {services.slice(1).map(service => (
                            <option key={service} value={service}>{service}</option>
                        ))}
                    </select>
                    {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                </div>

                {/* Equipment */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.equipment.title')}
                    </label>
                    <select
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleInputChange}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                            errors.equipment ? 'border-red-500' : 'border-gray-300'
                        }`}
                    >
                        <option value="">{t('contact.form.equipment.placeholder')}</option>
                        {equipmentOptions.slice(1).map(option => (
                            <option key={option} value={option}>{option}</option>
                        ))}
                    </select>
                    {errors.equipment && <p className="mt-1 text-sm text-red-600">{errors.equipment}</p>}
                </div>

                {/* Personnel */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="inline w-4 h-4 mr-2"/>
                        {t('contact.form.personnel.title')}
                    </label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="range"
                            name="personnel"
                            min="1"
                            max="50"
                            value={formData.personnel}
                            onChange={handleInputChange}
                            className="flex-1"
                        />
                        <span className="text-lg font-medium text-gray-700">{formData.personnel}</span>
                    </div>
                </div>

                {/* Dresscode */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.form.dressCode.title')}
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        {dresscodeOptions.map(option => (
                            <label key={option.id} className="cursor-pointer">
                                <input
                                    type="radio"
                                    name="dresscode"
                                    value={option.id}
                                    checked={formData.dresscode === option.id}
                                    onChange={handleInputChange}
                                    className="sr-only"
                                />
                                <div className={`border-2 rounded-lg p-4 text-center transition-colors ${
                                    formData.dresscode === option.id
                                        ? 'border-blue-500 bg-blue-50'
                                        : 'border-gray-300 hover:border-gray-400'
                                }`}>
                                    <div
                                        className="w-20 h-24 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                                        {option.image ? (
                                            <img
                                                src={option.image}
                                                alt={option.label}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <User className="w-8 h-8 text-gray-400"/>
                                        )}
                                    </div>
                                    <p className="text-sm font-medium">{option.label}</p>
                                </div>
                            </label>
                        ))}
                    </div>
                    {errors.dresscode && <p className="mt-1 text-sm text-red-600">{errors.dresscode}</p>}
                </div>

                {/* Notes */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        <StickyNote className="inline w-4 h-4 mr-2"/>
                        {t('contact.form.notes.title')}
                    </label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.notes.placeholder')}
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6LcseH0rAAAAALgzFvPeoHXekQQZprFvccWG2R4t"
                        onChange={handleCaptchaChange}
                    />
                    {errors.captcha && <p className="mt-1 text-sm text-red-600">{errors.captcha}</p>}
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-green-600">
                        <CheckCircle className="w-5 h-5"/>
                        <span>{t('contact.form.notifications.success')}</span>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-red-600">
                        <AlertCircle className="w-5 h-5"/>
                        <span>{t('contact.form.notifications.error')}</span>
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-3 px-4 rounded-md hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin"/>
                            <span>{t('contact.form.operations.loading')}</span>
                        </>
                    ) : (
                        <span>{t('contact.form.submitButton')}</span>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ContactForm;