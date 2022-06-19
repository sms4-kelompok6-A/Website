import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { apiUrl, appUrl } from "../../helpers/Config";

export default function Destination() {
  const [destination, setDestination] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  // const ask = confirm('Apakah anda yakin ingin menghapus data?');

  useEffect(() => {
    setisLoading(true);
    fetchData();
    setisLoading(false);
  }, []);

  const fetchData = async () => {
    await fetch(`${apiUrl()}/destinations?item=15`)
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
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Helmet>
        <title>Majestic Banyuangi</title>
        <meta name="keywords" content="HTML,CSS,JavaScript" />
        <meta
          name="description"
          content="Ideas page using react helmet very easy to implement "
        />
      </Helmet>
      <Navbar />
      <div className={`lg:px-20 md:px-10 px-2 w-full`}>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden max-w-6xl mx-auto bg-white px-16 py-10">
                <div className="mb-10 items-center flex justify-between">
                  <h3 className="text-2xl">List Destination</h3>
                  <Link to="/destinations/create">
                    <button
                      type="submit"
                      className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-xs px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:ring-teal-700 block"
                    >
                      Add Destination
                    </button>
                  </Link>
                </div>
                <table className="min-w-full text-start">
                  <thead className="border-b bg-gray-500">
                    <tr>
                      <th className="text-sm font-medium text-white text-start px-6 py-4">
                        #
                      </th>
                      <th className="text-sm font-medium text-white text-start px-6 py-4">
                        Title
                      </th>
                      <th className="text-sm font-medium text-white text-start px-6 py-4">
                        Category
                      </th>
                      <th className="text-sm font-medium text-white text-start px-6 py-4">
                        Image
                      </th>
                      <th className="text-sm font-medium text-white text-start px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {isLoading
                      ? []
                      : destination.length > 0 &&
                        destination.map((item, i) => (
                          <tr className="bg-white border-b" key={i}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {i + 1}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.title}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {item.category}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <div className="w-20 h-10 relative">
                                <img
                                  className="h-full w-full object-cover"
                                  src={appUrl() + "/" + item.image}
                                  alt={item.title}
                                />
                              </div>
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              <Link to={`/destinations/update/${item.id}`}>
                                Update
                              </Link>
                              |
                              <button
                                onClick={deleteDataHandler.bind(this, item.id)}
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
