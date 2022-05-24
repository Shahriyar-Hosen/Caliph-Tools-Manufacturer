import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AdminRow from "./AdminRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("allUsers", () =>
    axios
      .get("https://glacial-falls-86656.herokuapp.com/users")
      .then((res) => res.data)
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-3 h-full mb-8 border-b-8 border-secondary border-double">
      <h1 className="text-5xl font-bold font-serif text-primary py-5 text-center">
        Make Admin
      </h1>
      <div className="overflow-x-auto mb-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Admin</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <AdminRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></AdminRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
