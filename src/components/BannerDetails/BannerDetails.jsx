import React from "react";
import Banner from "../../assets/blog2.jpg"

const BannerDetails = ({ reverse, img }) => {
  return (
    <section className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container mx-auto px-4 py-10 md:py-16 lg:py-20 xl:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          <div
            data-aos="fade-right"
            data-aos-duration="400"
            data-aos-once="true"
            className={`flex flex-col items-center md:items-start gap-4 text-center md:text-left ${
              reverse ? "md:order-last" : ""
            } `}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className="text-base md:text-lg lg:text-xl">
              At TechSol, we specialize in crafting innovative applications that
              captivate users and make waves in the digital sphere.
            </p>
            <ul className="flex flex-col gap-2 md:gap-4">
              <li className="font-medium">Transformative user experiences</li>
              <li className="font-medium">Cutting-edge technology solutions</li>
              <li className="font-medium">Unmatched expertise in app development</li>
            </ul>
            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm md:text-base text-white transition-colors duration-300 hover:bg-primary/80">
                Get Started
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="true"
            className="order-first md:order-none"
          >
            <img
              src={Banner}
              alt="Illustration"
              className="max-w-full h-auto md:max-auto md:w-full lg:h-full rounded-lg shadow-lg hover:shadow-xl"
              style={{ maxWidth: "30rem" }} // Limiting the max width for better responsiveness
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerDetails;
