import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const AddVolunteer = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (volunteer) => {
    console.log(volunteer);
    reset();
  };

  return (
    <div className="px-5 lg:px-20 xl:px-40 bg-[url('https://i.ibb.co/8c9nmws/slide-2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
      <div className="card shrink-0 w-full shadow-2xl bg-base-100 mx-auto">
        <h1 className="text-3xl text-center mb-5 mt-10 font-bold">
          Add a Volunteer
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Thumbnail</span>
              </label>
              <input
                type="text"
                placeholder="thumbnail URL"
                className="input input-bordered"
                {...register("thumbnail", { required: true })}
              />
              {errors.thumbnail && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Post Title</span>
              </label>
              <input
                type="text"
                placeholder="title"
                className="input input-bordered"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="description"
                className="input input-bordered"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                className="input input-bordered"
                {...register("location", { required: true })}
              />
              {errors.location && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                placeholder="ex. healthcare / education / social service"
                className="input input-bordered"
                {...register("category", { required: true })}
              />
              {errors.category && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">No. of volunteers needed</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                {...register("volunteersNeed", { required: true })}
              />
              {errors.volunteersNeed && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Organizer name</span>
              </label>
              <input
                type="text"
                value={user.displayName}
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Organizer Email</span>
              </label>
              <input
                type="email"
                value={user.email}
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <small className="text-red-500 mt-2">
                  This field is required
                </small>
              )}
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

export default AddVolunteer;
