
import React, { useState, useEffect } from "react";
import NavBar from "./Navbar";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

export default function NASAPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();
    async function fetchPhoto() {
      const res = await fetch(
        'https://api.nasa.gov/planetary/apod?hd=true&api_key='+apiKey
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
      <>
      <NavBar />
        <div className="nasa-photo">
        {
            photoData.media_type === 'image' ? (        
                <img
                    src={photoData.url}
                    alt={photoData.title}
                    className="photo"
                />
            ):(
                <iframe
                    title = "space-video"
                    src={photoData.url}
                    frameBorder="0"
                    gesture="media"
                    allow="encrypted-media"
                    allowFullScreen
                    className="photo"
                />
            )
        }
      <div>
        <h1>{photoData.title}</h1>
        <p className="date">{photoData.date}</p>
        <p className="explanation">{photoData.explanation}</p>
      </div>
    </div>
    </>
  );
}