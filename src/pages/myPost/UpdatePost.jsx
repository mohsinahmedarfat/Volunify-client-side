import axios from "axios";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

const UpdatePost = () => {
  const post = useLoaderData();
  console.log(post);
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.thumbnail.value;
    const title = form.title.value;
    const description = form.description.value;
    const location = form.location.value;
    const category = form.category.value;
    const deadline = startDate;
    const volunteersNeed = parseInt(form.volunteersNeed.value);
    const organizerName = form.name.value;
    const organizerEmail = form.email.value;

    const UpdatedPost = {
      thumbnail,
      title,
      description,
      location,
      category,
      deadline,
      volunteersNeed,
      organizerName,
      organizerEmail,
    };
    console.table(UpdatedPost);

    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/update-post/${post._id}`,
        UpdatedPost
      );
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Post updated successfully");
        navigate("/my-posts");
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  return (
    <div className="m-10">
      <Helmet>
        <title>Update Post | Volunify</title>
      </Helmet>
      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mx-auto">
        <h1 className="text-3xl text-center mb-5 mt-10 font-bold">
          Update Post
        </h1>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                name="thumbnail"
                type="text"
                placeholder="thumbnail URL"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                name="description"
                type="text"
                placeholder="description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                name="location"
                type="text"
                placeholder="Location"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                name="category"
                type="text"
                placeholder="ex. healthcare / education / social service"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <DatePicker
                className="input input-bordered w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">No. of volunteers needed</span>
              </label>
              <input
                name="volunteersNeed"
                type="number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Organizer name</span>
              </label>
              <input
                name="name"
                type="text"
                value={user.displayName}
                className="input input-bordered"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Organizer Email</span>
              </label>
              <input
                name="email"
                type="email"
                value={user.email}
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D4A373] hover:bg-[#AD8B73] text-white">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatePost;
