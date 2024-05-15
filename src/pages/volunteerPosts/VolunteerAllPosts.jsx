import axios from "axios";
import { useEffect, useState } from "react";
import VolunteerPostCard from "./VolunteerPostCard";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const VolunteerAllPosts = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const { user } = useAuth();
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/volunteers?email=${
          user.email
        }&search=${search}&sort=${sort}`,
        {
          withCredentials: true,
        }
      )
      .then((data) => setVolunteerPosts(data.data));
  }, [search, sort, user.email]);

  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.search.value;
    setSearch(text);
  };

  return (
    <div className="px-5 lg:px-10">
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

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between">
        <div className="flex justify-center">
          <select
            onChange={(e) => {
              setSort(e.target.value);
            }}
            value={sort}
            name="sort"
            id=""
            className="border text-center w-max h-max p-4 rounded-md text-sm bg-[#D4A373] *:bg-white *:text-black text-white"
            // className="hover:bg-[#AD8B73] bg-[#D4A373] text-white font-medium"
          >
            <option value="">Sort</option>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>

        <form onSubmit={handleSearch}>
          <div className="mb-10 flex">
            <input
              name="search"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="ml-3 px-5 py-[14px] text-sm tracking-wide text-white transition-colors duration-200 bg-[#D4A373] rounded-lg shrink-0 sm:w-auto hover:bg-[#AD8B73]">
              Search
            </button>
          </div>
        </form>
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
