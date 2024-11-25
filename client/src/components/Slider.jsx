import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";



const Slider = () => {
    const slides = [
      { id: 1, img: "https://i0.wp.com/fusiona.cl/wp-content/uploads/imagenes-ia-sueno-o-pesadilla.webp", alt: "Slide 1" },
      { id: 2, img: "url_imagen_2.jpg", alt: "Slide 2" },
      { id: 3, img: "url_imagen_3.jpg", alt: "Slide 3" },
    ];
  
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // Agrega los módulos aquí
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              src={slide.img}
              alt={slide.alt}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  };
  
  export default Slider;
