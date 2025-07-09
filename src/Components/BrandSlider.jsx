import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BrandSlider = ({ brands }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const itemsPerSlide = typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3; // 1 бренд на мобілці, 3 — на десктопі
    const totalSlides = Math.ceil(brands.length / itemsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-8 px-4 sm:px-8">
            <div className="relative">
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                    <ChevronLeft size={20} className="text-gray-600" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors"
                >
                    <ChevronRight size={20} className="text-gray-600" />
                </button>

                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                            <div key={slideIndex} className="w-full flex-shrink-0">
                                <div className="flex justify-center items-center space-x-4 sm:space-x-8">
                                    {brands
                                        .slice(
                                            slideIndex * itemsPerSlide,
                                            (slideIndex + 1) * itemsPerSlide
                                        )
                                        .map((brand) => (
                                            <div
                                                key={brand.name}
                                                className="flex-1 max-w-xs flex justify-center items-center rounded-lg p-4 sm:p-6 h-28 sm:h-32 transition-colors"
                                            >
                                                <img
                                                    src={brand.src}
                                                    alt={brand.name}
                                                    className="max-h-20 max-w-full object-contain transition-all duration-300
                                                    sm:hover:grayscale-0 sm:grayscale hover:grayscale-0"
                                                />
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center mt-6 space-x-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSlide ? 'bg-gray-800' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandSlider;
