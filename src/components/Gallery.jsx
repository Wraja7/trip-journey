// src/components/Gallery.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Gallery() {
  const images = [
    "/images/image1.jpeg",
    "/images/image2.jpeg",
    "/images/image3.jpeg",
    "/images/image4.jpeg",
    "/images/image5.jpeg",
    "/images/image6.jpeg",
    "/images/image7.jpeg",
    "/images/image8.jpeg",
    "/images/image9.jpeg",
    "/images/image10.jpeg",
    "/images/image11.jpeg",
    "/images/image12.jpeg",
    "/images/image13.jpeg",
    "/images/image14.jpeg",
  ];

  return (
    <section
      id="gallery"
      className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
          Gallery 📸
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          A collection of our favorite captures from the trip.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
  <div className="overflow-hidden rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transform transition duration-500">
    <img
      src={src}
      alt={`Trip ${i + 1}`}
      className="w-full h-80 object-cover" 
      loading="lazy"
    />
  </div>
</SwiperSlide>

          ))}
        </Swiper>
      </div>
    </section>
  );
}


