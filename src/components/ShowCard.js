import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function ShowCard({ item }) {
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/3d-cinema-popcorn-cup-with-seating_23-2151024870.jpg?size=626&ext=jpg&ga=GA1.1.641859594.1706257034&semt=sph"
  );

  useEffect(() => {
    if (item.show && item.show.image && item.show.image.medium) {
      setImage(item.show.image.original);
    } else {
      console.log("Error : This image is not available");
    }
  }, []);

  return (
    <div className="card">
      <div className="top">
        <img src={image} alt="card" className="image" />
      </div>

      <div className="bottom">
        <h2 className="title">{item.show.name}</h2>
        <p className="detail">
          <span> {item.show.language} / </span>
          <span> {item.show.runtime} / </span>
          <span>
            {" "}
            {item.show.genres.map((value, index) => {
              return <span> {value} </span>;
            })}{" "}
          </span>
        </p>
        <div className="summary">
          <h4>SUMMARY</h4>
          <h5>{item.show.summary}</h5>
        </div>
        <Link to={`/${item.show.id}`} className="btn">
          <span>Read More</span>
        </Link>
      </div>
    </div>
  );
}
