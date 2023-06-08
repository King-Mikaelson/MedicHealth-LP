import NavBar from '@/components/NavBar';
import AboutServices from '@/components/aboutServices';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import TestimonialsFaq from '@/components/testimonialsFaq';
import Head from 'next/head';

export default function Home() {
  return (
    <main className='bg-[#FFFFFF] flex flex-col' >
      <Head>
        <title>Medic Health & Wellness</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="Virtual Medical Weight Loss, medic heath & wellness, weight loss, weight, Weight Loss, GLP-1, Health & Wellness, Nutrition, Exercise,  weight loss medication,Semaglutide, Tirzepatide, virtual medical, telehealth weight loss clinic" />
        <meta name="description" content="We are a telehealth weight loss clinic dedicated to helping individuals achieve their weight loss goals in a healthy and sustainable way. We understand that weight loss is a personal journey, and we are here to provide you with the support, guidance, and medical expertise you need to succeed. Our personalized holistic weight loss approach includes GLP-1 medication therapy, nutrition, and exercise counseling tailored to your personal needs. At Medic Health & Wellness, our primary goal is helping you achieve lasting weight loss results and a healthier, happier life"></meta>
        <meta property="og:title" content="Virtual Medical Weight Loss" />
        <meta property="og:url" content="https://www.medichealthwellness.com/" />
        <meta charSet="utf-8"></meta>
        <link rel="icon" href="/favicon.ico"></link>
     </Head>
      <NavBar/>
      <Hero/>
      <AboutServices/>
      <TestimonialsFaq/>
      <Footer/>
    </main>
  )
}
