import React from "react";
import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">
      <section className="container flex h-screen md:h-[500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className="flex flex-col justify-center p-6 md:p-12 text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight md:leading-tight mb-6">
              Welcome to TechSol
            </h1>
            <p className="text-lg md:text-xl mb-6">
              We are your trusted partner in app development and technology
              solutions. Our mission is to build innovative apps that make a
              difference in the digital world.
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-transparent bg-gradient-to-l from-violet-900 via-violet-800 to-violet-900 px-6 py-3 text-sm md:text-base text-white transition-colors duration-300 hover:bg-gradient-to-l hover:from-violet-800 hover:via-violet-700 hover:to-violet-800">
                Get Started
              </button>
              <button className="border-2 rounded-md border-white px-6 py-3 text-sm md:text-base text-white transition-colors duration-300 bg-transparent hover:bg-violet-800 hover:border-violet-800 hover:text-white">
                Login
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="mx-auto p-6 md:p-12"
          >
            <img src={Banner} alt="Illustration" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
