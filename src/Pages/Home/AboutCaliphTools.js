import React from "react";

const AboutCaliphTools = () => {
  return (
    <section className="my-20 ">
      <h1 className="text-primary text-4xl font-bold text-center mb-5">
        About Caliph Tools®
      </h1>
      <div
        class="hero bg-fixed"
        style={{ backgroundImage: "url(https://i.ibb.co/0D3QK8s/37668.jpg)" }}
      >
        <div class="hero-overlay bg-opacity-50"></div>
        <div class="hero-content  text-neutral-content">
          <div class="max-w-md  my-10">
            <h2 className="font-bold mb-5 text-center bg-gradient-to-r from-accent  to-success rounded-lg py-1 uppercase text-white">
              Caliph Tools Manufacturer, LTD.
            </h2>
            <h1 class="mb-1 text-3xl font-bold text-secondary">
              A professional manufacturer and supplier of Hand Tools & Hardware
              Products in Bangladesh.
            </h1>
            <p class="mb-5 text-xl text-secondary">
              we have expanded our market year by year to where we now have
              customers in many countries around the world. Being honest and
              farsighted, Caliph Tools® is committed to achieving the highest
              standards of service and meeting the needs of international
              businesses through acceptable pricing, controllable quality, and
              reliable delivery.
            </p>
            <button class="btn bg-gradient-to-r from-accent  to-success border-0 text-white block mx-auto">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCaliphTools;
