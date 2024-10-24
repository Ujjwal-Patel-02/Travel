import React, { useState } from "react";
// import { useHistory } from "react-router-dom"; // Import useHistory
import "../Styles/Recommendation.css";

import Destination1 from "../assets/Destination1.png";
import Destination2 from "../assets/Destination2.png";
import Destination3 from "../assets/Destination3.png";
import Destination4 from "../assets/Destination4.png";
import Destination5 from "../assets/Destination5.png";
import Destination6 from "../assets/Destination6.png";

function Recommendation() {
  // const history = useHistory(); // Initialize useHistory

  const data = [
    {
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officially the Republic of Singapore, is a",
      duration: "Approx 2 night trip",
      link: "/singapore", // Add a link for navigation
    },
    {
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      link: "/thailand",
    },
    {
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      link: "/paris",
    },
    {
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      link: "/new-zealand",
    },
    {
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      link: "/bora-bora",
    },
    {
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      link: "/london",
    },
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Places to Visit in Chitrakut</h1>
        <div className="CategoryBar"></div>
      </div>

      <div className="recommendationBox">
        {data.map((item, index) => {
          return (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
              <button
                onClick={"#"} // Use history to navigate
                style={{
                  backgroundColor: "rgba(243, 110, 9, 0.649)",
                  borderRadius: "12px",
                  padding: "10px 20px",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Know More
              </button>
              <div className="details"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
