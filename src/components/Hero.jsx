"use client";
import Image from "next/image";
import Button from "@mui/material/Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full bg-white">
      <Container>
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-6 py-12">
          {/* SOL TARAF: METİN ve BUTON */}
          <div className="md:w-1/2 mt-8 md:mt-0   relative z-2">
            <h1 className="font-lato font-bold text-[70px] leading-[85px] tracking-[-1px] text-primary mb-4">
              Gemeinsam sind <br /> wir stark
            </h1>
            <p className="text-gray-600 mb-6 text-lg">Werde unser neuer Partner für deinen Weg zum Erfolg!</p>

            <button type="button" className="bg-[#FBDB12] hover:bg-yellow-500 text-[#27557C] font-crackers font-normal text-[40px] leading-[33px] tracking-[0.01em] text-center rounded-full w-32 h-32 flex items-center justify-center cursor-pointer ">
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
      </Container>

      {/* ALTTAKİ AŞAĞI KAYDIR OKU */}
      <div className="absolute bottom-4 flex justify-center w-full">
        <svg className="w-8 h-8 text-gray-500 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
