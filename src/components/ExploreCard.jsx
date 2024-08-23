import React from "react";

const ExploreCard = ({ ImgSrc, heading, paragraph, price, rate }) => {
  return (
    <div className="card shadow-lg shadow-gray-600 hover:shadow-gray-800">
      <figure className="p-0">
        <img
          src={`Explore/${ImgSrc}.svg`}
          alt="explore"
          width="343.06"
          height="343.06"
          
        />
      </figure>
      <article className="card-body bg-slate-50 rounded-b-3xl">
        <h2 className="card-title max-w-64 text-black">
          {heading}
          <div className="text-pink-500">{price}</div>
        </h2>
        <p className="italic text-slate-500">{paragraph}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline text-blue-800">{rate}</div>
        </div>
      </article>
    </div>
  );
};

export default ExploreCard;
