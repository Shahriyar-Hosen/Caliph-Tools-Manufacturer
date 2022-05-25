import React from "react";

const Carousel = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 md:flex justify-center p-0 mb-4 hidden">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <img
            src="https://i.ibb.co/vkmMYDZ/male-carpenter-sawing-wooden-boards.jpg"
            className="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-left font-bold  text-secondary">
                  CUTTING TOOLS{" "}
                </h2>
                <p className=" text-left text-xl text-black">
                  When Quality matters to your customers, choosing the right
                  tools is important
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-r from-accent  to-success border-0 text-white">Purchase Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/cLqKrS2/part-male-construction-worker.jpg.jpg"
            className="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-left font-bold  text-secondary">
                  HAND TOOLS{" "}
                </h2>
                <p className=" text-left text-xl text-black">
                  Bangladash's top rated high quality hand tool manufacturer &
                  exporter
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-r from-accent  to-success border-0 text-white">Purchase Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/nP3yj9y/foreman-yellow-hardhat-holding-hammer-shoulder-toolbox-hand-dreamily-looking-camera-workshop.jpg"
            className="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-left font-bold  text-secondary">
                  INDUSTRIAL TOOLS{" "}
                </h2>
                <p className=" text-left text-xl text-black">
                  Serving the market from last 40 years.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-r from-accent  to-success border-0 text-white">Purchase Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/jVhpFf2/carpenter-holds-drill-drills-window.jpg"
            className="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-30 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-left font-bold  text-secondary uppercase">
                Caliph Tools{" "}
                </h2>
                <p className=" text-left text-xl text-black font-sans">
                  For Pneumatic tools, Caliph Tools have an exclusive
                  joint venture for catering the Bangladeshi market.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-r from-accent  to-success border-0 text-white">Purchase Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/9yBvwcc/handshake-businessmen.jpg"
            className="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div className="carousel-caption hidden md:block absolute text-center">
            <div className="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-left font-bold  text-white">
                  DISTRIBUTION PARTNER PROGRAM{" "}
                </h2>
                <p className=" text-left text-xl text-white">
                  Explore Promising Business Opportunities
                </p>
                <div className="card-actions justify-end">
                  <button className="btn bg-gradient-to-r from-accent  to-success border-0 text-white">Purchase Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
