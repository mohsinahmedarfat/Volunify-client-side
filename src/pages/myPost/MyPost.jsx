import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const MyPost = () => {
  const { user } = useAuth();
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/volunteer-posts/${user?.email}`)
      .then((data) => {
        console.log(data.data);
        setMyPosts(data.data);
      });
  }, [user?.email]);

  return (
    <div className="my-10 mx-10">
      <h1 className="text-3xl text-center mb-5 font-bold">
        My Volunteer Need Posts
      </h1>

      {myPosts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="text-[#AD8B73] font-bold">
                <th></th>
                <th>Post Title</th>
                <th>Location</th>
                <th>Category</th>
                <th>No. of Vol. Needs</th>
                <th>Deadline</th>
              </tr>
            </thead>
            <tbody>
              {myPosts.map((myPost, idx) => (
                <tr key={myPost._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{myPost.title}</td>
                  <td>{myPost.location.split(",")[0]}</td>
                  <td>{myPost.category}</td>
                  <td className="text-center">{myPost.volunteersNeed}</td>
                  <td>{myPost.deadline.split("T")[0]}</td>
                  <td className="text-xl hover:text-[#AD8B73]">
                    <Link>
                      <BiEdit />
                    </Link>
                  </td>
                  <td className="text-xl hover:text-[#AD8B73]">
                    <Link>
                      <AiOutlineDelete />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl">Nothing to display</h2>
          <small className="block">Please create a post</small>
          <button className="w-1/2 mt-3 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#D4A373] rounded-lg shrink-0 sm:w-auto hover:bg-[#AD8B73]">
            <Link to="/add-volunteer">Add a post</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default MyPost;
