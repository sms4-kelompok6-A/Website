import React, { useEffect, useState } from "react";
import Helmet from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { apiUrl } from "../../helpers/Config";

export default function UpdateDestination(props) {
  const [selectedFile, setSelectedFile] = useState();
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  const { id } = useParams();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("image", selectedFile);
    formData.append("title", title);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", "Destinasi");

    fetch(`${apiUrl()}/products`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        window.location.href = "/destinations";
      })
      .catch((error) => {
        console.error("Error:", error);
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
      <div className="lg:px-20 md:px-10 px-2 w-full">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden max-w-6xl mx-auto bg-white px-16 py-10">
                <div className="mb-10 items-center flex justify-between">
                  <h3 className="text-2xl">
                    Create Destination {id}
                  </h3>
                  <Link to="/destinations">
                    <button
                      type="submit"
                      className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-xs px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:ring-teal-700 block"
                    >
                      Back
                    </button>
                  </Link>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Judul
                    </label>
                    <input
                      type="text"
                      id="email"
                      onChange={(e) => setTitle(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Harga
                    </label>
                    <input
                      type="text"
                      id="email"
                      onChange={(e) => setPrice(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Alamat
                    </label>
                    <input
                      type="text"
                      id="email"
                      onChange={(e) => setAddress(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Deskripsi
                    </label>
                    <textarea
                      type="text"
                      rows={5}
                      id="email"
                      onChange={(e) => setDescription(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-6">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Gambar
                    </label>
                    <input
                      type="file"
                      id="email"
                      onChange={changeHandler}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-600 dark:focus:ring-blue-700 block"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
