import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../firebase.inite";
import { toast } from 'react-toastify';

const useToken = (user) => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const email = user?.user?.email;
      const name = user?.user?.displayName;
      const img = user?.user?.photoURL;
      const currentUser = { name: name, email: email, img: img };

      if (email) {
        //   update / PUT Method update using id
        const url = `https://glacial-falls-86656.herokuapp.com/users/${email}`;
        const addUsers = async () => {
          try {
            const res = await axios.put(url, currentUser, {
              headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            });
            const accessToken = res.data.token;
            localStorage.setItem("accessToken", accessToken);
            setToken(accessToken);
          } catch (error) {
            if (
              error.response.status === 401 ||
              error.response.status === 403
            ) {
              signOut(auth);
              localStorage.removeItem("accessToken");
              navigate("/login");
            }
            toast(error.massage);
          }
        };
        addUsers();
        // ------------------------------------
      }
    }
  }, [user, navigate]);

  return [token];
};

export default useToken;
