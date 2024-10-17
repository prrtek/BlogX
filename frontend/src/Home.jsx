import React from "react";
import Hero from "./components/Hero";
import { BentoGridDemo } from "./components/BentoGridDemo";
import Footer1 from "./components/Footer";

function Home() {
  return (
    <div className='bg-black min-h-screen'>
      <Hero />
      <BentoGridDemo />
      <Footer1 />
    </div>
  );
}

export default Home;
