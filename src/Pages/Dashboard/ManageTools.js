import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageToolsRow from "./ManageToolsRow";
import ToolsUpdate from "./ToolsUpdate";

const ManageTools = () => {
  const [update, setUpdate] = useState(null);
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("tools", () =>
    axios.get("http://localhost:5000/tools").then((res) => res.data)
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="mx-3 h-full mb-8 border-b-8 border-secondary border-double">
      <div class="overflow-x-auto mb-5">
        <table class="table w-full">
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
