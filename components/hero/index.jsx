import doctorImage from "../../public/doctorImage.png";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <main className=" w-full flex flex-col justify-center bg-[rgba(25,27,251,0.03)]">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-10 pt-52  px-4 xl:px-40 lg-px-24 mx-0  ">
        <div className="lg:w-2/4 self-start flex justify-center items-center lg:items-start flex-col">
          <div className="">
            <h3 className="text-[#000000] font-IBMPlex text-[3.375rem] font-bold py-3">
              Medical Weight Loss & Biodentical Hormone Replacemt Therapy
            </h3>
          </div>

          <div>
            <p className="text-[#545454] font-Inter font-light text-sm pt-2">
            Lorem ipsum dolor sit amet consectetur. A dignissim sed cras eu at quam amet facilisi. Nunc mauris euismod integer dui auctor. Id ac gravida eu cras ullamcorper facilisis et. Mauris imperdiet auctor elementum tellus urna facilisis ac.
            </p>

            <Link href="/">
              <button
                type="button"
                className="bg-[#191BFB] py-3 my-14 px-6 flex justify-center items-center rounded-lg shadow-[2px,4px,4px,rgba(0,0,0,0.25)]"
              >
                <p className="text-[#FFFFFF] text-[1.625rem] font-Poppins font-semibold ">
                Make Appointment
                </p>
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:w-2/4">
          <Image src={doctorImage} alt="wellness and medical Health" />
        </div>
      </div>
    </main>
  );
}

export default Hero;