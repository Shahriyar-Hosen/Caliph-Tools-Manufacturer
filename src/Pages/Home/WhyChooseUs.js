import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="my-20 ">
      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        Why Choose Us?
      </h1>
      <div
        class="hero bg-fixed"
        style={{ backgroundImage: "url(https://i.ibb.co/nLYZqKV/yellow-set-tools-black-background.jpg)" }}
      >
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content  text-neutral-content">
          <div class="max-w-md md:max-w-lg lg:max-w-6xl lg:px-12 my-10">
            <h1 class="mb-3 text-xl lg:mx-20 text-center text-base-100 ">
              We have dedicated ourselves to making industrial Hand tools with
              the goal to become the best manufacturers of Hand Tools in
              Bangladesh. Here’s some reasons why we’re unique.
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div class="text-white">
                <figure class="px-10 pt-10">
                  <img
                    src="https://i.ibb.co/qJGVNBx/idea.png"
                    alt="Shoes"
                    class="rounded-full mx-auto"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Expertise & Innovation</h2>
                  <p>
                    Since 1982 we’ve been supplying the highest quality tools to
                    a variety of specialist markets.
                  </p>
                </div>
              </div>
              <div class="text-white">
                <figure class="px-10 pt-10">
                  <img
                    src="https://i.ibb.co/1zdPLp2/quality.png"
                    alt="Shoes"
                    class="rounded-full mx-auto"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Quality</h2>
                  <p>
                  We have developed a culture of continuous improvement. We give guarantee against any manufacturing defect.
                  </p>
                </div>
              </div>
              <div class="text-white">
                <figure class="px-10 pt-10">
                  <img
                    src="https://i.ibb.co/k2TMmXv/support.png"
                    alt="Shoes"
                    class="rounded-full mx-auto"
                  />
                </figure>
                <div class="card-body items-center text-center">
                  <h2 class="card-title">Service & Support</h2>
                  <p>
                  We have invested heavily to ensure that our products, processes and customer service are second to none.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
