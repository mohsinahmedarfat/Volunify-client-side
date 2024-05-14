import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/useAuth";

const BeVolunteer = () => {
  const volunteerPost = useLoaderData();
  console.log(volunteerPost);
  const {
    thumbnail,
    title,
    description,
    location,
    category,
    deadline,
    volunteersNeed,
    organizerName,
    organizerEmail,
  } = volunteerPost;
  const date = deadline.split("T")[0];

  const { user } = useAuth();
  const [startDate, setStartDate] = useState(date);
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
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const status = form.status.value;
    const volunteerName = form.volunteerName.value;
    const volunteerEmail = form.volunteerEmail.value;
    const suggestion = form.suggestion.value;

    const volunteer = {
      thumbnail,
      title,
      description,
      location,
      category,
      deadline,
      volunteersNeed,
      status,
      organizerName,
      organizerEmail,
      volunteerName,
      volunteerEmail,
      suggestion,
    };
    console.table(volunteer);

    // volunteer request validation
    if (volunteerEmail === organizerEmail)
      return toast.error("Action not permitted!");

    if (volunteersNeed <= 0)
      return toast.error("Action not permitted! The event is full Now.");

    fetch(`${import.meta.env.VITE_API_URL}/volunteer-requests`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(volunteer),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Volunteer requested successfully");
        }
        navigate("/volunteer-need");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="m-10">
      <Helmet>
        <title>Be a Volunteer | Volunify</title>
      </Helmet>
      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mx-auto">
        <h1 className="text-3xl text-center mb-5 mt-10 font-bold">
          Be a Volunteer
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
                defaultValue={thumbnail}
                className="input input-bordered text-gray-400 pointer-events-none"
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
                defaultValue={title}
                className="input input-bordered text-gray-400 pointer-events-none"
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
                defaultValue={description}
                className="input input-bordered text-gray-400 pointer-events-none"
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
                defaultValue={location}
                className="input input-bordered text-gray-400 pointer-events-none"
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
                defaultValue={category}
                className="input input-bordered text-gray-400 pointer-events-none"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Deadline</span>
              </label>
              <DatePicker
                className="input input-bordered text-gray-400 pointer-events-none w-full"
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
                defaultValue={volunteersNeed}
                className="input input-bordered text-gray-400 pointer-events-none"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Status</span>
              </label>

              <select name="status" id="" className="p-3 border rounded-lg">
                <option value="Request">Request</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Organizer name</span>
              </label>
              <input
                name="organizerName"
                type="text"
                defaultValue={organizerName}
                className="input input-bordered text-gray-400 pointer-events-none"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Organizer Email</span>
              </label>
              <input
                name="organizerEmail"
                type="email"
                defaultValue={organizerEmail}
                className="input input-bordered text-gray-400 pointer-events-none"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Volunteer name</span>
              </label>
              <input
                name="volunteerName"
                type="text"
                defaultValue={user.displayName}
                className="input input-bordered text-gray-400 pointer-events-none"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Volunteer Email</span>
              </label>
              <input
                name="volunteerEmail"
                type="email"
                defaultValue={user.email}
                className="input input-bordered text-gray-400 pointer-events-none"
              />
            </div>

            <div className="form-control w-full col-span-2">
              <label className="label">
                <span className="label-text">Suggestion</span>
              </label>
              <input
                name="suggestion"
                type="text"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#D4A373] hover:bg-[#AD8B73] text-white">
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BeVolunteer;
