import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerPostCard from "./VolunteerPostCard";
import { Helmet } from "react-helmet-async";

const VolunteerAllPosts = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  console.log(volunteerPosts);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/volunteers`)
      .then((data) => setVolunteerPosts(data.data));
  }, []);
  return (
    <div className="px-10">
      <Helmet>
        <title>Need Volunteer Posts | Volunify</title>
      </Helmet>
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-3">
          Empowerment Through Volunteering
        </h1>
        <p className="text-balance">
          Take action and empower others by volunteering. Join our community of
          changemakers and make a difference today.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {volunteerPosts.map((volunteerPost) => (
          <VolunteerPostCard
            key={volunteerPost._id}
            volunteerPost={volunteerPost}
          ></VolunteerPostCard>
        ))}
      </div>
    </div>
  );
};

export default VolunteerAllPosts;
