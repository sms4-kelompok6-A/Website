import moment from "moment";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components";
import { apiUrl } from "../../utils/url";

const Account = () => {
  const [users, setUsers] = useState([]);
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
    await fetch(`${apiUrl()}/users`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data["data"]["data"]);
      });
  };

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-teal-800">List Users</h3>
      </div>
      <table className="min-w-full text-start mt-8">
        <thead className="border-b bg-teal-500">
          <tr>
            <th className="font-normal text-white text-start px-6 py-4">#</th>
            <th className="font-normal text-white text-start px-6 py-4">
              Nama
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Email
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              Tanggal Dibuat
            </th>
            <th className="font-normal text-white text-start px-6 py-4">
              No Telp
            </th>
          </tr>
        </thead>
        <tbody>
          {isLoading
            ? []
            : users.length > 0 &&
              users.map((item, i) => (
                <tr className="bg-white border-b" key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-teal-800">
                    {i + 1}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {item.email}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {moment(item.created_at).format("yyyy-MM-DD")}
                  </td>
                  <td className="text-sm text-teal-800 font-light px-6 py-4 whitespace-nowrap">
                    {item.phone_number ? item.phone_number : "-"}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Account;
