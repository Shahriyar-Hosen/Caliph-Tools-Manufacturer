import React from "react";

const BusinessSummary = () => {
  return (
    <div className="my-20 text-xl">
      <h1 className="text-primary text-4xl font-bold text-center mb-1 ">
        Honesty is The Key To Business
      </h1>
      <p className="text-secondary text-lg font-bold text-center mb-1">
        Try to understand why users like us
      </p>
      <div className="border-b-2 w-40 border-primary border-dotted block mx-auto mb-5"></div>

      <div className="w-full flex justify-center">
        <div className="stats stats-vertical lg:stats-horizontal shadow  lg:flex justify-center items-center lg:my-10">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <img
                className="w-12"
                src="https://i.ibb.co/1nZJmcn/tools-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="stat-title">Tools</div>
            <div className="stat-value text-secondary">75+ </div>
            <div className="stat-desc"> 80+ Tools Available</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-[#570DF8]">
              <img
                className=" w-14"
                src="https://i.ibb.co/xDkTzg8/clients-icon-png-4.png"
                alt=""
              />
            </div>
            <div className="stat-title">Customers Globally</div>
            <div className="stat-value text-[#570DF8]">458+</div>
            <div className="stat-desc">19% more than last month</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-info">
              <img
                className="w-14"
                src="https://i.ibb.co/gD5wgdN/increase-revenue-increase-revenue-ico-115629183355vf0f2tp5t-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="stat-title">Annual revenue</div>
            <div className="stat-value text-warning">3.7M+</div>
            <div className="stat-desc">3.7M+ Last Year's Annual Revenue </div>
          </div>

          <div className="stat">
            <div className="stat-figure text-secondary">
              <img
                className="w-14"
                src="https://i.ibb.co/GWFpWkb/20-512-11030.png"
                alt=""
              />
            </div>
            <div className="stat-title">Clients Feedbacks</div>
            <div className="stat-value text-info">100%</div>
            <div className="stat-desc text-secondary">
              Feedback on 99% of orders
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
