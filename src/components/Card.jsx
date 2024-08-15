import React from "react";
import { Card as flowbiteCard } from "flowbite-react";
import { Rating } from "flowbite-react";
import { Badge } from "flowbite-react";

const Card = () => {
  return (
    <flowbiteCard className="min-w-[19rem] max-w-[19rem] min-h-[32rem] max-h-[32rem] flex-1 rounded shadow p-2">
      <img className="rounded object-cover"
        src="https://fastly.picsum.photos/id/276/300/300.jpg?hmac=9ojBAYusSkbkLhQc8rr9BMIwXHSNSkBfQM2g1V9KaVk"
        alt=""
      />
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <div className="w-full flex justify-start items-center">
          <Rating>
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star />
            <Rating.Star filled={false} />
            <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
              4.95 out of 5
            </p>
          </Rating>
        </div>

        <div className="w-full flex justify-start items-center gap-1">
          <div className="w-fit h-auto bg-gray-200 rounded-full text-center px-2">
            Hello world
          </div>
        </div>
        <div className="w-full flex justify-end items-center gap-2 me-4">
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            $320
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-400 dark:text-white">
            <del>$320</del>
          </div>
        </div>

        <div className="w-full flex justify-between items-center gap-2">
          <div className="w-fit h-auto bg-orange-400 flex justify-center items-center py-2 px-3 rounded-full text-white gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
            <span className="text-nowrap">View Details</span>
          </div>
          <div className="w-fit h-auto bg-orange-400 flex justify-center items-center py-2 px-3 rounded-full text-white gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
            <span className="text-nowrap">Add to Cart</span>
          </div>
        </div>
      </div>
    </flowbiteCard>
  );
};

export default Card;
