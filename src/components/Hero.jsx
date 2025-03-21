"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-start w-full bg-white h-screen pt-12">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6">
          {/* SOL TARAF: METİN ve BUTON */}
          <div className="md:w-1/2 mt-8 md:mt-0 relative z-2">
            <h1 className="font-lato font-bold text-[70px] leading-[85px] tracking-[-1px] text-primary mb-4 relative">
              Gemeinsam sind <br /> wir <span className="relative z-10">stark</span>
              <svg className="absolute z-0" style={{ transform: 'translate(3rem, -7rem)' }} width="282" height="142" viewBox="0 0 282 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M280.003 30.1916C289.152 61.5988 234.335 105.33 157.566 127.868C80.7966 150.406 11.1463 143.216 1.99736 111.808C-7.1516 80.4013 47.6653 36.6703 124.434 14.1324C201.204 -8.40558 270.854 -1.21551 280.003 30.1916Z"
                  stroke="#FBDB12"
                  strokeWidth="2"
                />
              </svg>
            </h1>
            <p className="text-primary mb-6 text-lg">
              Werde unser neuer Partner für <br /> deinen Weg zum Erfolg!
            </p>
            <button type="button" className="bg-[#FBDB12] hover:bg-yellow-500 text-[#27557C] font-crackers font-normal text-[40px] leading-[33px] tracking-[0.01em] text-center rounded-full w-32 h-32 flex items-center justify-center cursor-pointer">
              <span className="translate-y-1 rotate-[-8.15deg]">ICH WILL MEHR!</span>
            </button>
          </div>
          {/* SAĞ TARAF: GÖRSELLER */}
          <div className="md:w-1/2 flex items-center justify-center relative -translate-x-1/3">
            <div className="relative">
              <Image src="/hero.webp" alt="Therapium Group" width={558} height={660} className="rounded-md w-full h-auto object-cover" />
              {/* Puzzle image positioned with z-index and translation */}
              <div className="absolute z-10" style={{ bottom: "-80px", right: "-120px", width: "196px", height: "220px" }}>
                <Image src="/puzzle.webp" alt="Puzzle" width={196} height={220} className="object-cover w-full h-full" />
              </div>
            </div>
          </div>
        </div>
        {/* ALTTAKİ AŞAĞI KAYDIR OKU */}
        <div className="flex justify-center mt-12">
          <button className="bg-secondary rounded-full p-4 hover:bg-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
