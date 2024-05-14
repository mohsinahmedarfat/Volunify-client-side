import { MdOutlineCancel } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import { Link, ScrollRestoration, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const MyVolunteerReq = () => {
  const loadedRequests = useLoaderData();
  console.log(loadedRequests);
  const [requests, setRequests] = useState(loadedRequests);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/volunteer-requests/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Canceled!",
                text: "Your volunteer request has been canceled.",
                icon: "success",
              });
              //remove from UI after delete
              const remainingRequests = requests.filter(
                (request) => request._id !== id
              );
              setRequests(remainingRequests);
            }
          });
      }
    });
  };

  return (
    <div className="my-10 mx-10">
      <ScrollRestoration></ScrollRestoration>
      <Helmet>
        <title>My Requests | Volunify</title>
      </Helmet>
      <h1 className="text-3xl text-center mb-5 font-bold">
        My Volunteer Requests Posts
      </h1>

      {requests.length > 0 ? (
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
              {requests.map((request, idx) => (
                <tr key={request._id} className="hover">
                  <th>{idx + 1}</th>
                  <td>{request.title}</td>
                  <td>{request.location.split(",")[0]}</td>
                  <td>{request.category}</td>
                  <td className="text-center">{request.volunteersNeed}</td>
                  <td>{request.deadline.split("T")[0]}</td>

                  <td
                    onClick={() => handleDelete(request._id)}
                    className="text-xl hover:text-[#AD8B73] cursor-pointer"
                  >
                    <MdOutlineCancel />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-20">
          <h2 className="text-xl">Nothing to display</h2>
          <small className="block">Be a Volunteer Now!</small>
          <button className="w-1/2 mt-3 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#D4A373] rounded-lg shrink-0 sm:w-auto hover:bg-[#AD8B73]">
            <Link to="/volunteer-need">Be a Volunteer</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default MyVolunteerReq;
