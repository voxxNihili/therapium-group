import Image from "next/image";

const SuccessStory = () => {
  return (
    <section className="bg-secondary py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl md:text-3xl  mb-8">Erfolgsgeschichten bei THERAPIUM</h2>

        <div className="mb-8">
          <h3 className="text-2xl md:text-4xl font-medium mb-6">"Ich hätte nie gedacht, dass ich so schnell und mit dieser Unterstützung einmal meine eigene Praxis führen würde – <br/> bis ich auf THERAPIUM gestoßen bin."</h3>
          <div className="h-px w-1/3 bg-white/30 my-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-center">
          {/* Main content column - contains both text and profile */}
          <div className="col-span-1 md:col-span-8">
            <div className="flex flex-col md:flex-col gap-8">
              {/* Main text section */}
              <div className="flex-1">
                <p className="mb-5">
                  Akis begann seine Karriere als engagierter Physiotherapeut, doch der Traum von der eigenen Praxis schien unerreichbar. Bürokratie, Finanzierung, Standortwahl – all das hielt ihn zurück. Durch THERAPIUM bekam er nicht nur die nötige
                  Unterstützung, sondern auch ein erprobtes Konzept an die Hand.
                </p>
                <p>Mit der Hilfe der THERAPIUM Group durchlief er das Karriere-Leadership-Programm, lernte unternehmerische Strategien und erhielt Unterstützung bei der Gründung seiner eigenen Praxis.</p>
              </div>

              {/* Profile section */}
              <div className="flex flex-row items-center space-y-4 md:w-48 md:flex-shrink-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden relative">
                    <Image src="/akis.webp" alt="Akis - Geschäftsführer" width={128} height={128} className="object-cover" />
                  </div>
                </div>
                <div className="text-start pl-12">
                  <h4 className="text-xl font-semibold text-[#FBDB12]">Akis</h4>
                  <p className="text-white/80">Geschäftsführer</p>
                  <p className="text-white w-100">THERAPIUM Charlottenburg</p>
                </div>
              </div>
            </div>
          </div>

          {/* Badge column */}
          <div className="col-span-1 md:col-span-2 flex justify-center md:justify-start items-center">
            <div className="bg-yellow-400 text-blue-900 rounded-full p-4 w-34 h-34 flex items-center justify-center font-bold text-lg rotate-[-8.15deg]">
              <span className="font-crackers  font-normal text-[32px] leading-[33px] text-center leading-tight">DAS WILL ICH AUCH!</span>
            </div>
          </div>
        </div>
   
        <div className="flex justify-center mt-20">
          <div className="bg-yellow-400 rounded-full p-3 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-900" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStory;
