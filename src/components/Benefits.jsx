"use client";
import Image from "next/image";
import Container from "./Container";
import { useState, useEffect } from "react";

const Benefits = () => {
  const benefits = [
    {
      icon: "/svg/erfolgskonzept.svg",
      title: "Zugang zum\nErfolgskonzept",
      content:"Profitiere von einem bewährten System, das bereits mehrfach erfolgreich umgesetzt wurde – ohne bei null anfangen zu müssen."
    },
    {
      icon: "/svg/wissenstransfer.svg",
      title: "Umfangreicher\nWissenstransfer",
      content: "Lerne von erfahrenen Experten, tausche dich mit erfolgreichen Geschäftsführern aus und nutze wertvolles Branchenwissen."
    },
    {
      icon: "/svg/risiko.svg",
      title: "Vermeidung\nvon Risiko",
      content: "Dank unserer erprobten Strategien umgehst du typische Fehler und minimierst unternehmerische Unsicherheiten."
    },
    {
      icon: "/svg/geld.svg",
      title: "Spare Geld durch\nteure Fehler",
      content: "Durch unser Know-how und unsere Erfahrung bewahrst du dich vor kostspieligen Fehlinvestitionen und unnötigen Ausgaben."
    },
    {
      icon: "/svg/struktur.svg",
      title: "Erfolg durch\nStruktur",
      content: "Konzentriere dich auf deine Patienten – wir übernehmen die administrativen Aufgaben wie Personalmanagement, Abrechnung und Organisation."
    },
    {
      icon: "/svg/zeit.svg",
      title: "Enorme\nZeitersparnis",
      content: "Mit unserem etablierten System, klaren Prozessen und professioneller Unterstützung erreichst du dein Ziel schneller und effizienter."
    },
  ];

  return (
    <section className="bg-white py-16 font-lato">
      <Container>
        <div className="text-center mb-8">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-2">Deine Benefits</h2>
          <p className="text-xl text-gray-700">Profitiere von unserem Leadership Programm</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`
                group rounded-md p-6 flex flex-col transition-all duration-300 relative
                bg-white border border-secondary md:bg-secondary md:border-0
                md:hover:bg-white md:hover:border md:hover:border-secondary
                h-auto md:h-[280px]
              `}
            >
              {/* Desktop-only default state (white text on blue bg) */}
              <div className="hidden md:flex flex-col items-center text-center h-full justify-center z-10 group-hover:opacity-0 transition-opacity duration-300">
                <div className="mb-4">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={48} 
                    height={48} 
                    className="w-12 h-12" 
                    style={{ 
                      filter: "brightness(0) saturate(100%) invert(88%) sepia(61%) saturate(1200%) hue-rotate(0deg) brightness(105%) contrast(102%)"
                    }}
                  />
                </div>
                <h3 className="text-white text-2xl font-medium whitespace-pre-line">{benefit.title}</h3>
              </div>
              
              {/* Mobile visible and desktop hover state content */}
              <div className="flex md:absolute inset-0 p-6 flex-col items-center justify-center md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                <div className="mb-4">
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title} 
                    width={48} 
                    height={48} 
                    className="w-12 h-12" 
                    style={{ 
                      filter: "brightness(0) saturate(100%) invert(19%) sepia(19%) saturate(1565%) hue-rotate(171deg) brightness(93%) contrast(87%)"
                    }}
                  />
                </div>
                <h3 className="text-[#27557C] text-2xl font-medium whitespace-pre-line mb-3 text-center">{benefit.title}</h3>
                <p className="text-[#555555] text-center">{benefit.content}</p>
              </div>
            </div>
          ))}
        </div>

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
};

export default Benefits; 