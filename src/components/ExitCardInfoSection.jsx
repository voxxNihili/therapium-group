"use client";

import { Typography } from "@mui/material";
import Image from "next/image";

export default function MyExit() {
  return (
    <>
  <style jsx global>{`
    @media (max-width: 500px) {
      .exit-content-mobile {
        margin-left: 1rem !important;
        margin-right: 1rem !important;
      }
    }
    @media (min-width: 1024px) {
      .circle-text-responsive {
        font-size: 60px !important;
        line-height: 49px !important;
        max-width: 400px !important;
      }
    }
    @media (max-width: 1023px) {
      .circle-text-responsive {
        font-size: 48px !important;
        line-height: 40px !important;
        max-width: 320px !important;
      }
    }
    @media (max-width: 849px) {
      .circle-container {
        flex-direction: column !important;
        align-items: flex-start !important;
      }
      .circle-wrapper {
        width: 100% !important;
        justify-content: center !important;
        margin-top: 2rem !important;
        margin-left: 0 !important;
      }
      .circle-element {
        margin-left: 0 !important;
        transform: translateY(0) !important;
      }
    }
    @media (min-width: 850px) {
      .circle-container {
        flex-direction: row !important;
        align-items: flex-start !important;
      }
    }
`}</style>

      {/* Primary section background - removed overflow-hidden to allow image overflow */}
      <section className="relative w-full bg-[#2D6C9B]">
        {/* 1440-px design canvas wrapper */}
        <div className="relative w-full mx-auto min-h-[642px] flex flex-col">
          {/* Highlighted card area */}
          <div className="relative right-0 w-[88%] bg-[#27557C] mt-[210px] ml-[12%] h-[642px] lg:h-[642px] lg:h-[642px] md:h-auto sm:h-auto h-auto lg:pb-0 md:pb-8 sm:pb-8 pb-8">
            {/* Text block – shifted up so headline breaks the panel */}
            <div className="relative -top-[40px] ml-[5.68%] text-white lg:relative lg:top-0 lg:pt-[40px] lg:ml-[5.68%]">
              <h1 className="font-lato font-bold text-[70px] leading-[85px] tracking-[-1px] whitespace-pre-line">
                Deine
                {"\n"}
                Exit-Karte
              </h1>

              <p className="mt-6 font-lato font-normal text-[35px] leading-[35px] whitespace-pre-line">
                Mit Klarheit gehen. Mit Wertschätzung
                {"\n"}bei THERAPIUM bleiben.
              </p>

              <p className="mt-10 font-lato font-bold text-[20px] leading-[28px] whitespace-pre-line">
                Du hast eine Entscheidung getroffen und
                {"\n"}das verdient Respekt.
              </p>

              <p className="mt-4 font-lato font-normal text-[20px] leading-[28px] max-w-[560px]">
                Du wurdest nicht zufällig Teil dieser Leadership Journey. Du wurdest von der Geschäftsführung als A-Mitarbeiter vorausgewählt. Als jemand, der bereits heute Großes leistet – fachlich, menschlich, im Team.
                <br /> Allein diese Einladung ist ein Vertrauensvorschuss. <br /> Ein Zeichen unseres Glaubens an dich.
              </p>
            </div>

            {/* Mobile/Tablet image - shown only on smaller screens, positioned within the card */}
            <div className="lg:hidden flex justify-center mt-8 px-4">
              <Image
                src="/images/exitcard.png"
                alt="Therapium Exit-Karte"
                width={320}
                height={393}
                priority
                className="select-none pointer-events-none
                           md:w-[380px] md:h-[467px]
                           sm:w-[320px] sm:h-[393px]
                           w-[280px] h-[344px]"
              />
            </div>
          </div>

          {/* Cards graphic – positioned next to the text content on larger screens only */}
          <Image
            src="/images/exitcard.png"
            alt="Therapium Exit-Karte"
            width={638}
            height={785}
            priority
            className="absolute left-[55%] top-[20%] select-none pointer-events-none z-10
                       xl:w-[638px] xl:h-[785px] xl:left-[55%] xl:top-[20%]
                       lg:w-[400px] lg:h-[492px] lg:left-[66%] lg:top-[25%]
                       hidden lg:block"
          />
        </div>

        {/* Continuation sections - added proper spacing */}
        <div className="relative w-full mx-auto mt-[200px]">
          {/* "Aber Leadership ist kein einfacher Weg" section */}
          <div className="ml-[17%] text-white exit-content-mobile">
            <h2 className="font-lato font-normal text-[35px] leading-[28px] tracking-[0px] mb-6 whitespace-pre-line">Aber Leadership ist kein einfacher Weg.</h2>

            <p className="font-lato font-normal text-[20px] leading-[28px] tracking-[0px] max-w-[705px] mb-16">
              Du wirst in diesem Prozess an deine Grenzen kommen. Du wirst mit Erwartungen konfrontiert, die neu sind. Und du wirst dich fragen: Will ich das wirklich? <br /> Wenn du diese Karte aktiv nutzt – oder du von uns aufgefordert wirst, sie
              zu ziehen oder einzulösen – dann bedeutet das nicht, dass du gescheitert bist. Sondern: Dass du ehrlich zu dir bist. Dass du deine Grenze erkennst, bevor sie dich überfordert.
            </p>
          </div>

          {/* "Deshalb gibt es diese Karte" section with circle on the same row */}
          <div className="ml-[17%] flex items-start text-white circle-container exit-content-mobile">
            {/* Left side - Text content */}
            <div className="mb-[2rem]">
              <h3 className="font-lato font-normal text-[35px] leading-[35px] tracking-[0px] mb-6 whitespace-pre-line">
                Deshalb gibt es diese Karte.
                {"\n"}Und diese Seite.
              </h3>

              <p className="font-lato font-normal text-[20px] leading-[28px] tracking-[0px] max-w-[500px]">
                Manche treffen die Entscheidung selbst. Andere bekommen von uns ein Feedback – begründet, respektvoll, begleitet von einer erfahrenen Führungscoachin.
              </p>

              <p className="font-lato font-normal text-[20px] leading-[28px] tracking-[0px] max-w-[560px]">
                Wenn wir dich bitten, die Karte abzugeben, dann
                <br /> immer mit:
              </p>

              <ul className="font-lato font-normal text-[20px] leading-[28px] tracking-[0px] max-w-[560px] list-disc pl-6">
                <li>einer klaren Erklärung</li>
                <li>einem Maßnahmenplan zur Weiterentwicklung</li>
                <li>und der Zusicherung:</li>
              </ul>
            </div>

            {/* Right side - Circle */}
            <div className="flex-1 flex justify-start items-center circle-wrapper">
              <div className="bg-[#27557C] rounded-full flex items-center justify-center circle-responsive circle-element lg:w-[473px] lg:h-[473px] lg:ml-20 lg:-translate-y-[10%] w-[378px] h-[378px] ml-24 -translate-y-[5%]">
                <Typography
                  className="circle-text-responsive"
                  sx={{
                    letterSpacing: "0px",
                    textAlign: "center",
                    color: "#FBDB12",
                    fontFamily: "var(--font-crackers-brusher)",
                    transform: "rotate(-4.7deg)",
                    mx: "auto",
                    fontWeight: 400,
                  }}
                >
                  DU BIST UND BLEIBST EIN WERTVOLLER TEIL VON THERAPIUM.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
