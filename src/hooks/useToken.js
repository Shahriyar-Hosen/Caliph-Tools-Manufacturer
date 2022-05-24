import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (user) {
      const email = user?.user?.email;
      const name = user?.user?.displayName;
      const img = user?.user?.photoURL;
      const currentUser = { name: name, email: email, img: img };

      if (email) {
        //   update / PUT Method update using id
        const url = `http://localhost:5000/users/${email}`;
        const addUsers = async () => {
          try {
            const res = await axios.put(url, currentUser);
            
            const accessToken = res.data.token;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
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
