import React from "react";

const MyPortfolio = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-yellow-50">
      <div class="card card-side bg-base-100 shadow-xl my-10 grid grid-cols-1 lg:grid-cols-2  font-sans mx-5 text-lg text-black py-20">
        <figure>
          <img
            className="w-96"
            src="https://i.ibb.co/fdmL81H/Salman.png"
            alt="Movie"
          />
        </figure>
        <div class="mx-10 flex flex-col gap-2">
          <h2 class="text-3xl font-bold text-center lg:text-left text-secondary my-5">
            Name: Shahriyar Hosen
          </h2>
          <p>
            <span className="font-bold text-xl text-secondary">Email:</span>{" "}
            web.shahriyar.hosen@gmail.com
          </p>
          <p>
            <span className="font-bold fon  text-lg text-secondary">
              Phone:
            </span>{" "}
            <span className="font-sans">01737420513</span>
          </p>
          <p>
            <span className="font-bold text-lg text-secondary">Education:</span>{" "}
            HSC
          </p>
          <p>
            <span className="font-bold text-lg text-secondary">
              List of technologies:
            </span>{" "}
            HTML _ CSS _ Tailwind _ Bootstrap _ Javascript _ React _ Firebase _
            Node _ MongoDB _ Atlas _ Axios _ React Query _ daisyUI
          </p>
          <div class=" my-10">
            <h1 className="font-bold text-xl text-center mb-2  text-secondary">
              My Project
            </h1>
            <div className="flex justify-center items-center gap-5">
              <div className="flex flex-col gap-2">
                <p>1. BD Books Warehouse </p>
                <p className="">2. Hire Tutor </p>
                <p>3. Book Analysis Website </p>
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://bd-books-warehouse.web.app/"
                  className="btn btn-info bg-gradient-to-r from-success  to-accent border-0 text-white btn-sm "
                >
                  Demo-1
                </a>
                <a
                  href="https://hire-tutor-f0b91.web.app/"
                  className="btn btn-info bg-gradient-to-r from-success  to-accent border-0 text-white btn-sm "
                >
                  Demo-2
                </a>
                <a
                  href="https://book-analysis-website.netlify.app/"
                  className="btn btn-info bg-gradient-to-r from-success  to-accent border-0 text-white btn-sm "
                >
                  Demo-3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPortfolio;
