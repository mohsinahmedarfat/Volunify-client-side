// import { useLoaderData } from "react-router-dom";
import BeAVolunteer from "./BeAVolunteer";
import Slider from "./Slider";
import VolunteerOpportunities from "./VolunteerOpportunities";
import VolunteerNeed from "../volunteerPosts/VolunteerNeed";
import { ScrollRestoration } from "react-router-dom";

const Home = () => {
  return (
    <div className="px-5 lg:max-w-4xl xl:max-w-6xl mx-auto space-y-24">
      <ScrollRestoration></ScrollRestoration>
      <Slider />
      <VolunteerNeed></VolunteerNeed>
      <BeAVolunteer></BeAVolunteer>
      <VolunteerOpportunities></VolunteerOpportunities>
    </div>
  );
};

export default Home;
