import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import useAdmin from "../../hooks/useAdmin";
import ToolsCard from "./ToolsCard";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  useEffect(() => {
    const toolsDataLoad = async () => {
      try {
        const res = await axios.get(
          "https://glacial-falls-86656.herokuapp.com/tools",
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        setTools(res.data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        console.log(error.massage);
      }
    };
    toolsDataLoad();
  }, [navigate]);

  return (
    <div className="my-20">
      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Tools
      </h1>

      {tools.length === 0 && adminLoading ? (
        <progress className="progress block w-1/2  mx-auto"></progress>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5">
          {tools.slice(0, 6).map((tool) => (
            <ToolsCard key={tool._id} tools={tool} admin={admin}></ToolsCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tools;
