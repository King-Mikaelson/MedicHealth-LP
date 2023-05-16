import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'
import { useState } from 'react';
import testimonial1 from '../../public/testimonial1.png';
import testimonial2 from '../../public/testimonial2.png';
import testimonial3 from '../../public/testimonial3.png';
import Union from "../../public/Union.png";
import Image from "next/image"

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item flex flex-col py-2 rounded-[8px] border-[0px] border-solid ">
      <div className={isActive ?"accordion-title rounded-t-lg" :"accordion-title rounded-lg"} onClick={() => setIsActive(!isActive)}>
        <div className='font-Poppins text-base text-[#696969] font-medium'>{title}</div>
        <div>{isActive ? <AiOutlineClose  size={30} className='text-[#77808B]'/> : <AiOutlinePlus  size={30} className='text-[#49AD09]'/>}</div>
      </div>
      {isActive && <div className="accordion-content font-Roboto text-base text-[#696969] font-normal">{content}</div>}
    </div>
  );
};



function TestimonialsFaq() {
    const accordionData = [
        {
          title: 'Lorem ipsum dolor sit amet',
          content: `Lorem ipsum dolor sit amet consectetur. Egestas porttitor lectus velit tristique eget rhoncus sed. Nulla lectus faucibus malesuada et. Urna massa enim amet viverra enim sem ultrices mauris sit. At.`
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur. Eu condimentum non purus vestibulum eget. Pellentesque.',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'What often will results be reported?',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
            dolor ut sequi minus iste? Quas?`
          }
      ];


      const accordionData1 = [
        {
          title: 'Lorem ipsum dolor sit amet consectetur. Posuere ut libero mattis mattis nunc ullamcorper facilisi. Ornare.',
          content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
          laborum cupiditate possimus labore, hic temporibus velit dicta earum
          suscipit commodi eum enim atque at? Et perspiciatis dolore iure
          voluptatem.`
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
          reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
          quaerat iure quos dolorum accusantium ducimus in illum vero commodi
          pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
          quidem maiores doloremque est numquam praesentium eos voluptatem amet!
          Repudiandae, mollitia id reprehenderit a ab odit!`
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur. Odio viverra quis ridiculus tortor vestibulum in viverra venenatis nunc.',
          content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
          quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
          dolor ut sequi minus iste? Quas?`
        },
        {
            title: 'Lorem ipsum dolor sit amet consectetur. Praesent id malesuada malesuada tempor sit. Tortor luctus neque.',
            content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
            reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
            quaerat iure quos dolorum accusantium ducimus in illum vero commodi
            pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
            quidem maiores doloremque est numquam praesentium eos voluptatem amet!
            Repudiandae, mollitia id reprehenderit a ab odit!`
          },
          {
            title: 'Lorem ipsum dolor sit amet consectetur. Cursus volutpat aenean sed eleifend bibendum vivamus. Eget ut.',
            content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
            quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
            dolor ut sequi minus iste? Quas?`
          },
      ];
  return (
    <main className="mt-32  px-4 xl:px-40 lg:px-24 mx-0  w-full flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center py-8">
        <div className="flex flex-col justify-center">
           <h2 className='font-Poppins text-base text-[#49AD09] uppercase [letter-spacing:0.6em]'>Testimonials</h2> 
           <h3 className='hidden lg:block horizontal-line relative font-Poppins text-[2rem] font-bold text-[#000000]'>Words from Our Clients</h3>
           <h3 className='lg:hidden relative font-Poppins text-[2rem] font-bold text-[#000000]'>Words from Our Clients</h3>
        </div>

           <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
            <div className='lg:w-1/4 flex lg:flex-col items-center'>
            <Image src={testimonial1} alt="client testimonial "  className='py-2'/>
            <Image src={testimonial2} alt="client testimonial"  className='mx-2 py-1 px-1 border rounded-full bg-[#49AD09]'/>
            <Image src={testimonial3} alt="client testimonial"  className='py-2'/>

            </div>

            <div class="hidden lg:block flex-grow h-96 w-1 border-t-2 bg-[#49AD09]"></div>

            <div className='lg:w-3/4'>
                <Image src={Union} alt="client testimonial"  className='py-6'/>
                <p className='xl:w-[50ch] font-Poppins text-[#000000] text-2xl'>Lorem ipsum dolor sit amet consectetur. Volutpat ullamcorper nunc dis tristique mattis nullam. Etiam aliquam ullamcorper aliquam in ut elementum gravida. Cras vitae interdum diam vulputate nunc. Tristique massa vitae tellus feugiat massa nunc.
                </p>
                <div className='py-6'>
                    <p className='font-Poppins text-[#000000]  font-semibold text-xl py-1'>Elizabeth</p>
                    <p className='font-Poppins text-[#000000]  font-normal text-lg py-1'>Trader</p>
                </div>
            </div>
           </div>
        </div>


      <div className="flex flex-col justify-center lg:pt-16">
        <div className="flex flex-col justify-center items-center w-full">
          <div class="relative flex py-5 items-center justify-center lg:w-1/4 w-full my-0 mx-auto">
            <div class="flex-grow border-t-2 border-[#49AD09]"></div>
            <span class="flex-shrink mx-4 text-[#696969] font-Poppins text-base font-normal">
              FAQs
            </span>
            <div class="flex-grow border-t-2 border-[#49AD09]"></div>
          </div>

          <h3 className="flex flex-col justify-center items-center font-IBMPlex font-bold  text-5xl text-[#202020] gap-4">Frequently Asked <br/><span className="text-center text-[#49AD09]">Questions</span></h3>
        </div>

        <div className="flex flex-col lg:flex-row  justify-center gap-5 items-center w-full mx-auto my-0 md:py-16 py-8">
        <div className="accordion w-full flex flex-col self-start ">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>

      <div className="accordion w-full  flex flex-col self-start">
        {accordionData1.map(({ title, content}, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </div>
        </div>
      </div>
    </main>
  );
}

export default TestimonialsFaq;
