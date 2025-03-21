import Image from "next/image";
import Container from "./Container";

const ValuesVision = () => {
  const values = [
    {
      icon: "/svg/partnerschaft.svg",
      title: "Partnerschaft",
      description: "Wir begleiten dich auf deinem Weg zum erfolgreichen Unternehmer.",
    },
    {
      icon: "/svg/innovation.svg",
      title: "Innovation",
      description: "Wir setzen auf moderne Konzepte und stetige Weiterentwicklung & Fortbildungen.",
    },
    {
      icon: "/svg/wachstum.svg",
      title: "Wachstum",
      description: "Dein Erfolg ist unser Antrieb – begleite uns auf unserem stetigen Wachstum.",
    },
    {
      icon: "/svg/nachhaltigkeit.svg",
      title: "Nachhaltigkeit",
      description: "Langfristige Perspektiven für dich und unsere Patienten für nachhaltigen Erfolg.",
    },
  ];

  return (
    <section className="bg-secondary py-16 font-lato">
      <Container>
        <div className="flex flex-col items-center md:items-start md:flex-row justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-7xl font-regular text-white text-center md:text-left">
              Unsere <br />
              Werte & Visionen
            </h2>
          </div>
          <div className="md:w-1/2 self-stretch flex flex-col justify-end text-center md:text-left">
            <p className="text-white md:text-2xl sm:text-2xl text-center md:text-left">
              Leitgedanken für erfolgreiches Konzept & <br />
              nachhaltigen Erfolg für unsere Praxen
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto md:mx-0">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col items-start w-[196px] h-[248px] mx-auto md:mx-0">
              <div className="mb-6">
                <img 
                  src={value.icon} 
                  alt={value.title} 
                  width={48} 
                  height={48} 
                  className="w-12 h-12" 
                  style={{ filter: "brightness(0) saturate(100%) invert(80%) sepia(43%) saturate(1095%) hue-rotate(359deg) brightness(103%) contrast(104%)" }}
                />
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{value.title}</h3>
              <p className="text-white text-left">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-center mt-16">
          <button className="bg-[#FBDB12] rounded-full p-4  transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
};

export default ValuesVision;
