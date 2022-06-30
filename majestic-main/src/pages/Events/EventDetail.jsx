import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../../components";
import { apiUrl, appUrl } from "../../utils/url";
import moment from "moment";

const EventDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const fetchData = async () => {
    const res = await fetch(`${apiUrl()}/products/${id}`);
    const data = await res.json();
    setData(data["data"]);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
    fetchData();
  }, []);

  const deleteCommentHandler = async (id, e) => {
    await fetch(`${apiUrl()}/comments/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        alert("Success");
        window.location.reload();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white px-16 py-10 rounded-lg shadow">
              <div className="flex justify-between items-center">
                <Link
                  to={"/events"}
                  className="inline-block bg-teal-500 text-white py-2 px-4 rounded"
                >
                  Kembali
                </Link>
                <h3 className="text-2xl font-bold text-teal-800">
                  {data.title}
                </h3>
              </div>
              {data.image && (
                <img
                  src={`${appUrl()}/images/${data.image}`}
                  alt="Event Cover"
                  className="w-full h-96 py-5 object-cover"
                />
              )}
              <div className="flex justify-between">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p>{data.address}</p>
                </div>
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>{moment(data.created_at).format("yyyy-MM-DD, h:mm")}</p>
                </div>
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <p>{data.likes ? data.likes.length : 0}</p>
                </div>
              </div>
              <p className="py-5">{data.description}</p>
              <div>
                <p className="font-bold pb-2">Komentar</p>
                <hr />
                {data.comments &&
                  data.comments.map((comment, i) => {
                    return (
                      <div key={i} className="py-3">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{comment.user.name}</h3>
                          <p
                            className="text-red-600 cursor-pointer"
                            onClick={deleteCommentHandler.bind(
                              this,
                              comment.id
                            )}
                          >
                            Hapus
                          </p>
                        </div>
                        <p>{comment.comment}</p>
                        <hr />
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EventDetail;
