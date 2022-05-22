import React from "react";

const Carousel = () => {
  /* 
    










    */
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img
            src="https://i.ibb.co/vkmMYDZ/male-carpenter-sawing-wooden-boards.jpg"
            class="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <div class="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div class="card-body">
                <h2 class="card-title text-left font-bold  text-primary">
                  CUTTING TOOLS{" "}
                </h2>
                <p class=" text-left text-xl text-black">
                  When Quality matters to your customers, choosing the right
                  tools is important
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/cLqKrS2/part-male-construction-worker.jpg.jpg"
            class="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <div class="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div class="card-body">
                <h2 class="card-title text-left font-bold  text-primary">
                  HAND TOOLS{" "}
                </h2>
                <p class=" text-left text-xl text-black">
                  Bangladash's top rated high quality hand tool manufacturer &
                  exporter
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/2MtZKTJ/screwing-self-tapping-screw-into-metal-fastening-hole-wood-strip-using-screwdriver-work-carpenter.jpg.jpg"
            class="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <div class="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div class="card-body">
                <h2 class="card-title text-left font-bold  text-primary">
                  INDUSTRIAL TOOLS{" "}
                </h2>
                <p class=" text-left text-xl text-black">
                  Serving the market from last 40 years.
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/jVhpFf2/carpenter-holds-drill-drills-window.jpg"
            class="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <div class="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-30 shadow-xl">
              <div class="card-body">
                <h2 class="card-title text-left font-bold  text-primary">
                  OZAR TOKU TOOLS{" "}
                </h2>
                <p class=" text-left text-xl text-black font-sans">
                  For Pneumatic tools, TOKU and Alok Tools have an exclusive
                  joint venture for catering the Bangladeshi market.
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item relative float-left w-full">
          <img
            src="https://i.ibb.co/9yBvwcc/handshake-businessmen.jpg"
            class="block w-full"
            style={{ maxHeight: "700px" }}
            alt="..."
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <div class="card max-w-4xl block mx-auto glass lg:card-side bg-base-200 bg-opacity-0 shadow-xl">
              <div class="card-body">
                <h2 class="card-title text-left font-bold  text-white">
                  DISTRIBUTION PARTNER PROGRAM{" "}
                </h2>
                <p class=" text-left text-xl text-white">
                  Explore Promising Business Opportunities
                </p>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary">Purchase</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          class="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          class="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
