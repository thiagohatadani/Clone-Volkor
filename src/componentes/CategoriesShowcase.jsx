import React from "react";
import GridImage1 from "../images/GridImages/GridImage1.png";
import GridImage2 from "../images/GridImages/GridImage2.png";
import GridImage3 from "../images/GridImages/GridImage3.png";
import GridImage4 from "../images/GridImages/GridImage4.png";
import GridImage5 from "../images/GridImages/GridImage5.png";

const CategoriesShowcase = () => {
  return (
    <section>
        {/* Grid 1 */}
        <div className="grid gap-4 py-3 px-20 md:px-36 xl:px-60 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-auto-rows">
          {/* Card 1 */}
          <div className=" 2xl:aspect-auto 2xl:max-h-[32rem] relative w-full h-full aspect-square md:aspect-[16/9] lg:aspect-square shadow-lg overflow-hidden rounded-md group md:col-span-2 lg:col-span-2 lg:row-span-2 2xl:h-full">
            <a href="#">
              <div className="absolute inset-0 bg-gray-500 z-0"></div>
              <div
                className="absolute inset-0 bg-cover bg-center z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90 object-scale-down"
                style={{ backgroundImage: `url(${GridImage1})` }}
              ></div>
              <div className="absolute bottom-0 left-0 w-full flex p-4 z-20 text-white">
                <div>
                  <h3 className="text-lg font-bold">Título do Card</h3>
                  <p className="text-sm transition-all duration-300 border-b-2 border-transparent group-hover:border-white group-hover:ease-in-out group-hover:duration-500">
                    Descrição curta do card.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Card 2 */}
          <div className=" 2xl:max-h-[16rem] 2xl:aspect-[16/9] relative aspect-square shadow-lg overflow-hidden rounded-md group lg:col-span-1 lg:row-span-1 2xl:h-full">
            <a href="#">
              <div className="absolute inset-0 bg-gray-500 z-0"></div>
              <div
                className="absolute inset-0 bg-cover bg-center z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
                style={{ backgroundImage: `url(${GridImage2})` }}
              ></div>
              <div className="absolute bottom-0 left-0 w-full flex p-4 z-20 text-white">
                <div>
                  <h3 className="text-lg font-bold">Título do Card</h3>
                  <p className="text-sm transition-all duration-300 border-b-2 border-transparent group-hover:border-white group-hover:ease-in-out group-hover:duration-500">
                    Descrição curta do card.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Card 3 */}
          <div className=" 2xl:max-h-[16rem] 2xl:aspect-[16/9] relative aspect-square shadow-lg overflow-hidden rounded-md group lg:col-span-1 lg:row-span-1 2xl:h-full">
            <a href="#">
              <div className="absolute inset-0 bg-gray-500 z-0"></div>
              <div
                className="absolute inset-0 bg-cover bg-center z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
                style={{ backgroundImage: `url(${GridImage3})` }}
              ></div>
              <div className="absolute bottom-0 left-0 w-full flex p-4 z-20 text-white">
                <div>
                  <h3 className="text-lg font-bold">Título do Card</h3>
                  <p className="text-sm transition-all duration-300 border-b-2 border-transparent group-hover:border-white group-hover:ease-in-out group-hover:duration-500">
                    Descrição curta do card.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Grid 2*/}
        <div className="grid gap-4 px-20 md:px-36 xl:px-60 grid-cols-1 md:grid-cols-2 md:auto-rows-min lg:grid-cols-2 lg:grid-rows-2">
          {/* Card 4*/}
          <div className="lg:max-h-[40rem] relative aspect-square md:aspect-[16/9] lg:aspect-auto shadow-lg overflow-hidden rounded-md group md:col-span-2 group md:row-span-2 lg:col-span-1 lg:row-span-2">
            <a href="#">
              <div className="absolute inset-0 bg-gray-500 z-0"></div>
              <div
                className="absolute inset-0 bg-cover bg-center z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
                style={{ backgroundImage: `url(${GridImage4})` }}
              ></div>
              <div className="absolute bottom-0 left-0 w-full flex p-4 z-20 text-white">
                <div>
                  <h3 className="text-lg font-bold">Título do Card</h3>
                  <p className="text-sm transition-all duration-300 border-b-2 border-transparent group-hover:border-white group-hover:ease-in-out group-hover:duration-500">
                    Descrição curta do card.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Card 5*/}
          <div className="lg:aspect-[16/10] relative aspect-square shadow-lg overflow-hidden rounded-md group lg:col-span-1 lg:row-span-1">
            <a href="#">
              <div className="absolute inset-0 bg-gray-500 z-0"></div>
              <div
                className="absolute inset-0 bg-cover bg-center z-10 transform transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
                style={{ backgroundImage: `url(${GridImage5})` }}
              ></div>
              <div className="absolute bottom-0 left-0 w-full flex p-4 z-20 text-white">
                <div>
                  <h3 className="text-lg font-bold">Título do Card</h3>
                  <p className="text-sm transition-all duration-300 border-b-2 border-transparent group-hover:border-white group-hover:ease-in-out group-hover:duration-500">
                    Descrição curta do card.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
    </section>
  );
};

export default CategoriesShowcase;
