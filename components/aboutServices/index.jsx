import Image from "next/image";
import WellnessPic from "../../public/About.png";
import HowWeWork from "../../public/HowWeWork.png";
import drugPic from "../../public/drugPic.png";
import expertPic from "../../public/expertPic.png";
import telePic from "../../public/telePic.png";
import heartPic from "../../public/heartPic.png";
import PillPic from "../../public/PillPic.png";
import InjectionPic from "../../public/InjectionPic.png";
import TherapyPic from "../../public/TherapyPic.png";
import HeartBeatPic from "../../public/HeartBeatPic.png";
import WeightLossPic from "../../public/WeightLossPic.png";
import PersonPic from "../../public/PersonPic.png";
import Map from "../../public/Map.png";
import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {AiFillCheckCircle} from "react-icons/ai";
import Link from "next/link";

function AboutServices() {
  const [readMore, setReadMore] = useState(false);
    const [readMore2,setReadMore2]=useState(false);
    const [readMore3,setReadMore3]=useState(false);
    const [readMore4,setReadMore4]=useState(false);
  return (
    <main className="mt-28 w-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-10  px-4 lg:px-24 mx-0  ">
        <div className="lg:w-2/4">
          <Image src={WellnessPic} alt="wellness and medical Health" />
        </div>

        <div className="lg:w-2/4 self-start flex justify-center lg:items-start flex-col">
          <div className="relative">
            <div class="hidden absolute top-8 lg:block flex-grow h-1 w-32 border-t-2 bg-[#49AD09]"></div>
            <h2 className="py-4 text-[#1C1C1C] lg:px-36  font-Poppins lg:font-bold font-medium lg:text-base text-2xl ">
              <span className="text-[#49AD09]">About </span>MEDICHEALTH <br />&
              WELLNESS
            </h2>
          </div>
          <p className="text-[#545454]  text-[1rem] font-Poppins font-normal  lg:text-[1.625em]">
            Lorem ipsum dolor sit amet consectetur. Integer adipiscing aliquam
            tincidunt mi dignissim. Amet nunc parturient volutpat egestas amet
            aliquam egestas in. Cras pharetra ac vitae malesuada faucibus. Felis
            viverra non lectus et purus mollis amet quis. Duis tempor nullam
            varius facilisi malesuada varius eu lorem suspendisse. Posuere nulla
            sit scelerisque auctor nunc. Pretium vulputate vestibulum in
            pharetra ipsum sagittis sit.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center lg:py-16 pt-16 pb-0   px-4 lg:px-24 mx-0  ">
        <div className="relative flex flex-col justify-center">
          <div class="hidden absolute top-4 left-6 lg:block flex-grow h-1 w-44 border-t-2 bg-[#49AD09]"></div>
          <h2 className="self-end text-[#49AD09] text-base font-IBMPlex font-bold py-2">
            Our Services
          </h2>
          <h3 className="text-[#1C1C1C] text-[1.5rem] lg:text-[2.5rem] font-IBMPlex font-normal py-0 mx-0 flex flex-col items-center justify-center">
            We have the best <br />
            <span>quality for you</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center pt-16 pb-32 gap-6">
          <div className="flex flex-col justify-center items-center">
            <Image src={drugPic}  className="lg:pb-12 pb-6" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="lg:text-[1.75em] text-[1.25rem] font-Poppins font-medium text-[#213D39] text-center">Medical <br/> weightloss</h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#191BFB] cursor-pointer"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#C9C9C9] cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src={heartPic} className="lg:pb-12 pb-6" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="lg:text-[1.75em] text-[1.25rem] font-Poppins font-medium text-[#213D39] text-center">Hormone  <br/> Replacement</h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore2 ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore2(!readMore2)}
                    size={20}
                    className="text-[#191BFB] cursor-pointer"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore2(!readMore2)}
                    size={20}
                    className="text-[#C9C9C9] cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src={expertPic}  className="lg:pb-12 pb-6" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="lg:text-[1.75em] text-[1.25rem] font-Poppins font-medium text-[#213D39] text-center">Expert <br/>Practitioners</h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore3 ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore3(!readMore3)}
                    size={20}
                    className="text-[#191BFB] cursor-pointer"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore3(!readMore3)}
                    size={20}
                    className="text-[#C9C9C9] cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src={telePic}   className="lg:pb-12 pb-6" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="lg:text-[1.75em] text-[1.25rem] font-Poppins font-medium text-[#213D39] text-center">Tele <br/>Health </h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore4 ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore4(!readMore4)}
                    size={20}
                    className="text-[#191BFB] cursor-pointer"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore4(!readMore4)}
                    size={20}
                    className="text-[#C9C9C9] cursor-pointer"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

                
                
    <div className="flex flex-col justify-center items-center  px-4 lg:px-24  mx-0  ">
     <h2 className="text-[#1C1C1C] lg:text-[2.5rem] text-[1.5rem] font-medium font-IBMPlex pb-8">How we work</h2>

     <div className="flex flex-col lg:flex-row w-full justify-between items-center lg:gap-32 gap-6">
        <div className="lg:w-2/4">
          <Image src={HowWeWork} alt="How we Work" />
        </div>

        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col">
            <div className="flex items-center py-4 lg:ml-[-20rem]">
            <Image src={InjectionPic} className="lg:w-[81px] lg:h-[84.62px]" alt="injection"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal lg:text-[2rem] text-[1.25rem] leading-[1.375em] py-2">
                Lab Work
                </h4>
                <p className="text-[#545454] font-Poppins font-normal text-base leading-[1.375em]">Lorem ipsum dolor sit amet consectetur. Feugiat ultrices felis orci nisl. Elit
 platea felis erat viverra curabitur quis ornare. Lorem cras morbi nisi enim lectus 
tincidunt fusce. Est augue pellentesque luctus quisque.</p>
                </div>
            </div>

            <div className="flex items-center py-4 lg:ml-[-10rem]">
            <Image src={PersonPic} alt="injection"   className="lg:w-[81px] lg:h-[84.62px]"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal lg:text-[2rem] text-[1.25rem] leading-[1.375em]  py-2">
                Consultation
                </h4>
                <p className="text-[#545454] font-Poppins font-normal text-base leading-[1.375em]">Lorem ipsum dolor sit amet consectetur. Feugiat ultrices felis orci nisl. Elit
 platea felis erat viverra curabitur quis ornare. Lorem cras morbi nisi enim lectus 
tincidunt fusce. Est augue pellentesque luctus quisque.</p>
                </div>
            </div>

            <div className="flex items-center py-4">
            <Image src={PillPic} alt="injection"   className="lg:w-[81px] lg:h-[84.62px]"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal lg:text-[2rem] text-[1.25rem] leading-[1.375em]  py-2">
                Treatment
                </h4>
                <p className="text-[#545454] font-Poppins font-normal text-base leading-[1.375em]">Lorem ipsum dolor sit amet consectetur. Feugiat ultrices felis orci nisl. Elit
 platea felis erat viverra curabitur quis ornare. Lorem cras morbi nisi enim lectus 
tincidunt fusce. Est augue pellentesque luctus quisque.</p>
                </div>
            </div>

            <div className="flex items-center py-4  lg:ml-[-10rem]">
            <Image src={HeartBeatPic} alt="injection"  className="lg:w-[81px] lg:h-[84.62px]"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal lg:text-[2rem] text-[1.25rem] leading-[1.375em]  py-2">
                Follow up
                </h4>
                <p className="text-[#545454] font-Poppins font-normal text-base leading-[1.375em]">Lorem ipsum dolor sit amet consectetur. Feugiat ultrices felis orci nisl. Elit
 platea felis erat viverra curabitur quis ornare. Lorem cras morbi nisi enim lectus 
tincidunt fusce. Est augue pellentesque luctus quisque.</p>
                </div>
            </div>
        </div>
      </div>
    </div>


    <div id="second-section" className="flex flex-col lg:flex-row w-full justify-between items-center gap-10 pt-20 lg:pt-36  px-4  lg:px-24 mx-0  ">

        <div className="lg:w-2/4 self-start flex lg:items-start flex-col order-2 lg:order-1">
            <div className="">
                <h2 className="text-[#49AD09] font-Manrope text-sm font-bold lg:py-2">Appointment</h2>
                <h3 className="text-[#000000] font-IBMPlex lg:text-5xl text-2xl font-medium lg:py-1">Medical Weight Loss</h3>
            </div>

            <div>
            <p className="text-[#545454] font-Poppins font-normal text-base pt-2">
            Lorem ipsum dolor sit amet consectetur. Praesent
            et aliquet magna pellentesque eget. Auctor ut sit
            hendrerit pellentesque fermentum in aliquam mauris 
             metus. Enim porttitor id condimentum tellus nec amet. 
            Eget enim sagittis vel condimentum felis adipi
          </p>

          <div className="flex flex-col py-6">
            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Back and Joints Pains</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Total Body Fat</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Poor Physical Activities</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Snoring</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Fatigue</p>
            </div>
          </div>

          <Link href="/">
                <button
                  type="button"
                  className='bg-[#191BFB] py-3 lg:px-6 px-3 flex justify-center items-center rounded-[10px]'
                >
                <p className='text-[#FFFFFF] text-base font-Manrope font-medium '>Book Weight Loss Consult</p>
                </button>
                </Link> 
            </div>
        </div>

        <div className="lg:w-2/4 order-1 lg:order-2">
          <Image src={WeightLossPic} alt="wellness and medical Health" />
        </div>
      </div>


      <div id="third-section"  className="flex flex-col lg:flex-row w-full justify-between items-center gap-10 pt-20 lg:pt-36  px-4 lg:px-24 mx-0  ">

        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col order-2 lg:order-1">
            <div className="">
                <h2 className="text-[#49AD09] font-Manrope text-sm font-bold lg:py-2">Appointment</h2>
                <h3 className="text-[#000000] font-IBMPlex lg:text-5xl text-2xl font-medium lg:py-1">Bioidentical Hormone
Replacemet Therapy</h3>
            </div>

            <div>
            <p className="text-[#545454] font-Poppins font-normal text-base pt-2">
            Medichealth Wellness provides Hormone replacement therapy
for women who are dealing with hormone drops or other 
hormonal imbalances.
          </p>

          <div className="flex flex-col py-6">
            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Hot Flash</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Mood Swings</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Weight Imbalance</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Low Libido</p>
            </div>

            <div className="flex  items-center py-2">
                <AiFillCheckCircle className="text-[#191BFB] text-2xl  mr-3" />
                <p className="text-[#121212] font-medium text-base font-Poppins">Brain Fog</p>
            </div>
          </div>

          <Link href="/">
                <button
                  type="button"
                  className='bg-[#191BFB] py-3 lg:px-10 px-4 flex justify-center items-center rounded-[10px]'
                >
                <p className='text-[#FFFFFF] text-base font-Manrope font-medium '>Book BHRT Consult</p>
                </button>
                </Link> 
            </div>
        </div>

        <div className="lg:w-2/4 self-end order-1 lg:order-2">
          <Image src={TherapyPic} alt="wellness and medical Health" />
        </div>
      </div>


      <div id="fourth-section"  className="blueBg h-full w-full  px-4 lg:px-24  mx-0 my-10 flex flex-col items-center justify-center ">
        <div className="flex flex-col justify-center items-center pt-16">
            <h2 className="text-base font-IBMPlex text-[#FFFFFF] font-normal py-2">LOCATION</h2>
            <h3 className="lg:text-5xl text-2xl font-IBMPlex text-[#FFFFFF] font-bold">Where we Operate</h3>
            <p className="text-base font-Poppins text-[#FFFFFF] font-normal text-center py-4">Our Telehealth services are unavailable to client in the following state
<br/>We are working to have our services available in all 50 states.</p>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center px-12 pb-16 mx-auto my-auto gap-6 lg:gap-0">


        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col text-[#FFFFFF] font-Poppins font-bold lg:text-[2rem] text-[1.25rem] mx-auto my-auto">

          <div className="flex flex-col w-full ">
          <div className="grid relative lg:grid-cols-[170px,1fr] grid-cols-[1fr,1fr]   justify-center items-center">
            <div className="absolute left-[-2rem] top-4 bg-[#FFFFFF] lg:h-3 h-2 rounded-full lg:w-3 w-2"></div>
            <p>Arizona</p>
            <p>Colorado </p>
          </div>

          <div className="grid lg:grid-cols-[170px,1fr] grid-cols-[1fr,1fr]    justify-center  items-center relative">
          <div  className="absolute left-[-2rem] top-4 bg-[#FFFFFF] lg:h-3 h-2 rounded-full lg:w-3 w-2"></div>
            <p>Hawaii</p>
            <p>Idaho </p>
          </div>


          <div className="grid lg:grid-cols-[170px,1fr] grid-cols-[1fr,1fr]   justify-center   items-center relative">
          <div  className="absolute left-[-2rem] top-4 bg-[#FFFFFF] lg:h-3 h-2 rounded-full lg:w-3 w-2"></div>
            <p> Kansas</p>
            <p>Michigan</p>
          </div>


          <div className="grid lg:grid-cols-[170px,1fr] grid-cols-[1fr,1fr]    justify-center    items-center relative">
          <div  className="absolute left-[-2rem] top-4 bg-[#FFFFFF] lg:h-3 h-2 rounded-full lg:w-3 w-2"></div>
            <p> Montana</p>
            <p> Nebraska</p>
          </div>



          <div className="grid lg:grid-cols-[170px,1fr] grid-cols-2  justify-center    items-center relative">
          <div  className="absolute left-[-2rem] top-4 bg-[#FFFFFF] lg:h-3 h-2 rounded-full lg:w-3 w-2"></div>
            <p> Oregun </p>
            <p> New  Mexico</p>
          </div>


          <div className="grid lg:grid-cols-[170px,1fr] grid-cols-[1fr,1fr]    justify-center   items-center relative">
          <div  className="absolute left-[-2rem] top-4 bg-[#FFFFFF] lg:h-3 h-2 rounded-full lg:w-3 w-2"></div>
            <p>Utah</p>
            <p> North Dokota</p>
          </div>


          <div className="grid lg:grid-cols-[170px,1fr] grid-cols-[1fr,1fr]  justify-center   items-center relative">
          <div  className="absolute left-[-2rem] top-4 bg-[#FFFFFF] lg:h-3 h-2 rounded-full lg:w-3 w-2"></div>
            <p>Wyoming</p>
            <p>Washington</p>
          </div>

          </div>

        </div>

        <div className="lg:w-2/4">
          <Image src={Map} alt="a Picture of a map" />
        </div>
      </div>
      </div>
     
    </main>
  );
}

export default AboutServices;
