import "./styles.css";
import React from "react";

const podcastDictionary = {
  philosophy: [
    { name: "PG Radio", author: "Prakhar Gupta" },
    { name: "Cero", author: "Varun Mayya" }
  ],

  technology: [
    { name: "Full Stack Radio", author: "Adam Wathan" },
    { name: "Thinking with Tanay", author: "Tanay Pratap" }
  ],

  business: [
    { name: "20 Minute VC", author: "Harry Stebbing" },
    { name: "Marketing School", author: "Neil Patel & Eric Siu" }
  ]
};

const podcastArray = Object.keys(podcastDictionary);

export default function App() {
  const [selectedCatagory, setCatagory] = React.useState("philosophy");

  function onClickHandler(catagory) {
    setCatagory(catagory);
  }

  return (
    <div className="App">
      <h1>🎧Great Podcasts</h1>

      <p>
        Here are my top podcast recommendations. Choose a catagory to get
        started!
      </p>

      <div>
        {podcastArray.map((catagory) => (
          <button onClick={() => onClickHandler(catagory)} key={catagory}>
            {catagory}
          </button>
        ))}
      </div>
      <hr />
      <div>
        <ul style={{ paddingInlineStart: "0%" }}>
          {podcastDictionary[selectedCatagory].map((podcast) => (
            <li className="podcast-list-item" key={podcast.name}>
              <div className="podcast-name">{podcast.name}</div>
              <div className="podcast-author">{podcast.author}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
