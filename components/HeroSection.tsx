"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"
import Typewriter from 'typewriter-effect';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/headshot.jpg"
            alt=""
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-6xl">Hi, I&#39;m Saiham!</h1>
          <div className="text-lg mt-4 mb-6 md:text-2xl italic text-gray-500">
            I&#39;m a{" "}
            <span id='anime' className="font-semibold text-teal-600">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('Machine Learning Engineer')
                    .pauseFor(4500)
                    .deleteAll()
                    .typeString('Data Scientist')
                    .pauseFor(4500)
                    .changeDelay(10)
                    .start();
                }}
                options={{
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
            based in London, UK. Working towards creating end-to-end scalable and maintainable ML solutions for complex Business Intelligence requirements.
          </div>
          <Link
            to="contact"
            className="text-neutral-100 font-light hover:font-semibold cursor-pointer lg:ms-20 px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Contact
          </Link>
          <a
            href="https://saiham-rahman-portfolio.s3.eu-west-1.amazonaws.com/Resume/Website/Saiham-Rahman-CV.pdf"
            download
            className="text-neutral-100 font-light hover:font-semibold cursor-pointer ms-5 px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
            Download CV 📄
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="cursor-pointer animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
