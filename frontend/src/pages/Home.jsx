import { createElement } from "react";
import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LastestDestinationCard";

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(2) || [];

  return createElement(
    "div",
    { className: "space-y-3" },
    createElement(
      "h2",
      { className: "text-3xl font-bold" },
      "Latest Destinations"
    ),
    createElement(
      "p",
      null,
      "Most recent destinations added by our hosts"
    ),
    createElement(
      "div",
      { className: "grid gap-4" },
      createElement(
        "div",
        { className: "grid md:grid-cols-2 grid-cols-1 gap-4" },
        topRowHotels.map((hotel) =>
          createElement(LatestDestinationCard, { hotel: hotel, key: hotel.id })
        )
      ),
      createElement(
        "div",
        { className: "grid md:grid-cols-3 gap-4" },
        bottomRowHotels.map((hotel) =>
          createElement(LatestDestinationCard, { hotel: hotel, key: hotel.id })
        )
      )
    )
  );
};

export default Home;
