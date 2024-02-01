import React, { useEffect, useState } from "react";
import { ShowCard } from "../components/ShowCard";

export function ShowsList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const json = await response.json();
      setShows(json);
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      {shows.map((item, index) => {
        return <ShowCard key={index} item={item} />;
      })}
    </div>
  );
}
