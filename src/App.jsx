import Preview from "./components/Preview"
import { db } from "./firebase"
import LogoCloud from "./components/LogoCloud"
import HowItWorks from "./components/HowItWorks"
import CTA from "./components/CTA"
import FAQ from "./components/FAQ"
import Testimonials from "./components/Testimonials"
import Stats from "./components/Stats"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DemoShowcase from "./components/DemoShowcase"
import Features from "./components/Features"
import Templates from "./components/Templates"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"

export default function App() {

  return (

    <div className="bg-[#050505] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <DemoShowcase />

      <Preview />

      <LogoCloud />

      <HowItWorks />

      <Features />

      <Templates />

      <Stats />

      <Testimonials />

      <FAQ />

      <Pricing />

      <CTA />

      <Footer />

    </div>

  )

}