import React, { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Product1 from "../images/Products/produto1.jpg";
import Product2 from "../images/Products/produto2.jpg";
import Product3 from "../images/Products/produto3.jpg";
import Product4 from "../images/Products/produto4.jpg";
import Product5 from "../images/Products/produto5.jpg";
import Product6 from "../images/Products/produto6.jpg";
import Product7 from "../images/Products/produto7.jpg";
import Product8 from "../images/Products/produto8.jpg";
import Product7hover from "../images/Products/produto7hover.jpg";
import Product8hover from "../images/Products/produto8hover.jpg";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: Product1,
      hoverImage: Product6,
      title: "Slide 1",
      description: "Descrição do Produto 2",
      isOnSale: false,
      isLowStock: false,
    },
    {
      id: 2,
      image: Product2,
      hoverImage: Product6,
      title: "Slide 2",
      description: "Descrição do Produto 2",
      isOnSale: false,
      isLowStock: true,
    },
    {
      id: 3,
      image: Product3,
      hoverImage: Product6,
      title: "Slide 3",
      description: "Descrição do Produto 3",
      isOnSale: true,
      isLowStock: true,
    },
    {
      id: 4,
      image: Product4,
      hoverImage: Product6,
      title: "Slide 4",
      description: "Descrição do Produto 4",
      isOnSale: false,
      isLowStock: false,
    },
    {
      id: 5,
      image: Product5,
      hoverImage: Product6,
      title: "Slide 5",
      description: "Descrição do Produto 5",
      isOnSale: false,
      isLowStock: true,
    },
    {
      id: 6,
      image: Product6,
      title: "Slide 6",
      description: "Descrição do Produto 6",
      isOnSale: true,
      isLowStock: false,
    },
    {
      id: 7,
      image: Product7,
      hoverImage: Product7hover,
      title: "Slide 7",
      description: "Descrição do Produto 7",
      isOnSale: false,
      isLowStock: true,
    },
    {
      id: 8,
      image: Product8,
      hoverImage: Product8hover,
      title: "Slide 8",
      description: "Descrição do Produto 8",
      isOnSale: true,
      isLowStock: true,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredSlide, setHoveredSlide] = useState(null);
  const [dragStart, setDragStart] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(1);

  // Lógica de navegação
  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.max(0, slides.length - slidesPerView) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev >= slides.length - slidesPerView ? 0 : prev + 1
    );
  };

  // Efeito para ajustar o slide atual quando slidesPerView muda
  useEffect(() => {
    const maxSlide = Math.max(0, slides.length - slidesPerView);
    setCurrentSlide((prev) => Math.min(prev, maxSlide));
  }, [slidesPerView]);

  useEffect(() => {
    const updateSlidesPerView = () => {
      let newSlidesPerView;
      if (window.innerWidth >= 1500) {
        newSlidesPerView = 5;
      } else if (window.innerWidth >= 1280) {
        newSlidesPerView = 4;
      } else if (window.innerWidth >= 1024) {
        newSlidesPerView = 3;
      } else {
        newSlidesPerView = 1;
      }

      setSlidesPerView(newSlidesPerView);
      const maxSlide = Math.max(0, slides.length - newSlidesPerView);
      setCurrentSlide((prev) => Math.min(prev, maxSlide));
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  // Funções para drag
  const handleStart = (clientX) => {
    setDragStart(clientX);
    setDragging(true);
  };

  const handleEnd = (clientX) => {
    if (dragStart === null || !dragging) return;
    const dragDistance = clientX - dragStart;
    if (dragDistance > 50) handlePrev();
    else if (dragDistance < -50) handleNext();
    setDragStart(null);
    setDragging(false);
  };

  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleMouseMove = (e) => {
    if (dragging) e.preventDefault();
  };
  const handleMouseUp = (e) => handleEnd(e.clientX);
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => handleEnd(e.changedTouches[0].clientX);

  return (
    <div className="relative mx-auto px-5 py-20">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#6AA8C9]"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>

      <div className="text-center mb-10 relative z-10">
        <h2 className="text-3xl font-bold mb-4">
          Título do Carousel de Produtos
        </h2>
        <p className="text-lg text-gray-600">Shop All Products</p>
        <div className="hidden sm:flex bottom-10 left-1/2 justify-between z-10">
          <button
            onClick={handlePrev}
            className="border-2 border-gray-300 rounded-full transition-colors duration-1000 hover:border-[#446CDB] flex items-center justify-center w-10 h-10"
          >
            <FaArrowLeftLong />
          </button>
          <button
            onClick={handleNext}
            className="border-2 border-gray-300 rounded-full transition-colors duration-1000 hover:border-[#446CDB] flex items-center justify-center w-10 h-10"
          >
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      {/* Container do Carousel */}
      <div className="relative overflow-hidden z-10 mb-10">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)`,
            gap: "1.25rem", // Espaçamento de 20px entre os slides
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 flex flex-col items-center h-auto space-y-4 relative "
              style={{
                width: `calc(${100 / slidesPerView}% - 1.25rem)`,
                cursor: dragging ? "grabbing" : "pointer",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => {
                setDragging(false);
                setHoveredSlide(null);
              }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onMouseEnter={() => setHoveredSlide(slide.id)}
            >
              <div className="transition-transform duration-300 hover:scale-105 shadow-md rounded-md">
                {/* Container da imagem */}
                <div className="h-96 w-full flex justify-center items-center relative">
                  {/* Badges */}
                  {slide.isOnSale && (
                    <span className="absolute top-10 left-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded z-20">
                      Sale!
                    </span>
                  )}
                  {slide.isLowStock && (
                    <span className="absolute bottom-10 right-2 bg-purple-600 text-white text-xs font-bold p-3 rounded z-20">
                      LOW STOCK!!!
                    </span>
                  )}

                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full rounded-lg transition-opacity duration-300"
                    style={{
                      opacity:
                        hoveredSlide === slide.id && slide.hoverImage ? 0 : 1,
                    }}
                    draggable="false"
                  />
                  {slide.hoverImage && (
                    <img
                      src={slide.hoverImage}
                      alt={slide.title}
                      className="h-full rounded-lg absolute top-0 left-0 transition-opacity duration-300"
                      style={{
                        opacity: hoveredSlide === slide.id ? 1 : 0,
                      }}
                      draggable="false"
                    />
                  )}
                </div>
                {/* Texto do card */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{slide.title}</h3>
                  <p className="text-base  pb-5">
                    {hoveredSlide === slide.id && slide.hoverText
                      ? slide.hoverText
                      : slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
