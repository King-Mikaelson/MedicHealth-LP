import doctorImage from "../../public/finalHeader.png";
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
      {
      /* <swiper-container ref={swiperElRef} class="mySwiper" 
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
                    Virtual Medical Weight Loss
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[#545454] font-Inter font-light text-sm pt-2">
                    Get prescribed affordable GLP-1 weight loss medication Semaglutide
or Tirzepatide remotely and delivered to your doorstep. All
medications are prescribed by licensed providers.
                    </p>

                      <p>Weight Loss, GLP-1, Health &amp; Wellness, Nutrition, Exercise.</p>

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
                    Virtual Medical Weight Loss
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                  <p className="text-[#545454] font-Inter font-light text-sm pt-2">
                    Get prescribed affordable GLP-1 weight loss medication Semaglutide
or Tirzepatide remotely and delivered to your doorstep. All
medications are prescribed by licensed providers.
                    </p>
                    <p>Weight Loss, GLP-1, Health &amp; Wellness, Nutrition, Exercise.</p>

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
      </swiper-container> */}

      <main
              className={`md:h-full md:py-24 lg:h-[100vh] h-[100vh] fade-in-image w-full flex flex-col justify-center bg-[rgba(25,27,251,0.03)]`}
            >
              <div className="flex flex-col md:flex-row w-full justify-between items-center lg:gap-10 mt-16  md:mt-24  px-4  lg:px-24 mx-0  ">
                <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col order-2 md:order-1">
                  <div className="">
                    <h3 className="text-[#000000] font-IBMPlex lg:text-[2rem] xl:text-[3.375rem] text-[1.6875rem]  font-bold py-1 md:py-3">
                    Virtual Medical Weight Loss
                    </h3>
                  </div>

                  <div className="flex flex-col gap-2">
                    <p className="text-[#545454] font-Inter font-light text-sm pt-2">
                    Get prescribed affordable GLP-1 weight loss medication Semaglutide
or Tirzepatide remotely and delivered to your doorstep. All
medications are prescribed by licensed providers.
                    </p>

                      <p>Weight Loss, GLP-1, Health &amp; Wellness, Nutrition, Exercise.</p>

                      <Link href="https://ehr.charmtracker.com/publicCal.sas?method=getCal&digest=f8b9e1018e5d9f476ad71e51d09a1c8cf5723bb99d93966edf259d4546b220a7ef59d40e1bb127af6a5bb1a648a7e1b1d95fcbc3b76e32a2">
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
                  <Image 
                  src={doctorImage} alt="wellness and medical Health"   
                   priority={true}
/>
                </div>
              </div>
      </main>
    </>
  );
}

export default Hero;
