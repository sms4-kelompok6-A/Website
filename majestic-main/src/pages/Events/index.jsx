import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { Link } from "react-router-dom";
import { apiUrl, appUrl } from "../../utils/url";

const Events = () => {
  const [destination, setDestination] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
    setisLoading(true);
    fetchData();
    setisLoading(false);
  }, []);

  const fetchData = async () => {
    await fetch(`${apiUrl()}/events?item=15`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDestination(data["data"]);
      });
  };

  const deleteDataHandler = async (id, e) => {
    await fetch(`${apiUrl()}/products/${id}`, {
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
      <div className="flex justify-between items-center">
        <h3 className="text-2xl text-teal-800 font-bold">List Events</h3>
        <Link
          to={"/events/add"}
          className="inline-block bg-teal-500 text-white py-2 px-4 rounded"
        >
          Tambah Event
        </Link>
      </div>
      <table className="min-w-full text-start mt-8">
        <thead className="border-b bg-teal-500">
          <tr>
            <th className="font-normal text-white text-start px-6 py-4">#</th>
            <th className="font-normal text-white text-start px-6 py-4">
              Judul
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Kategori
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Gambar
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Aksi
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? []
            : destination.length > 0 &&
              destination.map((item, i) => (
                <tr className="bg-white border-b" key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-800">
                    {i + 1}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    <Link to={`/events/${item.id}`} className="hover:underline">
                      {item.title}
                    </Link>
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    <div className="w-20 h-10 relative">
                      {item.image && (
                        <img
                          className="h-full w-full object-cover"
                          src={`${appUrl()}/images/${item.image}`}
                          alt={item.title}
                        />
                      )}
                    </div>
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    <Link to={`/events/update/${item.id}`}>Update</Link>|
                    <button onClick={deleteDataHandler.bind(this, item.id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Events;
