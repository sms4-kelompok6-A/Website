import moment from "moment";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../../components";
import { apiUrl } from "../../utils/url";

const Order = () => {
  const [order, setOrder] = useState([]);
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
    await fetch(`${apiUrl()}/orders`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setOrder(data["data"]["data"]);
      });
  };

  const cancelHandler = async (id, e) => {
    await fetch(`${apiUrl()}/users/orders/cancel/${id}`, {
      method: "PUT",
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
        <h3 className="text-2xl text-teal-800 font-bold">List Orders</h3>
      </div>
      <table className="min-w-full text-start mt-8">
        <thead className="border-b bg-teal-500">
          <tr>
            <th className="font-normal text-white text-start px-6 py-4">#</th>
            <th className="font-normal text-white text-start px-6 py-4">
              Code
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Status
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Tanggal
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? []
            : order.length > 0 &&
              order.map((item, i) => (
                <tr className="bg-white border-b" key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-800">
                    {i + 1}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    <Link to={`/orders/${item.id}`} className="hover:underline">
                      {item.code}
                    </Link>
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {item.status}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {moment(item.date).format("yyyy-MM-DD")}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {item.status === "Menunggu Pembayaran" ? (
                      <button
                        onClick={cancelHandler.bind(this, item.id)}
                        className="inline-block bg-red-400 text-white p-2 rounded"
                      >
                        Batalkan
                      </button>
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Order;
