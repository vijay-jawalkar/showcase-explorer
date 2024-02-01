import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Form } from "../components/Form";

export function Summary() {
  const [show, setShow] = useState([]);
  const { id } = useParams();
  const [isForm, setIsForm] = useState(false);
  const [image, setImage] = useState(
    "https://img.freepik.com/free-photo/3d-cinema-popcorn-cup-with-seating_23-2151024870.jpg?size=626&ext=jpg&ga=GA1.1.641859594.1706257034&semt=sph"
  );

  useEffect(() => {
    if (show && show.image && show.image.medium) {
      setImage(show.image.medium);
    } else {
      console.log("Error : This image is not available");
    }
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const json = await response.json();
      setShow(json);
    }
    getData();
  }, []);

  return (
    <div>
      <div className={`show-container ${isForm && "low-opacity"}`}>
        <img src={image} alt="showImage" />
        <h1>{show.name}</h1>
        <p className="info">
          <span> {show.language} </span>

          <p>
            {show.genres &&
              show.genres.map((item, index) => {
                return <span key={index}> {item} </span>;
              })}
          </p>
        </p>

        <p className="card-summary"> {show.summary} </p>
        <button onClick={() => setIsForm(true)}>Book a movie ticket</button>
      </div>

      {isForm && <Form setIsForm={setIsForm} show={show} />}
    </div>
  );
}
