import { Slide } from "react-awesome-reveal";
import img from "../../assets/images/volunteer-opportunities.jpg";

const VolunteerOpportunities = () => {
  return (
    <div>
      <div className="mb-12">
        <h1 className="text-bold text-4xl ">Explore Endless Possibilities</h1>
        <h3 className="font-medium text-lg mb-5">
          Discover Our Volunteer Opportunities!
        </h3>
      </div>

      <div className="relative grid gird-cols-1 lg:grid-cols-3 lg:gap-10">
        <div className="space-y-10 my-auto text-white order-last lg:order-none">
          <Slide direction="right">
            <div className="p-5 rounded-3xl bg-[#b07d62]">
              <h3 className="font-bold text-lg mb-5">
                Environmental Stewardship Ambassador
              </h3>
              <p>
                Help protect our planet by participating in local clean-up
                events, organizing workshops.
              </p>
            </div>

            <div className="lg:relative lg:w-[500px] p-5 rounded-3xl bg-[#adc178]">
              <h3 className="font-bold text-lg mb-5">
                Community Outreach Coordinator
              </h3>
              <p>
                Connect with local organizations, businesses, and residents to
                raise awareness about social issues and coordinate community
                projects.
              </p>
            </div>
            <div className="p-5 rounded-3xl bg-[#b07d62]">
              <h3 className="font-bold text-lg mb-5">
                Youth Mentorship Mentor
              </h3>
              <p>
                Inspire at-risk youth through one-on-one mentoring, group
                activities, and skill-building workshops.
              </p>
            </div>
          </Slide>
        </div>
        <div className="col-span-2 mb-10 lg:mb-0">
          <img className="h-full rounded-3xl" src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VolunteerOpportunities;
