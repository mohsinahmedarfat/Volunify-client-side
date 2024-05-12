import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const VolunteerPostCard = ({ volunteerPost }) => {
  const { _id, thumbnail, title, category, deadline } = volunteerPost;
  const date = deadline.split("T")[0];
  return (
    <div>
      <Fade>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow group">
          <img className="rounded-t-lg" src={thumbnail} alt="" />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-[#9d6b53]">
              {title}
            </h5>
            <div className="flex justify-between my-4">
              <span className="bg-[#FAEDCD] text-[#774936] text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">
                {category}
              </span>
              <span className="bg-[#FAEDCD] text-[#774936] text-sm font-medium me-2 px-2.5 py-0.5 rounded-full">
                Deadline: {date}
              </span>
            </div>

            {/* <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-[#AD8B73]"> */}
            <Link to={`/volunteer-post/${_id}`}>
              <div className="text-[#b07d62] hover:text-[#9d6b53] hover:font-medium w-max flex items-center ">
                <p>View Details</p>
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default VolunteerPostCard;
