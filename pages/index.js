import NavBar from '@/components/NavBar';
import AboutServices from '@/components/aboutServices';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import TestimonialsFaq from '@/components/testimonialsFaq';


export default function Home() {
  return (
    <main className='bg-[#FFFFFF] flex flex-col' >
      <NavBar/>
      <Hero/>
      <AboutServices/>
      <TestimonialsFaq/>
      <Footer/>
    </main>
  )
}
