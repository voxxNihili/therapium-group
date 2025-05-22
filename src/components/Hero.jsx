"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "./Container";

export default function Hero() {
  // Custom variable for image shift - can be adjusted as needed
  const imageLeftShift = "var(--image-left-shift, 2rem)"; // Default value 2rem

  return (
    <section className="relative flex flex-col items-center w-full bg-white min-h-[960px]">
      <Container className="w-full h-full">
        <div className="flex flex-col-reverse md:flex-row relative h-full">
          {/* SOL TARAF: METİN ve BUTON */}
          <div className="md:w-1/2 flex items-center justify-center h-full my-auto pb-8 md:pb-0 pt-10 md:pt-0">
            <div className="relative z-2 mt-8 md:mt-0">
              <h1 className="font-lato font-bold text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] leading-[1.2] md:leading-[85px] tracking-[-1px] text-primary mb-4 relative text-center md:text-left">
                Gemeinsam sind <br className="hidden md:block" /> wir <span className="relative z-10">stark</span>
                <svg className="absolute z-[-1] hidden md:block" style={{ transform: "translate(3rem, -7rem)" }} width="282" height="142" viewBox="0 0 282 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M280.003 30.1916C289.152 61.5988 234.335 105.33 157.566 127.868C80.7966 150.406 11.1463 143.215 1.99736 111.808C-7.1516 80.4013 47.6653 36.6703 124.434 14.1324C201.204 -8.40558 270.854 -1.21551 280.003 30.1916Z"
                    stroke="#FBDB12"
                    strokeWidth="2"
                  />
                </svg>
                <svg className="absolute z-[-1] hidden" style={{ transform: "translate(8rem, -4rem)", width: "180px", height: "90px" }} viewBox="0 0 282 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M280.003 30.1916C289.152 61.5988 234.335 105.33 157.566 127.868C80.7966 150.406 11.1463 143.215 1.99736 111.808C-7.1516 80.4013 47.6653 36.6703 124.434 14.1324C201.204 -8.40558 270.854 -1.21551 280.003 30.1916Z"
                    stroke="#FBDB12"
                    strokeWidth="2"
                  />
                </svg>
              </h1>
              <p className="text-primary mb-6 text-base sm:text-lg text-center md:text-left">
                Werde unser neuer Partner für <br className="hidden md:block" /> deinen Weg zum Erfolg!
              </p>
              <div className="flex justify-center md:justify-start mb-12 md:mb-0">
                <button
                  type="button"
                  className="bg-[#FBDB12] hover:bg-yellow-500 text-[#27557C] font-crackers font-normal text-[28px] sm:text-[35px] md:text-[40px] leading-[1] md:leading-[33px] tracking-[0.01em] text-center rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center cursor-pointer"
                >
                  <span className="translate-y-1 rotate-[-8.15deg]">ICH WILL MEHR!</span>
                </button>
              </div>
            </div>
          </div>
          {/* SAĞ TARAF: GÖRSELLER */}
          <div className="md:w-1/2 flex items-start md:items-start justify-center relative pt-0 mb-8 md:mb-0 transform md:-translate-x-[36%]">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[558px]">
              <Image
                src="/hero.webp"
                alt="Therapium Group"
                width={558}
                height={660}
                className="w-full h-auto object-cover max-h-[400px] sm:max-h-[500px] md:max-h-none md:h-auto md:w-[558px] md:object-top md:object-contain"
                style={{ objectPosition: "center top" }}
                priority
              />
              {/* Puzzle image overflows bottom-right */}
              <div
                className="absolute z-10 h-[120px] sm:h-[170px] md:h-[220px] aspect-[196/220]
                            -bottom-8 -right-8 
                            sm:-bottom-12 sm:-right-12 
                            md:-bottom-20 md:-right-20"
              >
                <Image src="/puzzle.webp" alt="Puzzle" fill className="object-cover" style={{ objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </Container>
      {/* ALTTAKİ AŞAĞI KAYDIR OKU */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <button className="bg-secondary rounded-full p-3 md:p-4 hover:bg-blue-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
