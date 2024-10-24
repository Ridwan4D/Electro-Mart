import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { MdModeEdit } from "react-icons/md";
import SliderModal from './SliderModal';
import useSlideImage from '../../../Hooks/useSlideImage';
import useRoll from '../../../Hooks/useRoll';
import { Link } from 'react-router-dom';

const LeftSlide = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [sliderImages] = useSlideImage();
    const [role] = useRoll();

    const openModal = () => {
        setModalOpen(true);
    };

    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {sliderImages.slice(3, 7).map((slide, idx) => (
                    <SwiperSlide key={idx}>
                        <div className="relative">
                            <img
                                src={slide.url}
                                alt={`slide ${idx + 1}`}
                                className="w-full lg:min-h-[400px] md:max-h-[300px] lg:max-h-[500px] h-[50vh] md:h-auto rounded-lg object-contain md:object-right lg:object-contain border border-gray-400"
                            />
                            {/* Display the slide title and button centrally */}
                            <div className="absolute inset-0 flex flex-col items-start justify-center space-y-4 md:left-5 lg:left-8 px-1">
                                {slide.title !== "None" && <h2 className="text-sm md:text-base md:font-medium lg:text-lg lg:font-semibold lg:w-1/2 text-white bg-black/50 p-4 rounded-lg">
                                    {slide.title}
                                </h2>}

                                <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
                                    Shop Now
                                </Link>
                            </div>
                            {/* Edit button for admin */}
                            {role === "admin" && (
                                <span
                                    onClick={() => openModal(`Edit content for slide ${idx + 1}`)}
                                    className="absolute top-3 right-3 border-2 p-2 rounded-full bg-white/30 hover:bg-slate-700 hover:text-gray-300 cursor-pointer"
                                >
                                    <MdModeEdit className="text-xl" />
                                </span>
                            )}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <SliderModal
                isOpen={isModalOpen}
                onClose={() => setModalOpen(false)}
            />
        </div>
    );
};

export default LeftSlide;
