import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Slider = () => {
    const slides = [
        { id: 1, img: "https://i0.wp.com/fusiona.cl/wp-content/uploads/imagenes-ia-sueno-o-pesadilla.webp", alt: "Slide 1" },
        { id: 2, img: "https://media.telefonicatech.com/telefonicatech/uploads/2023/12/hero_post_ia_generative_ai_portrait.jpg", alt: "Slide 2" },
        { id: 3, img: "https://marketing4ecommerce.net/wp-content/uploads/2024/02/ias-generadoras-de-imagenes.jpg", alt: "Slide 3" },
    ];

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            style={{
                display: "flex", // Usar flexbox para centrar el slider
                justifyContent: "center",
                alignItems: "center",
                height: "100%", // Asegurar que ocupe todo el contenedor
            }}
        >
            {slides.map((slide) => (
                <SwiperSlide
                    key={slide.id}
                    style={{
                        display: "flex", // Flexbox en cada slide para centrar la imagen
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={slide.img}
                        alt={slide.alt}
                        style={{
                            width: "750px",
                            height: "450px",
                            objectFit: "cover", // Ajusta cómo se muestra la imagen si no tiene proporciones exactas
                        }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
