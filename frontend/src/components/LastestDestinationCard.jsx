import { Link } from "react-router-dom";
import { createElement } from "react";

const LatestDestinationCard = ({ hotel }) => {
  return (
    createElement(
      Link,
      {
        to: `/detail/${hotel._id}`,
        className: "relative cursor-pointer overflow-hidden rounded-md"
      },
      createElement(
        "div",
        { className: "h-[300px]" },
        createElement(
          "img",
          {
            src: hotel.imageUrls[0],
            className: "w-full h-full object-cover object-center"
          }
        )
      ),
      createElement(
        "div",
        {
          className: "absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md"
        },
        createElement(
          "span",
          { className: "text-white font-bold tracking-tight text-3xl" },
          hotel.name
        )
      )
    )
  );
};

export default LatestDestinationCard;
