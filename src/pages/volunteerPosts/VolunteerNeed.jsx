import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerPostCard from "./VolunteerPostCard";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import useAuth from "../../hooks/useAuth";

const VolunteerNeed = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/volunteers`, {
        withCredentials: true,
      })
      .then((data) => setVolunteerPosts(data.data));
  }, [user?.email]);
  return (
    <div>
      <Fade>
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-3">
            Empowerment Through Volunteering
          </h1>
          <p className="text-balance">
            Take action and empower others by volunteering. Join our community
            of changemakers and make a difference today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volunteerPosts.slice(0, 6).map((volunteerPost) => (
            <VolunteerPostCard
              key={volunteerPost._id}
              volunteerPost={volunteerPost}
            ></VolunteerPostCard>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="w-1/2 mt-10 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#D4A373] rounded-lg shrink-0 sm:w-auto hover:bg-[#AD8B73]">
            <Link to="/volunteer-need">See All</Link>
          </button>
        </div>
      </Fade>
    </div>
  );
};

export default VolunteerNeed;
