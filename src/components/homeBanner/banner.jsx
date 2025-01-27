"use client";
import { useState, useEffect } from "react";

function Banner() {
  const [miscInfo, setMiscInfo] = useState([]);
  const [bannerImagePath, setBannerImagePath] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/misc_info');
      const data = await response.json();
      setMiscInfo(data);
    };

    fetchData();

    const fetchBannerImage = async () => {
      try {
        const response = await fetch("/api/latest_image");
        const data = await response.json();
        if (data.fileName) {
          setBannerImagePath(`/uploads/${data.fileName}`);
        } else {
          console.error("No file found in uploads directory");
        }
      } catch (error) {
        console.error("Failed to fetch banner image:", error);
      }
    };

    fetchBannerImage();
  }, []);

  return (
    <section id="banner">
      <div className="inner">
        <img
          className="banner author-photo"
          src={bannerImagePath || "https://via.placeholder.com/600x300"}
          alt="Banner"
        />
        <div className="banner text-area">
          {miscInfo.length > 1 && miscInfo[0] ? (
            <h2>{miscInfo[0].value}</h2>
          ) : (
            <h2>Loading...</h2>
          )}
          {miscInfo.length > 1 && miscInfo[1] ? (
            <p>{miscInfo[1].value}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Banner;
