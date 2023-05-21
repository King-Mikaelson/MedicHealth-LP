import doctorImage from "../../public/doctorImage.png";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';

register();

// Import Swiper styles
import "swiper/css";


function Hero() {

  const swiperElRef = useRef(null);
  return (
      <>
      <swiper-container ref={swiperElRef} class="mySwiper" 
    autoplay-delay="4000" effect="fade" autoplay-disable-on-interaction="true">
          <swiper-slide>
            <main
              id="first-section"
              className={`md:h-[100vh] lg:h-[100vh] h-[100vh] fade-in-image w-full flex flex-col justify-center bg-[rgba(25,27,251,0.03)]`}
            >
              <div className="flex flex-col md:flex-row w-full justify-between items-center lg:gap-10 mt-16  md:mt-24  px-4  lg:px-24 mx-0  ">
                <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col order-2 md:order-1">
                  <div className="">
                    <h3 className="text-[#000000] font-IBMPlex lg:text-[2rem] xl:text-[3.375rem] text-[1.6875rem]  font-bold py-1 md:py-3">
                      Medical Weight Loss & Biodentical Hormone Replacemt
                      Therapy
                    </h3>
                  </div>

                  <div>
                    <p className="text-[#545454] font-Inter font-light text-sm pt-2">
                      Lorem ipsum dolor sit amet consectetur. A dignissim sed
                      cras eu at quam amet facilisi. Nunc mauris euismod integer
                      dui auctor. Id ac gravida eu cras ullamcorper facilisis
                      et. Mauris imperdiet auctor elementum tellus urna
                      facilisis ac.
                    </p>

                    <Link href="/">
                      <button
                        type="button"
                        className="bg-[#191BFB]  py-2 lg:py-3 my-4 lg:my-14 px-3  md:px-6  flex justify-center items-center rounded-lg shadow-[2px,4px,4px,rgba(0,0,0,0.25)]"
                      >
                        <p className="text-[#FFFFFF] text-[1.2rem] lg:text-[1.625rem] font-Poppins font-semibold ">
                          Make Appointment
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="lg:w-2/4 order-1 md:order-2">
                  <Image src={doctorImage} alt="wellness and medical Health" />
                </div>
              </div>
            </main>
            </swiper-slide>
            <swiper-slide>
            <main
              id="first-section"
              className={` md:h-[100vh]  lg:h-[100vh] h-[100vh] w-full flex flex-col justify-center bg-[url('/heroImage.png')]  bg-no-repeat bg-cover bg-center`}
            >
              <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:gap-10 mt-16 md:mt-24  px-4  lg:px-24 mx-0  ">
                <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col order-2 lg:order-1">
                  <div className="">
                    <h3 className="text-[#000000] font-IBMPlex lg:text-[2rem] xl:text-[3.375rem] text-[1.6875rem]  font-bold py-1 md:py-3">
                      Medical Weight Loss & Biodentical Hormone Replacemt
                      Therapy
                    </h3>
                  </div>

                  <div>
                    <p className="text-[#545454] font-Inter font-light text-sm pt-2">
                      Lorem ipsum dolor sit amet consectetur. A dignissim sed
                      cras eu at quam amet facilisi. Nunc mauris euismod integer
                      dui auctor. Id ac gravida eu cras ullamcorper facilisis
                      et. Mauris imperdiet auctor elementum tellus urna
                      facilisis ac.
                    </p>

                    <Link href="/">
                      <button
                        type="button"
                        className="bg-[#191BFB]  py-2 lg:py-3 my-4 lg:my-14 px-3  md:px-6  flex justify-center items-center rounded-lg shadow-[2px,4px,4px,rgba(0,0,0,0.25)]"
                      >
                        <p className="text-[#FFFFFF] text-[1.2rem] lg:text-[1.625rem] font-Poppins font-semibold ">
                          Make Appointment
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
            </swiper-slide>
      </swiper-container>
    </>
  );
}

export default Hero;
