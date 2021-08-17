import "./styles.css";
import React from "react";

const podcastDictionary = {
  philosophy: [
    {
      name: "PG Radio",
      author: "Prakhar Gupta",
      description:
        "PG Radio is your one stop intellectual cafe. Prakhar, the host, sincerely believes that there is much to be learned always and every where.",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "Cero",
      author: "Varun Mayya",
      description:
        "Pondering everything from simulation theory to quantum mechanics to medicine to spirituality to find a consistent narrative to our lives. This is scientific existential therapy by Varun. ",
      rating: "⭐⭐⭐⭐⭐"
    },
    {
      name: "The Partially Examined Life",
      author: "Mark Linsenmayer",
      description:
        "The Partially Examined Life is a podcast by some guys who were at one point set on doing philosophy for a living but then thought better of it. Each episode, we pick a short text and chat about it with some balance between insight and flippancy. ",
      rating: "⭐⭐⭐"
    }
  ],

  technology: [
    {
      name: "Full Stack Radio",
      author: "Adam Wathan",
      description:
        "A podcast for developers interested in building great software products.",
      rating: "⭐⭐⭐"
    },
    {
      name: "Thinking with Tanay",
      author: "Tanay Pratap",
      description:
        "Tanay Pratap is a mentor/teacher on social media channels. He gets questions which need pondering and detailed thought process. Many such questions are answered on this podcast.",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "JS Party",
      author: "Changelog Media",
      description:
        "Weekly celebration of JavaScript and the web. This show records LIVE on Thursdays at 1pm US/Eastern time.",
      rating: "⭐⭐⭐⭐"
    }
  ],

  business: [
    {
      name: "20 Minute VC",
      author: "Harry Stebbing",
      description:
        "The Twenty Minute VC takes you inside the world of Venture Capital, Startup Funding and The Pitch. Join our host, Harry Stebbings and discover how you can attain funding for your business.",
      rating: "⭐⭐⭐"
    },
    {
      name: "Marketing School",
      author: "Neil Patel & Eric Siu",
      description:
        "Daily ACTIONABLE digital marketing lessons that are learned through years of being in the trenches.",
      rating: "⭐⭐⭐⭐"
    },
    {
      name: "The $100 MBA Show",
      author: "Omar Zenhom",
      description:
        "Show is a new kind of podcast where you simply get better at business with our practical business lessons for the real world. ",
      rating: "⭐⭐⭐⭐"
    }
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
              <div className="podcast-description">{podcast.description}</div>
              <div className="podcast-rating">{podcast.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
