import { Link } from "react-router-dom";

const LatestDestinationCard = ({ hotel }) => {
  return (
    React.createElement(
      Link,
      {
        to: `/detail/${hotel._id}`,
        className: "relative cursor-pointer overflow-hidden rounded-md"
      },
      React.createElement(
        "div",
        { className: "h-[300px]" },
        React.createElement(
          "img",
          {
            src: hotel.imageUrls[0],
            className: "w-full h-full object-cover object-center"
          }
        )
      ),
      React.createElement(
        "div",
        {
          className: "absolute bottom-0 p-4 bg-black bg-opacity-50 w-full rounded-b-md"
        },
        React.createElement(
          "span",
          { className: "text-white font-bold tracking-tight text-3xl" },
          hotel.name
        )
      )
    )
  );
};

export default LatestDestinationCard;
