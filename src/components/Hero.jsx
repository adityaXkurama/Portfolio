import React from "react";
import { ButtonOutline, ButtonPrimary } from "./Button.jsx";

const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-36 ">
      <div className="container lg:grid lg:grid-cols-2 items-center juscon lg:gap-10">
        <div className="">
          <div className=" flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/logo.png"
                width={40}
                height={40}
                alt="Aditya R"
                className="img-cover"
              />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-500">
                <span className=" inset-0 absolute  bg-emerald-500 rounded-full animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>
          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] mt-5 mb-8 lg:mb-10">
            Building Scalable Modern Websites for the Future
          </h2>

          <div className="flex items-center gap-3">
            <a
              href="resume/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ButtonPrimary label="Resume " icon="download" />
            </a>

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon="arrow_downward"
            />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/aditya.png"
              width={656}
              height={800}
              alt="Aditya D R"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
