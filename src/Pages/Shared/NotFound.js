import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>
        <img src="https://i.ibb.co/kXwLcSK/notFound.jpg" alt="" />
      </div>
      <div className="flex justify-center mb-10">
        <Link
          to="/"
          className="btn bg-gradient-to-r from-success  to-accent border-0 text-white px-20"
        >
          Go To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
