import Image from "next/image";
import Container from "./Container";

const Benefits = () => {
  const benefits = [
    {
      icon: "/svg/erfolgskonzept.svg",
      title: "Zugang zum\nErfolgskonzept",
    },
    {
      icon: "/svg/wissenstransfer.svg",
      title: "Umfangreicher\nWissenstransfer",
    },
    {
      icon: "/svg/risiko.svg",
      title: "Vermeidung\nvon Risiko",
    },
    {
      icon: "/svg/geld.svg",
      title: "Spare Geld durch\nteure Fehler",
    },
    {
      icon: "/svg/struktur.svg",
      title: "Erfolg durch\nStruktur",
    },
    {
      icon: "/svg/zeit.svg",
      title: "Enorme\nZeitersparnis",
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
              className="bg-secondary rounded-md p-8 flex flex-col items-center justify-center text-center h-[220px]"
            >
              <div className="mb-4">
                <img 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  width={48} 
                  height={48} 
                  className="w-12 h-12" 
                  style={{ filter: "brightness(0) saturate(100%) invert(88%) sepia(61%) saturate(1200%) hue-rotate(0deg) brightness(105%) contrast(102%)" }}
                />
              </div>
              <h3 className="text-white text-2xl font-medium whitespace-pre-line">{benefit.title}</h3>
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