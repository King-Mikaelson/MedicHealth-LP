import {AiOutlineMail} from "react-icons/ai";
import {FiMapPin, FiMail, FiPhone} from "react-icons/fi";
import Logo from "../../public/logoImage.png";
import Image from "next/image";
import {FaFacebookF, FaTwitter, FaInstagram,FaLinkedinIn} from "react-icons/fa";

function Footer() {
  return (
    <main className="mt-10 mb-auto text-[#FFFFFF] bg-[#202020] pt-20 xl:px-40 lg:px-24 mx-0 w-full self-end">
    

      <div className="lg:flex md:justify-between md:items-center">
       <div className="self-start">
       <Image src={Logo} alt="logo"/>
       <p className="xl:w-[50ch] py-4">
       Lorem ipsum dolor sit amet consectetur. Scelerisque vitae et vitae suspendisse vulputate vestibulum tortor nisl cursus. Egestas nulla in 
       </p>
       <div className="flex py-4">
        <div className="bg-[#49AD09] py-2 px-2 rounded-full mr-4">
        <FaFacebookF size={30} />
        </div>
        <div className="bg-[#49AD09] py-2 px-2 rounded-full mr-4">
        <FaInstagram size={30} />
        </div>
        <div className="bg-[#49AD09] py-2 px-2 rounded-full mr-4">
        <FaTwitter size={30} />
        </div>
        <div className="bg-[#49AD09] py-2 px-2 rounded-full mr-4">
        <FaLinkedinIn size={30} />
        </div>


       </div>
        </div>
        
        <div className="text-[1.857rem] flex flex-col gap-5 font-Satoshi self-start">
        <h3 className="text-[1.27rem] font-bold font-Poppins">Quick Links</h3>
          <p className="text-lg font-light font-Poppins">Home</p>
          <p className="text-lg font-light font-Poppins">Weight loss</p>
          <p className="text-lg font-light font-Poppins">Hormonal</p>
          <p className="text-lg font-light font-Poppins">Portal</p>
        </div>

        <div className="text-[1.857rem] flex flex-col gap-5  font-Satoshi self-start">
        <h3 className="text-[1.27rem] font-bold font-Poppins">Legal</h3>
          <p  className="text-lg font-light font-Poppins">Terms & Conditions</p>
          <p  className="text-lg font-light font-Poppins">Privacy Policy</p>
          <p  className="text-lg font-light font-Poppins">Cookies Policy</p>
        </div>

        <div className="text-[1.857rem] flex flex-col gap-5  font-Satoshi self-start">
        <h3 className="text-[1.27rem] font-bold font-Poppins">Contact Information</h3>
          <div className="flex items-center">
            <AiOutlineMail  className="text-[#49AD09] mr-5" size={20} />
            <p  className="text-lg font-light font-Poppins">Mdichealthr@gmail.com</p>

         </div>
         <div className="flex items-center">
            <FiPhone  className="text-[#49AD09] mr-5" size={20} />
            <p className="font-Poppins font-light text-lg">+2345545677080</p>

         </div>
         <div className="flex items-center">
         <FiMapPin className="text-[#49AD09] mr-5" size={20} />
        <p  className="font-Poppins font-light text-lg">Lorem Ipsum Dummy text</p>
         </div>
        </div>
        
      </div>

    <div className="flex flex-col justify-center items-center relative my-0 mx-auto py-16">
    <div class="w-full flex justify-center items-center border-b border-[#49AD09]"></div>
    <p className="text-base font-Poppins font-light lg:text-center py-4">2023ⓒMedic Health & Wellness . All rights reserved.</p>
    </div>


    </main>
  );
}

export default Footer;
