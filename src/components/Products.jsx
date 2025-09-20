import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Container from "./common/Container";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProductCard = ({ name, imageUrl, hasBadge = false }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
    <div className="relative mb-4 bg-slate-100 p-4 rounded-lg flex items-center justify-center h-56">
      <img
        src={imageUrl}
        alt={name}
        className="max-h-full max-w-full aspect-square object-cover"
      />
      {hasBadge && (
        <div className="absolute bottom-2 right-2 bg-red-600 text-white text-xs font-bold p-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM11 16H8V11H11V16ZM16 16H13V11H16V16ZM16 9H8V7H16V9Z" />
          </svg>
        </div>
      )}
    </div>
    <h3 className="font-bold text-slate-800 group-hover:text-[#27ad4c]">
      {name}
    </h3>
  </div>
);

const Products = () => {
  const products = [
    { name: "Motherboard", imageUrl: "/assets/images/motherboard.png" },
    { name: "Keyboard", imageUrl: "/assets/images/keyboard.png" },
    { name: "Motherboard", imageUrl: "/assets/images/motherboard-2.png" },
    { name: "RAM", imageUrl: "/assets/images/ram.png", hasBadge: true },
    { name: "Laptop", imageUrl: "/assets/images/laptop.png", hasBadge: true },
    { name: "Joystick", imageUrl: "/assets/images/joystick.png", hasBadge: true },
    { name: "Processor", imageUrl: "/assets/images/processor.png", hasBadge: true },
  ];

  return (
    <section className="lg:py-24 md:py-16 py-10 bg-slate-50">
      <Container>
        {/* Header with animation */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-between items-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            New Products
          </h2>
          <a
            href="#"
            className="flex items-center space-x-2 text-slate-600 hover:text-[#27ad4c] font-medium"
          >
            <div className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center">
              <GoArrowUpRight />
            </div>
            <span>View All Product</span>
          </a>
        </motion.div>

        {/* Swiper with animated slides */}
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper pb-20!"
          breakpoints={{
            1024: { slidesPerView: 5, spaceBetween: 30 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            480: { slidesPerView: 1, spaceBetween: 10 },
            0: { slidesPerView: 1, spaceBetween: 10 },
          }}
        >
          {products.map((product, i) => (
            <SwiperSlide key={product.name}>
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
              >
                <ProductCard {...product} />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Products;
