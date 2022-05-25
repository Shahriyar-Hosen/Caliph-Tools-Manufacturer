import axios from "axios";
import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { email, displayName, photoURL } = user;
  const navigate = useNavigate();

  const { data, isLoading, refetch } = useQuery("users", () =>
    axios
      .get(`http://localhost:5000/user/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        return res.data;
      })
  );

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  // console.log(data);
  const { _id, name, img, phone, address, education } = data;

  const ProfileSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const number = Number(event.target.number.value);
    const address = event.target.address.value;
    const education = event.target.education.value;
    const photo = event.target.photo.value;

    const updateProfile = {
      name: name,
      phone: number,
      address: address,
      education: education,
      img: photo,
    };
    axios
      .put(`http://localhost:5000/user/${_id}`, updateProfile, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log("Your Profile Update successfully");
          refetch();
        }
      })
      .catch((error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/login");
        }
        console.log(error.massage);
      });
  };
  return (
    <div>
      <div className="text-4xl font-bold pb-10 bg-yellow-50 text-center text-info py-5">
        <h1 className="mb-8 text-4xl">My Profile</h1>
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={
                img || photoURL
                  ? img || photoURL
                  : "https://i.ibb.co/JtCw84w/user.png"
              }
              alt=""
            />
          </div>
        </div>
        <p className="text-2xl text-secondary">
          {name || displayName ? name || displayName : "User Name"}
        </p>
      </div>
      <div className="hero pb-10 bg-yellow-50">
        <div className="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={ProfileSubmit} className="card-body">
            {name || displayName ? (
              ""
            ) : (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Add Full Name"
                  className="input w-full"
                />
              </div>
            )}

            {!email ? (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Add Your Email"
                  className="input w-full"
                />
              </div>
            ) : (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input w-full"
                  disabled
                  defaultValue={email}
                />
              </div>
            )}

            {!phone ? (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Add Your Phone"
                  className="input w-full"
                />
              </div>
            ) : (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="number"
                  className="input w-full"
                  defaultValue={phone}
                />
              </div>
            )}

            {!address ? (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Add Your Address"
                  className="input w-full"
                />
              </div>
            ) : (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  className="input w-full"
                  defaultValue={address}
                />
              </div>
            )}

            {!education ? (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Add Your Education"
                  className="input w-full"
                />
              </div>
            ) : (
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  className="input w-full"
                  defaultValue={education}
                />
              </div>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  <div className="indicator">
                    <span className="indicator-item badge badge-info bg-opacity-20 border-0 text-secondary">
                      link
                    </span>
                    <span>Profile Picture </span>
                  </div>
                </span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Update Your Picture"
                className="input w-full"
              />
            </div>

            <div className="form-control ">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-accent  to-success border-0 text-white text-lg"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
