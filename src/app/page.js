import Hero from "../components/Hero";
import ValuesVision from "../components/ValuesVision";
import Benefits from "../components/Benefits";
import HeroEnver from "../components/HeroEnver";
import TherapiumZahlen from "../components/TherapiumZahlen";
import SuccessStory from "../components/SuccessStory";
import CareerPath from "../components/CareerPath";
import WerdeLeader from "../components/WerdeLeader";
import ApplicationForm from "../components/ApplicationForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <div id="section-hero">
        <Hero />
      </div>
      <div id="section-values">
        <ValuesVision />
      </div>
      <div id="section-benefits">
        <Benefits />
      </div>
      <div id="section-hero-enver">
        <HeroEnver />
      </div>
      <div id="section-zahlen">
        <TherapiumZahlen />
      </div>
      <div id="section-success">
        <SuccessStory />
      </div>
      <div id="section-career">
        <CareerPath />
      </div>
      <div id="section-leader">
        <WerdeLeader />
      </div>
      <div id="section-application-form">
        <ApplicationForm />
      </div>
    </div>
  );
}
