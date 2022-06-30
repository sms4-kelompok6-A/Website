import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "../../components";
import { apiUrl } from "../../utils/url";
import moment from "moment";

const OrderDetail = () => {
  const { id } = useParams();
  const [dataOrder, setDataOrder] = useState({});
  const fetchData = async () => {
    try {
      const res = await fetch(`${apiUrl()}/orders/${id}`);
      const respon = await res.json();
      const data = respon["data"];
      setDataOrder(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/login";
    }
    fetchData();
  }, []);

  const konfirmasiHandler = async (id, e) => {
    const form = new FormData();
    form.append("status", "Selesai");

    await fetch(`${apiUrl()}/users/orders/confirm/${id}`, {
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
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto bg-white px-16 py-10 rounded-lg shadow">
              <div className="flex justify-between items-center w-full">
                <Link
                  to={"/orders"}
                  className="inline-block bg-teal-500 text-white py-2 px-4 rounded"
                >
                  Back
                </Link>
                <h3 className="text-2xl font-bold text-teal-800">
                  Order Detail
                </h3>
              </div>
              {dataOrder.code && (
                <div className="pt-5 flex justify-between">
                  <div className="w-1/2">
                    <h3 className="font-bold text-md">Id Order</h3>
                    <p>{dataOrder.code}</p>
                    <h3 className="font-bold text-md">Nama Lengkap</h3>
                    <p>{dataOrder.user.name}</p>
                    <h3 className="font-bold text-md">Product</h3>
                    <p>{dataOrder.product.title}</p>
                    <h3 className="font-bold text-md">Status</h3>
                    <p>{dataOrder.status}</p>
                  </div>
                  <div className="w-1/2">
                    <h3 className="font-bold text-md">Tanggal</h3>
                    <p>{moment(dataOrder.date).format("yyyy-MM-DD")}</p>
                    <h3 className="font-bold text-md">Email</h3>
                    <p>{dataOrder.user.email}</p>
                    <h3 className="font-bold text-md">Harga</h3>
                    <p>{dataOrder.product.price}</p>
                    <h3 className="font-bold text-md">Total Harga</h3>
                    <p>{dataOrder.product.price}</p>
                  </div>
                </div>
              )}

              {dataOrder.status === "Menunggu Konfirmasi" ? (
                <button
                  onClick={konfirmasiHandler.bind(this, dataOrder.id)}
                  className="bg-teal-500 text-white py-2 px-4 rounded mt-10"
                >
                  Konfirmasi Pembayaran
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetail;
