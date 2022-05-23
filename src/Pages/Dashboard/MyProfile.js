import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.inite";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading></Loading>;
  }
  console.log(user);
  const { email, displayName, photoURL } = user;
  const ProfileSubmit = (event) => {};
  return (
    <div>
      <div class="text-4xl font-bold pb-10 bg-yellow-50 text-center text-info py-5">
        <h1 className="mb-8 text-4xl">My Profile</h1>
        <div class="avatar online">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={photoURL ? photoURL : "https://i.ibb.co/JtCw84w/user.png"}
              alt=""
            />
          </div>
        </div>
        <p className="text-2xl text-secondary">{displayName}</p>
      </div>
      <div class="hero pb-10 bg-yellow-50">
        <div class="card flex-shrink-0 w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl shadow-2xl bg-base-100">
          <form onSubmit={ProfileSubmit} class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Give </span>
              </label>
              <input type="text" placeholder="Type here" class="input w-full" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Give</span>
              </label>
              <input type="text" placeholder="Type here" class="input w-full" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Give </span>
              </label>
              <input type="text" placeholder="Type here" class="input w-full" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Give </span>
              </label>
              <input type="text" placeholder="Type here" class="input w-full" />
            </div>

            <div class="form-control">
              <label class="label">
                <span class="label-text">Give </span>
              </label>
              <input type="text" placeholder="Type here" class="input w-full" />
            </div>

            <div class="form-control ">
              <button class="btn bg-gradient-to-r from-accent  to-success border-0 text-white text-lg">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
