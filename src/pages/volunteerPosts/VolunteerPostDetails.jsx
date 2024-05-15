import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";

const VolunteerPostDetails = () => {
  const volunteerPost = useLoaderData();
  const {
    _id,
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

  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-10 mx-auto space-y-6 lg:py-16 lg:items-center">
        <div className="h-full">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={thumbnail}
            alt="glasses photo"
          />
        </div>

        <div className="w-full h-full">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-gray-600">{description}</p>

            <div>
              <table className="table mb-6">
                {/* head */}
                <thead>
                  <tr>
                    <th>location</th>
                    <th>category</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{location}</td>
                    <td>{category}</td>
                  </tr>
                </tbody>

                {/* head */}
                <thead>
                  <tr>
                    <th>deadline</th>
                    <th>volunteersNeed</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{date}</td>
                    <td>{volunteersNeed}</td>
                  </tr>
                </tbody>

                {/* head */}
                <thead>
                  <tr>
                    <th>organizerName</th>
                    <th>organizerEmail</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{organizerName}</td>
                    <td>{organizerEmail}</td>
                  </tr>
                </tbody>
              </table>

              <div className="w-full">
                <button className="!w-full px-5 py-3 text-sm tracking-wide text-white transition-colors duration-200 bg-[#D4A373] rounded-lg shrink-0 sm:w-auto hover:bg-[#AD8B73]">
                  <Link to={`/be-volunteer/${_id}`}>Be a Volunteer</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerPostDetails;
