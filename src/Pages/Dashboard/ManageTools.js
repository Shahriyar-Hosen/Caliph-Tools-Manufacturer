import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";
import ManageToolsRow from "./ManageToolsRow";
import ToolsUpdate from "./ToolsUpdate";

const ManageTools = () => {
  const [update, setUpdate] = useState(null);
  const navigate = useNavigate();
  
  const {
    data: tools,
    isLoading,error,
    refetch,
  } = useQuery("tools", () =>
    axios.get("https://glacial-falls-86656.herokuapp.com/tools",{
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/login");
      }
      return res.data;
    })
  );

  
  if (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      signOut(auth);
      localStorage.removeItem("accessToken");
      navigate("/login");
    }
    console.log(error.message);
  }
  
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-3 h-full mb-8 border-b-8 border-secondary border-double">
      <h1 className="text-5xl font-bold font-serif text-primary py-5 text-center">
        Manage All Tools
      </h1>
      <div className="overflow-x-auto mb-5">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>quantity</th>
              <th>price</th>
              <th>status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {tools?.map((tool, index) => (
              <ManageToolsRow
                key={tool._id}
                tool={tool}
                index={index}
                refetch={refetch}
                setUpdate={setUpdate}
              ></ManageToolsRow>
            ))}
          </tbody>
        </table>
      </div>
      {update && (
        <ToolsUpdate
          update={update}
          refetch={refetch}
          setUpdate={setUpdate}
        ></ToolsUpdate>
      )}
    </div>
  );
};

export default ManageTools;
