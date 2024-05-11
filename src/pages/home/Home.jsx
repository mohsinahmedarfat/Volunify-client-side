import BeAVolunteer from "./BeAVolunteer";
import Slider from "./Slider";

const Home = () => {
  return (
    <div className="px-5 lg:max-w-4xl xl:max-w-6xl mx-auto space-y-24">
      <Slider />
      <BeAVolunteer></BeAVolunteer>
    </div>
  );
};

export default Home;
