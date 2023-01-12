import React from "react";
import { StarRating } from "./StarRating";

export const ReviewItem = () => {
  return (
    <div className="Review">
      <div className="Review__Header">
        <div className="Review__Icon">A</div>
        <span className="Review__Author">Tanmayi shinde</span>
        <div className="Review__br"></div>
        <StarRating rating={2.403} />
        <span className="Review__Timestamp">25/07/2022</span>
      </div>
      <div className="Review__Content">
        <div className="Review__Title">
          Re live sneakers that save the planet !!!
        </div>
        <div className="Review__Body">
          <p>
            Good job Snuglz's .... Impressed with my first pair of eco friendly
            shoes made from 8 recycled plastic bottles ...& it's made in India
            ... Proud to wear this comfortable stylish product ...look forward
            to more .
          </p>
        </div>
        <div className="Review__Pics">
          <img
            alt="User review pic"
            src="https://judgeme.imgix.net/neeman-s/1655118235__whatsappimage2022-06-13at43339pm__original.jpeg?auto=format&amp;w=160"
          />
        </div>
      </div>
    </div>
  );
};
