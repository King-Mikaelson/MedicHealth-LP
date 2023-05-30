import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import testimonial1 from "../../public/testimonial1.png";
import testimonial2 from "../../public/testimonial2.png";
import testimonial3 from "../../public/testimonial3.png";
import Union from "../../public/Union.png";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item flex flex-col py-2 rounded-[8px] border-[0px] border-solid ">
      <div
        className={
          isActive
            ? "accordion-title rounded-t-lg"
            : "accordion-title rounded-lg"
        }
        onClick={() => setIsActive(!isActive)}
      >
        <div className="font-Poppins text-base text-[#696969] font-medium">
          {title}
        </div>
        <div>
          {isActive ? (
            <AiOutlineClose size={20} className="text-[#77808B]" />
          ) : (
            <AiOutlinePlus size={20} className="text-[#49AD09]" />
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content font-Roboto text-base text-[#696969] font-normal">
          {content}
        </div>
      )}
    </div>
  );
};

function TestimonialsFaq() {
  const [showImage, setShowImage] = useState("first");
  // const [showImage1, setShowImage1] = useState(false);
  // const [showImage2, setShowImage2] = useState(false);
  const accordionData = [
    {
      title: "What is Semaglutide?",
      content: `Semaglutide is an FDA approved injectable
          prescription medication for adults with a BMI; 27 or higher.`,
    },
    {
      title: "What is Tirzepatide?",
      content: ` Tirzepatide is FDA approved for type 2 diabetes but
          it is used off label in treating obesity and weight concerns.`,
    },
    {
      title: "How are the medications taken?",
      content: ` Semaglutide or Tirzepatide is an
          injection taken in the subcuteanous fat of belly, behind the arms or thighs
          once weekly. Expect to be on medication for months to reach and maintain
          weight goals.`,
    },
    {
      title: "What is the average weight loss?",
      content: `What is the average weight loss? The average weight loss with
            Semaglutide or Tirzepatide is about 15-20% of a person’s body weight
            depending on the medication used.`,
    },
  ];

  const accordionData1 = [
    {
      title: "Who should not take these medications?",
      content: ` Patient with h/o diabetic
          retinopathy, low blood sugar, disease of gall bladder, acute inflammation of
          pancreas, decreased kidney function, Medullary thyroid cancer, multiple
          endocrine neoplasia type 2, family history of medullary thyroid carcinoma,
          pregnant or breastfeeding.`,
    },
    {
      title: "Where does this medication come from?",
      content: ` All our medications are prescribed by a licensed provider and dispensed from an FDA registered pharmacy in the USA. Medications will only be prescribed after a medical
          screening and consultation.`,
    },
    {
      title: "Are there any side effects? ",
      content: `Yes. The most common side effects are
          nausea, vomiting, diarrhea, constipation, abdominal pain, heartburn but
          these symptoms are usually mild for most patients.`,
    },
    {
      title: "Do You Accept Insurance?",
      content: `No, we do not accept insurance. We accept
            Visa, MasterCard, Discover, American Express, HSA, FSA cards.`,
    },
    {
      title: "What does the pricing include?",
      content: `Monthly supply of either semaglutide or
            tirzepatide medication, needles, alcohol pads, initial and unlimited ongoing
            medical consults, nutrition guide, and exercise plans to support your weight
            loss.`,
    },
  ];

  const showImageInterval = () => {
    if (showImage === "first") {
      setShowImage("second");
    } else if (showImage === "second") {
      setShowImage("third");
    } else if (showImage === "third") {
      setShowImage("first");
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showImageInterval();
    }, 5000);

    return () => clearInterval(interval);
  }, [showImage]);
  return (
    <main className="lg:mt-32 mt-12  px-4  lg:px-24 mx-0  w-full flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center lg:py-8 py-0">
        <div className="flex flex-col justify-center">
          <h2 className="font-Poppins text-base text-[#49AD09] uppercase [letter-spacing:0.6em]">
            Testimonials
          </h2>
          <h3 className="hidden lg:block horizontal-line relative font-Poppins text-[2rem] font-bold text-[#000000]">
            Words from Our Clients
          </h3>
          <h3 className="lg:hidden relative font-Poppins text-[1.5rem] lg:text-[2rem] font-bold text-[#000000]">
            Words from Our Clients
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:gap-10 gap-5">
          <div className="lg:w-1/4 flex lg:flex-col items-center">
            {showImage !== "first" && showImage === "second" ? (
              <Image
                src={testimonial1}
                alt="client testimonial "
                className="py-2"
                onClick={() => {
                  setShowImage(true);
                  setShowImage1(false);
                  setShowImage2(false);
                }}
              />
            ) : showImage !== "first" && showImage === "third" ? (
              <Image
                src={testimonial2}
                alt="client testimonial"
                className={`mx-2 py-1 px-1  h-16 w-16`}
                onClick={() => {
                  setShowImage1(true);
                  setShowImage(false);
                  setShowImage2(false);
                }}
              />
            ) : (
              <Image
                src={testimonial3}
                alt="client testimonial"
                className={`mx-2 py-1 px-1  h-16 w-16`}
                onClick={() => {
                  setShowImage1(true);
                  setShowImage(false);
                  setShowImage2(false);
                }}
              />
            )}

            {showImage === "first" ? (
              <Image
                src={testimonial1}
                alt="client testimonial "
                className="mx-2 py-1 px-1 border rounded-full bg-[#49AD09] h-32 w-32"
                onClick={() => {
                  setShowImage(true);
                  setShowImage1(false);
                  setShowImage2(false);
                }}
              />
            ) : showImage === "second" ? (
              <Image
                src={testimonial2}
                alt="client testimonial"
                className={`mx-2 py-1 px-1 border rounded-full bg-[#49AD09] h-30 w-30`}
                onClick={() => {
                  setShowImage1(true);
                  setShowImage(false);
                  setShowImage2(false);
                }}
              />
            ) : (
              <Image
                src={testimonial3}
                alt="client testimonial"
                className="mx-2 py-1 px-1 border rounded-full bg-[#49AD09] h-32 w-32"
                onClick={() => {
                  setShowImage2(true);
                  setShowImage(false);
                  setShowImage1(false);
                }}
              />
            )}

            {showImage !== "third" && showImage === "first" ? (
              <Image
                src={testimonial2}
                alt="client testimonial "
                className="py-2 h-16 w-12"
                onClick={() => {
                  setShowImage(true);
                  setShowImage1(false);
                  setShowImage2(false);
                }}
              />
            ) : showImage !== "third" && showImage === "second" ? (
              <Image
                src={testimonial3}
                alt="client testimonial "
                className="py-2"
                onClick={() => {
                  setShowImage(true);
                  setShowImage1(false);
                  setShowImage2(false);
                }}
              />
            ) : (
              <Image
                src={testimonial1}
                alt="client testimonial"
                className={`mx-2 py-1 px-1  h-16 w-16`}
                onClick={() => {
                  setShowImage1(true);
                  setShowImage(false);
                  setShowImage2(false);
                }}
              />
            )}
          </div>

          <div className="hidden lg:block flex-grow h-96 w-1 border-t-2 bg-[#49AD09]"></div>

          <div className="flex flex-col">
            <div className="lg:w-3/4 transition-opacity">
              <Image src={Union} alt="client testimonial" className="py-6" />
              {showImage === "first" ? (
                <>
                  <p className="xl:w-[50ch] font-Poppins text-[#000000] lg:text-2xl text-base">
                    “I am so glad I found Medic Health &amp; Wellness! I have
                    struggled with my weight for many years, and I have tried
                    different things over the years. Started on Semaglutide
                    several months ago, and I have lost over 30lbs and kept the
                    weight off. I recommend Medic Health &amp; Wellness to all
                    my family and friends struggling with weight loss!”
                  </p>
                  <div className="py-6">
                    <p className="font-Poppins text-[#000000]  font-semibold text-xl py-1">
                      Elizabeth
                    </p>
                  </div>
                </>
              ) : showImage === "second" ? (
                <>
                  <p className="xl:w-[50ch] font-Poppins text-[#000000] lg:text-2xl text-base">
                    “Great caring people, they really listened and were very
                    helpful! I finally feel like I am on the right track to shed
                    this weight!
                  </p>
                  <div className="py-6">
                    <p className="font-Poppins text-[#000000]  font-semibold text-xl py-1">
                      Justina Bell
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <p className="xl:w-[50ch] font-Poppins text-[#000000] lg:text-2xl text-base">
                    This place is so Amazing! For many years, I was unable to
                    lose any weight. I started on this program 4 months ago and
                    I have already lost 20lbs. The people are super friendly and
                    available to answer questions. Service is timely and
                    convenient!!!
                  </p>
                  <div className="py-6">
                    <p className="font-Poppins text-[#000000]  font-semibold text-xl py-1">
                      Alex Cruz
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* <div className="lg:w-3/4 transition-opacity">
              <Image src={Union} alt="client testimonial" className="py-6" />
              <p className="xl:w-[50ch] font-Poppins text-[#000000] lg:text-2xl text-base">
                “Great caring people, they really listened and were very
                helpful! I finally feel like I am on the right track to shed
                this weight!
              </p>
              <div className="py-6">
                <p className="font-Poppins text-[#000000]  font-semibold text-xl py-1">
                  Justina Bell
                </p>
              </div>
            </div> */}

            {/* <div className="lg:w-3/4 transition-opacity">
            //   <Image src={Union} alt="client testimonial" className="py-6" />
            //   <p className="xl:w-[50ch] font-Poppins text-[#000000] lg:text-2xl text-base">
            //     This place is so Amazing! For many years, I was unable to lose
            //     any weight. I started on this program 4 months ago and I have
            //     already lost 20lbs. The people are super friendly and available
            //     to answer questions. Service is timely and convenient!!!
            //   </p>
            //   <div className="py-6">
            //     <p className="font-Poppins text-[#000000]  font-semibold text-xl py-1">
            //       Alex Cruz
            //     </p>
            //   </div>
            </div> */}
          </div>
        </div>
      </div>

      <div
        id="fourth-section"
        className="flex flex-col justify-center lg:pt-16"
      >
        <div className="flex flex-col justify-center items-center w-full">
          <div className="relative flex py-5 items-center justify-center lg:w-1/4 w-full my-0 mx-auto">
            <div className="flex-grow border-t-2 border-[#49AD09]"></div>
            <span className="flex-shrink mx-4 text-[#696969] font-Poppins text-base font-normal">
              FAQs
            </span>
            <div className="flex-grow border-t-2 border-[#49AD09]"></div>
          </div>

          <h3
            className="flex flex-col justif
          y-center items-center font-IBMPlex font-bold  lg:text-5xl text-2xl text-[#202020] lg:gap-4 gap-0"
          >
            Frequently Asked <br />
            <span className="text-center text-[#49AD09]">Questions</span>
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row  justify-center gap-5 items-center w-full mx-auto my-0 md:py-16 py-8">
          <div className="accordion w-full flex flex-col self-start ">
            {accordionData.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </div>

          <div className="accordion w-full  flex flex-col self-start">
            {accordionData1.map(({ title, content }, index) => (
              <Accordion key={index} title={title} content={content} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default TestimonialsFaq;
