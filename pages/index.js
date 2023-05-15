import NavBar from '@/components/NavBar';
import AboutServices from '@/components/aboutServices';
import Footer from '@/components/footer';
import TestimonialsFaq from '@/components/testimonialsFaq';


export default function Home() {
  return (
    <main className='bg-[#FFFFFF] flex flex-col' >
      <NavBar/>
      <AboutServices/>
      <TestimonialsFaq/>
      <Footer/>
    </main>
  )
}
