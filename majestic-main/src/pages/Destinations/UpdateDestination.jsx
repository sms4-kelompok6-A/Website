import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Layout } from "../../components";
import { apiUrl, appUrl } from "../../utils/url";

const UpdateDestination = () => {
  const { id } = useParams();
  const [dataDestination, setDataDestination] = useState({});
  let navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState();
  const [title, setTitle] = useState();
  const [address, setAddress] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.getElementById("updateForm");

    const formData = new FormData(form);

    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    formData.append("title", title);
    formData.append("address", address);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("category", "Destinasi");

    fetch(`${apiUrl()}/products/${id}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        navigate("/destinations", { replace: true });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/";
    }
    fetchData();
  }, []);

  const fetchData = async () => {
    const req = await fetch(`${apiUrl()}/products/${id}`);
    const data = await req.json();
    setDataDestination(data["data"]);
    setTitle(data["data"].title);
    setPrice(data["data"].price);
    setAddress(data["data"].address);
    setDescription(data["data"].description);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden max-w-6xl mx-auto bg-white px-16 py-10">
              <div className="flex justify-between items-center">
                <Link
                  to={"/destinations"}
                  className="inline-block bg-teal-500 text-white py-2 px-4 rounded"
                >
                  Kembali
                </Link>
                <h3 className="text-2xl font-bold text-teal-800">
                  Update Destinasi
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
                    value={title}
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
                    value={price}
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
                    value={address}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  ></textarea>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block mb-2 text-teal-800">
                    Gambar
                  </label>
                  {dataDestination.image && (
                    <img
                      src={`${appUrl()}/images/${dataDestination.image}`}
                      alt=""
                      className="w-full h-72 object-cover py-5"
                    />
                  )}
                  <input
                    type="file"
                    id="email"
                    onChange={changeHandler}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  />
                </div>
                <button
                  type="submit"
                  className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded px-4 py-2 text-center dark:hover:bg-teal-600 block"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateDestination;
