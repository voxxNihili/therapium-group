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
      <Hero />
      <ValuesVision />
      <Benefits />
      <HeroEnver />
      <TherapiumZahlen />
      <SuccessStory />
      <CareerPath />
      <WerdeLeader />
      <ApplicationForm />
    </div>
  );
}
