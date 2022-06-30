import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { apiUrl, appUrl } from "../../utils/url";

const Main = () => {
  const [code, setCode] = useState();
  const [dataOrder, setDataOrder] = useState();
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch(
        `${apiUrl()}/get-order?code=${code.toUpperCase()}`
      );
      const res = await req.json();
      setDataOrder(res["data"]);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="container mx-auto p-10">
      <div className="flex justify-end">
        <Link
          to={"/login"}
          className="py-2 px-4 inline-block border border-teal-500 text-teal-800 rounded hover:bg-teal-500 hover:text-white"
        >
          Masuk Admin
        </Link>
      </div>
      <div className="p-10 mt-10 rounded shadow bg-teal-500">
        <h1 className="text-3xl font-bold text-center text-white">
          Cek Id Pesanan
        </h1>
        <form action="" className="flex space-x-5 pt-5" onSubmit={handleSumbit}>
          <input
            type="text"
            placeholder="Masukan id order..."
            onChange={(e) => setCode(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
          <button
            type="submit"
            className="py-2 px-12 inline-block  rounded bg-teal-400 text-white"
          >
            Cari
          </button>
        </form>
      </div>
      {dataOrder && (
        <div className="p-10 rounded shadow-lg mt-10">
          <div>
            <p>Kode Pesanan</p>
            <p className="font-bold">{dataOrder.code}</p>
            <hr />
          </div>
          <div className="flex justify-between">
            <div>
              <p>Tiket</p>
              <p className="font-bold">{dataOrder.product.title}</p>
            </div>
            <div className="text-right">
              <p>Total Harga</p>
              <p className="font-bold">{dataOrder.total}</p>
            </div>
          </div>
          <hr />
          <div className="flex justify-between">
            <div>
              <p>Transfer Ke</p>
              <p className="font-bold">{`${dataOrder.payment.name} (${dataOrder.payment.bank})`}</p>
            </div>
            <div className="text-right">
              <p>No Rekening</p>
              <p className="font-bold">{dataOrder.payment.number}</p>
            </div>
          </div>
          <hr />
          <div className="pt-5">
            <p className="text-center">Bukti Transfer</p>
            {dataOrder.transfer && (
              <img src={`${appUrl()}/images/${dataOrder.transfer}`} alt="" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
