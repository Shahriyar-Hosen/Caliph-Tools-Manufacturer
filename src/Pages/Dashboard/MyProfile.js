import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const { email, displayName, photoURL, phoneNumber } = user;

  const { data, isLoading, refetch } = useQuery("users", () =>
    axios.get(`http://localhost:5000/user/${email}`).then((res) => res.data)
  );

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  console.log(data);
  const { name, img, phone, address, education } = data;

  const ProfileSubmit = (event) => {};
  return (
    <div>
      <div class="text-4xl font-bold pb-10 bg-yellow-50 text-center text-info py-5">
        <h1 className="mb-8 text-4xl">My Profile</h1>
        <div class="avatar online">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
      <div class="hero pb-10 bg-yellow-50">
        <div class="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={ProfileSubmit} class="card-body">
            {name || displayName ? (
              ""
            ) : (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Add Full Name"
                  class="input w-full"
                />
              </div>
            )}

            {!email ? (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Add Your Email"
                  class="input w-full"
                />
              </div>
            ) : (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="email"
                  class="input w-full"
                  disabled
                  defaultValue={email}
                />
              </div>
            )}

            {!phone || !phoneNumber ? (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="Add Your Phone"
                  class="input w-full"
                />
              </div>
            ) : (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="number"
                  class="input w-full"
                  defaultValue={phone || phoneNumber}
                />
              </div>
            )}

            {!address ? (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Add Your Address"
                  class="input w-full"
                />
              </div>
            ) : (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <input
                  type="text"
                  class="input w-full"
                  defaultValue={address}
                />
              </div>
            )}

            {!education ? (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Education</span>
                </label>
                <input
                  type="text"
                  name="education"
                  placeholder="Add Your Education"
                  class="input w-full"
                />
              </div>
            ) : (
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Education</span>
                </label>
                <input
                  type="text"
                  class="input w-full"
                  defaultValue={education}
                />
              </div>
            )}

            <div class="form-control ">
              <button
                type="submit"
                class="btn bg-gradient-to-r from-accent  to-success border-0 text-white text-lg"
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
