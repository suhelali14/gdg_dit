"use client"
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from "react";
import Preloader  from "@/components/Preloader";
import Chatbot  from "@/components/Chatbot";
import Benefits  from "@/components/components/Benefits";
import Services  from "@/components/components/Services";
import Header  from "@/components/components/Header";
import Hero  from "@/components/components/Hero";
import Collaboration  from "@/components/components/Collaboration";
import Roadmap  from "@/components/components/Roadmap";
import Footer  from "@/components/components/Footer";
import ButtonGradient from "../components/assets/svg/ButtonGradient";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    (async () => {
      // const LocomotiveScroll = (await import('locomotive-scroll')).default;
      // const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    < >
      <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
          {!isLoading && <Chatbot />}
        </AnimatePresence>
      <div className="pt-[4rem] lg:pt-[2.8rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits/>
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />
        
      </div>
      <ButtonGradient />
          
      
    </>
  );
}
