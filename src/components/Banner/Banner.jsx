import React from "react";
import BannerI from "../../assets/blog3.jpg";

const Banner = () => (
  <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
    <section data-aos="fade-up" className="container py-8 md:py-12">
      <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
        <div className="order-2 flex flex-col items-center gap-4 text-center text-[var(--text-primary)] md:col-span-2 md:items-start md:text-left">
          <h1 className="text-3xl font-bold">
            We Build Apps That Get Trending On Appworld
          </h1>
          <p className="text-base">
            At TechSol, our passion lies in creating transformative user
            experiences that resonate with audiences worldwide. Our cutting-edge
            technology solutions redefine the boundaries of innovation.
          </p>
          <button
            className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm md:text-base text-white transition-colors duration-300 hover:bg-primary/80"
          >
            Get Started
          </button>
        </div>
        <div className="order-1">
          <img
            src={BannerI}
            alt=""
            className="max-w-full h-auto md:max-auto md:w-full lg:h-full rounded-lg shadow-lg hover:shadow-xl"
            style={{ maxWidth: "30rem" }}
          />
        </div>
      </div>
    </section>
  </main>
);

export default Banner;
