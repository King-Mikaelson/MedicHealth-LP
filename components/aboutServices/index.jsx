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
import doctorImage from "../../public/doctorImage.png";
import PersonPic from "../../public/PersonPic.png";
import Map from "../../public/Map.png";
import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import {AiFillCheckCircle} from "react-icons/ai";
import Link from "next/link";

function AboutServices() {
  const [readMore, setReadMore] = useState(false);
  return (
    <main className="mt-32  px-4 xl:px-40 lg-px-24 mx-0  w-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-10">
        <div className="lg:w-2/4">
          <Image src={WellnessPic} alt="wellness and medical Health" />
        </div>

        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col">
          <div className="relative">
            <div class="hidden absolute top-8 lg:block flex-grow h-1 w-32 border-t-2 bg-[#49AD09]"></div>
            <h2 className="py-4 text-[#1C1C1C] lg:px-36  font-Poppins font-bold text-base">
              <span className="text-[#49AD09]">About </span>MEDICHEALTH <br />&
              WELLNESS
            </h2>
          </div>
          <p className="text-[#545454] font-Poppins font-normal text-[1.625em]">
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

      <div className="flex flex-col items-center py-4 md:py-32">
        <div className="relative flex flex-col justify-center">
          <div class="hidden absolute top-4 left-6 lg:block flex-grow h-1 w-44 border-t-2 bg-[#49AD09]"></div>
          <h2 className="self-end text-[#49AD09] text-base font-IBMPlex font-bold py-2">
            Our Services
          </h2>
          <h3 className="text-[#1C1C1C] text-[2.5em] font-IBMPlex font-normal py-0 mx-0 flex flex-col items-center justify-center">
            We have the best <br />
            <span>quality for you</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row w-full justify-between items-center pt-16 pb-32 gap-6">
          <div className="flex flex-col justify-center items-center">
            <Image src={drugPic}  className="pb-12" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="text-[1.75em] font-Poppins font-medium text-[#213D39] text-center">Medical <br/> weightloss</h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#191BFB]"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#C9C9C9]"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src={heartPic} className="pb-14" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="text-[1.75em] font-Poppins font-medium text-[#213D39] text-center">Hormone  <br/> Replacement</h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#191BFB]"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#C9C9C9]"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src={expertPic}  className="pb-14" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="text-[1.75em] font-Poppins font-medium text-[#213D39] text-center">Expert <br/>Practitioners</h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#191BFB]"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#C9C9C9]"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image src={telePic}   className="pb-14" />

            <div className="flex flex-col justify-center items-center ">
              <h4 className="text-[1.75em] font-Poppins font-medium text-[#213D39] text-center">Tele <br/>Health </h4>
              <p className="text-[0.9375em] font-Poppins font-light text-[#213D39] text-center py-4">Lorem ipsum dolor sit amet consectetur. Eget proin velit.</p>

              {readMore ? (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read More</p>
                  <AiFillPlusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#191BFB]"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <p className="text-base font-Poppins font-medium text-[#363636] ">Read Less</p>
                  <AiFillMinusCircle
                    onClick={() => setReadMore(!readMore)}
                    size={20}
                    className="text-[#C9C9C9]"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

                
                
    <div className="flex flex-col justify-center items-center">
     <h2 className="text-[#1C1C1C] text-[2.5rem] font-medium font-IBMPlex pb-8">How we work</h2>

     <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-32">
        <div className="lg:w-2/4">
          <Image src={HowWeWork} alt="How we Work" />
        </div>

        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col">
            <div className="flex items-center py-4 lg:ml-[-20rem]">
            <Image src={InjectionPic} className="w-[81px] h-[84.62px]" alt="injection"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal text-[2rem] leading-[1.375em] py-2">
                Lab Work
                </h4>
                <p className="text-[#545454] font-Poppins font-normal text-base leading-[1.375em]">Lorem ipsum dolor sit amet consectetur. Feugiat ultrices felis orci nisl. Elit
 platea felis erat viverra curabitur quis ornare. Lorem cras morbi nisi enim lectus 
tincidunt fusce. Est augue pellentesque luctus quisque.</p>
                </div>
            </div>

            <div className="flex items-center py-4 lg:ml-[-10rem]">
            <Image src={PersonPic} alt="injection"  className="w-[81px] h-[84.62px]"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal text-[2rem] leading-[1.375em]  py-2">
                Consultation
                </h4>
                <p className="text-[#545454] font-Poppins font-normal text-base leading-[1.375em]">Lorem ipsum dolor sit amet consectetur. Feugiat ultrices felis orci nisl. Elit
 platea felis erat viverra curabitur quis ornare. Lorem cras morbi nisi enim lectus 
tincidunt fusce. Est augue pellentesque luctus quisque.</p>
                </div>
            </div>

            <div className="flex items-center py-4">
            <Image src={PillPic} alt="injection"  className="w-[81px] h-[84.62px]"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal text-[2rem] leading-[1.375em]  py-2">
                Treatment
                </h4>
                <p className="text-[#545454] font-Poppins font-normal text-base leading-[1.375em]">Lorem ipsum dolor sit amet consectetur. Feugiat ultrices felis orci nisl. Elit
 platea felis erat viverra curabitur quis ornare. Lorem cras morbi nisi enim lectus 
tincidunt fusce. Est augue pellentesque luctus quisque.</p>
                </div>
            </div>

            <div className="flex items-center py-4  lg:ml-[-10rem]">
            <Image src={HeartBeatPic} alt="injection"  className="w-[81px] h-[84.62px]"/>
                <div className="px-6">
                <h4 className="text-[#1C1C1C] font-IBMPlex font-normal text-[2rem] leading-[1.375em]  py-2">
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


    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-10 pt-52">

        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col">
            <div className="">
                <h2 className="text-[#49AD09] font-Manrope text-sm font-bold py-2">Appointment</h2>
                <h3 className="text-[#000000] font-IBMPlex text-5xl font-medium py-1">Medical Weight Loss</h3>
            </div>

            <div>
            <p className="text-[#545454] font-Poppins font-normal text-[1.625em] pt-2">
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
                  className='bg-[#191BFB] py-3 px-6 flex justify-center items-center rounded-[10px]'
                >
                <p className='text-[#FFFFFF] text-base font-Manrope font-medium '>Book Weight Loss Consult</p>
                </button>
                </Link> 
            </div>
        </div>

        <div className="lg:w-2/4">
          <Image src={WeightLossPic} alt="wellness and medical Health" />
        </div>
      </div>


      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-10 pt-52">

        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col">
            <div className="">
                <h2 className="text-[#49AD09] font-Manrope text-sm font-bold py-1">Appointment</h2>
                <h3 className="text-[#000000] font-IBMPlex text-5xl font-medium py-1">Bioidentical Hormone
Replacemet Therapy</h3>
            </div>

            <div>
            <p className="text-[#545454] font-Poppins font-normal text-[1.625em] pt-2">
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
                  className='bg-[#191BFB] py-3 px-10 flex justify-center items-center rounded-[10px]'
                >
                <p className='text-[#FFFFFF] text-base font-Manrope font-medium '>Book BHRT Consult</p>
                </button>
                </Link> 
            </div>
        </div>

        <div className="lg:w-2/4 self-end">
          <Image src={TherapyPic} alt="wellness and medical Health" />
        </div>
      </div>
     
    </main>
  );
}

export default AboutServices;
