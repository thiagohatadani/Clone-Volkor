import React from "react";
import Fan1 from "../images/FanImages/fan1.webp";
import Fan2 from "../images/FanImages/fan2.webp";
import Fan3 from "../images/FanImages/fan3.webp";
import Fan4 from "../images/FanImages/fan4.webp";
import Fan5 from "../images/FanImages/fan5.webp";

const Galeria = () => {
  return (
    <>
      <div className="relative mx-auto px-5 py-20">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[#2079A3] z-0"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#E1E9FE] z-0"></div>
        <h2 className="relative z-10 text-center text-5xl font-bold">
          Título da Galeria
        </h2>
        {/* Grid 1 */}
        <div className="relative z-10 grid grid-cols-12 gap-4 mt-10 items-end">
          {/* Imagem 1 */}
          <div className="col-start-2 col-end-7 flex justify-center items-end">
            <img
              src={Fan1}
              alt="Imagem Fan1"
              className="w-full object-cover shadow-lg"
            />
          </div>
          {/* Imagem 2 */}
          <div className="col-start-7 col-end-10 flex justify-center items-end">
            <img
              src={Fan2}
              alt="Imagem Fan2"
              className="w-full object-cover shadow-lg"
            />
          </div>
        </div>
        {/* Grid 2 */}
        <div className="relative z-10 grid grid-cols-12 gap-4 mt-4 items-start">
          {/* Imagem 3 */}
          <div className="col-start-3 col-end-5 flex justify-center items-start">
            <img
              src={Fan3}
              alt="Imagem Fan3"
              className="w-full h-auto aspect-[4/5] object-cover shadow-lg"
            />
          </div>
          {/* Imagem 4 */}
          <div className="col-start-5 col-end-8 flex justify-center items-start">
            <img
              src={Fan4}
              alt="Imagem Fan4"
              className="w-full h-auto shadow-lg"
            />
          </div>
          {/* Imagem 5 */}
          <div className="col-start-8 col-end-11 flex justify-center items-start">
            <img
              src={Fan5}
              alt="Imagem Fan5"
              className="w-full h-auto shadow-lg"
            />
          </div>
        </div>
        <h3 className="relative text-center text-5xl font-bold text-black py-14">
          <span className="relative z-10">
            @VOLKORX
            <span className="absolute z-[-1] left-1/2 top-[70%] w-full h-4 bg-[#FC0E51] transform -translate-x-1/2"></span>
          </span>
        </h3>
        {/* Formulário */}
        <div className="z-10 relative bg-black text-white mx-auto p-7 w-[80%] md:w-[575px] md:h-[323px] border border-gray-600 rounded-lg">
          <p className="text-gray-300 mb-4">
            Subscribe to the Galactic Newsletter and stay updated.
          </p>
          <p className="text-gray-400 font-semibold mb-4">
            Enter your email address to subscribe
            <span className="text-red-500">*</span>
          </p>
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-500 w-full px-3 py-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-opacity-50"
          />
          <p className="text-gray-300 mb-1">
            Provide your email address to subscribe. For e.g
          </p>
          <p className="text-gray-300 mb-4">you@example.com</p>
          <button className="bg-gray-700 text-white py-3 px-5 rounded font-semibold text-lg hover:bg-blue-700 hover:-translate-y-1 transform transition-transform duration-300 ease-in-out">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </>
  );
};

export default Galeria;
