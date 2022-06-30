import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components";

const AddDestination = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
  }, []);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("updateForm");

    const formData = new FormData(form);

    formData.append("image", selectedFile);
    formData.append("title", title);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", "Destinasi");

    fetch(`https://majestic-banyuangi.ws-tif.com/api/api/products`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        // window.location.href = "/destinations";
        navigate("/destinations", { replace: true });
      })
      .catch((error) => {
        console.error("Error:", error);
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
                  to={"/destinations"}
                  className="inline-block bg-teal-500 text-white py-2 px-4 rounded"
                >
                  Kembali
                </Link>
                <h3 className="text-2xl font-bold text-teal-800">
                  Tambah Destinasi
                </h3>
              </div>
              <form className="pt-6" id="updateForm" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-teal-800">
                    Judul
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-teal-800">
                    Harga
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={(e) => setPrice(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-teal-800">
                    Alamat
                  </label>
                  <input
                    type="text"
                    id="email"
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-teal-800">
                    Deskripsi
                  </label>
                  <textarea
                    type="text"
                    rows={5}
                    id="email"
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-teal-800">
                    Gambar
                  </label>
                  <input
                    type="file"
                    id="email"
                    accept="image/*"
                    multiple={false}
                    onChange={changeHandler}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded px-4 py-2 text-center dark:hover:bg-teal-600 block"
                >
                  Tambah
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AddDestination;
