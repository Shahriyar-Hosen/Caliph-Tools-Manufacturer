import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (user) {
      console.log("Inside use Token:", user);
      const email = user?.user?.email;
      const name = user?.user?.displayName;
      const img = user?.user?.photoURL;
      const currentUser = { name: name, email: email, img: img, role: "" };
      
      if (email) {
        //   update / PUT Method update using id
        const url = `http://localhost:5000/user/${email}`;
        const addUsers = async () => {
          try {
            const res = await axios.put(url, currentUser);
            //   setTool(res.data);
            console.log(res);
          } catch (error) {
            console.error(error);
          }
        };
        addUsers();
        // ------------------------------------
      }
    }
  }, [user]);

  return [token];
};

export default useToken;
