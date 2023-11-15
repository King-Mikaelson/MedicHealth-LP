import {AiOutlineMail} from "react-icons/ai";
import {FiMapPin, FiMail, FiPhone} from "react-icons/fi";
import Logo from "../../public/logo5.png";
import Image from "next/image";
import {FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn} from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <main className="mt-10 mb-auto text-[#FFFFFF] bg-[#202020] pt-10 lg:pt-20  lg:px-24 px-4 mx-0 w-full self-end">
    

      <div className="flex flex-col lg:flex-row md:justify-between lg:items-center gap-5">
       <div className="self-start lg:order-1 order-4">
       <Image
            src={Logo}
            alt="logo"
            className=" w-[7rem] h-[100%] object-contain"
          />
       <p className="xl:w-[50ch] py-4">
       At Medic Health & Wellness, our primary goal is helping you achieve lasting weight loss results and a healthier, happier life.       </p>
       <div className="flex py-4">
        <Link href={"https://www.facebook.com/medichealthwellness"} className="bg-[#49AD09] py-1 px-2 rounded-full mr-4">
        <FaFacebookF  className="inline-block text-[#FFFFFF] cursor-pointer" />
        </Link>
        <Link href={"https://www.instagram.com/medichealthwellness/"} className="bg-[#49AD09] py-1 px-2 rounded-full mr-4">
        <FaInstagram  className="inline-block text-[#FFFFFF] cursor-pointer"/>
        </Link>
        <Link href={"/"} className="bg-[#49AD09] py-1 px-2 rounded-full mr-4">
        <FaTwitter  className="inline-block text-[#FFFFFF] cursor-pointer" />
        </Link>
        <Link  href={"/"} className="bg-[#49AD09] py-1 px-2 rounded-full mr-4">
        <FaLinkedinIn  className="inline-block text-[#FFFFFF] cursor-pointer" />
        </Link>
       </div>
        </div>
        
        <div className="text-[1.857rem] flex flex-col gap-5 font-Satoshi self-start lg:order-2 order-1">
        <h3 className="text-[1.27rem] font-bold font-Poppins">Quick Links</h3>
          <Link href="#first-section" className="text-lg font-light font-Poppins">About Us</Link>
          <Link href="#second-section" className="text-lg font-light font-Poppins">Weight loss</Link>
          {/* <Link href="#third-section" className="text-lg font-light font-Poppins">Pricing</Link> */}
          <Link href="#fourth-section" className="text-lg font-light font-Poppins">FAQ</Link>
        </div>

        <div className="text-[1.857rem] flex flex-col gap-5  font-Satoshi self-start lg:order-2 order-2">
        <h3 className="text-[1.27rem] font-bold font-Poppins">Legal</h3>
          <p  className="text-lg font-light font-Poppins">Terms & Conditions</p>
          <p  className="text-lg font-light font-Poppins">Privacy Policy</p>
          <p  className="text-lg font-light font-Poppins">Cookies Policy</p>
        </div>

        <div className="text-[1.857rem] flex flex-col gap-5  font-Satoshi self-start lg:order-3 order-1">
        <h3 className="text-[1.27rem] font-bold font-Poppins">Contact Information</h3>
          <div className="flex items-center">
            <AiOutlineMail size={25}  className="text-[#49AD09] mr-3" />
            <p  className="text-lg font-light font-Poppins">hello@medichealthwellness.com</p>

         </div>
         <div className="flex items-center">
            <FiPhone size={25}  className="text-[#49AD09] mr-3"  />
            <p className="font-Poppins font-light text-lg">+1 307-285-9298</p>

         </div>
         {/* <div className="flex items-center">
         <FiMapPin size={25} className="text-[#49AD09] mr-3 self-start"  />
        <p  className="font-Poppins font-light text-lg lg:w-[30ch] w-[20ch]  md:self-start">1309 Coffeen Avenue Ste 1200, Sheridan, WY, United States, Wyoming</p>
         </div> */}
        </div>
        
      </div>

      <div className="flex flex-col justify-center items-center relative my-0 mx-auto lg:pt-16 pt-8 lg:pb-6 pb-3 ">
        <div className="bg-[#49AD09] h-[0.1rem] inline-block w-3/4"></div>
      </div>
      <p className="text-base font-Poppins font-light text-center pb-6">2023ⓒMedic Health & Wellness . All rights reserved.</p>


    </main>
  );
}

export default Footer;




