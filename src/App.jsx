import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    axios
      .get("https://lanciweb.github.io/demo/api/actors/")
      .then((resp) => {
        console.log("Risposta API:", resp.data);
        setActors(resp.data);
      })
      .catch((err) => console.error("Errore nella chiamata:", err));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="mb-4 text-center">Attori</h1>
      <div className="row">
        {actors.map((actor, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={actor.image}
                className="card-img-top"
                alt={actor.name}
              />
              <div className="card-body">
                <h5 className="card-title">{actor.name}</h5>
                <p className="card-text">
                  <strong>Anno di nascita:</strong> {actor.birthYear}
                  <br />
                  <strong>Nazionalità:</strong> {actor.nationality}
                  <br />
                  <strong>Biografia:</strong> {actor.bio}
                  <br />
                  <strong>Riconoscimenti:</strong> {actor.awards}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
