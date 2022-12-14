import "bootstrap/dist/css/bootstrap.min.css";
import "../css/GenreCards.css";

import GenreCard from "../models/GenreCard";

import baitUllah from "../assets/bait-ullah.png";
import goshaeDurood from "../assets/gosha-e-durood.png";
import rozaeimamHussain from "../assets/roza-e-imam-hussain.png";
import rozaErusool from "../assets/roza-e-rusool.png";

const GenreCards = () => {
  const cardInfo: GenreCard[] = [
    {
      title: "HAMD E TA'ALA",
      color: "linear-gradient(to bottom right, #2D2A2B, #1A1A1A)",
      image: baitUllah,
    },
    {
      title: "NAAT E RASOOL",
      color: "linear-gradient(to bottom right, #1F605E, #319678)",
      image: rozaErusool,
    },
    {
      title: "MANQBAT",
      color: "linear-gradient(to bottom right, #F7C638, #B87129)",
      image: rozaeimamHussain,
    },
    {
      title: "DUROOD O SALAM",
      color: "linear-gradient(to bottom right, #027278, #081B3E)",
      image: goshaeDurood,
    },
  ];

  const renderCards = (card: GenreCard, index: number) => {
    return (
      <div className="col-md-3" key={index}>
        <div
          className="card card-cover overflow-hidden text-dark rounded-4 shadow-lg m-auto border-0 col-10 col-sm-8 col-md-12 my-3"
          style={{ background: card.color, minHeight: "300px" }}
        >
          <img
            src={card.image}
            alt={`image for ${card.title}`}
            style={{ width: "75%", margin: "auto", marginTop: "20px" }}
          />
          <div className="p-3 text-white text-shadow-1">
            <h3
              style={{
                textAlign: "center",
                fontSize: "1.1rem",
                letterSpacing: "3px",
                fontWeight: "800",
              }}
            >
              {card.title}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container pt-4">
      <h2>Explore the Genres</h2>
      <p>You can search and explore the wide range of madh genres </p>
      <div className="row">{cardInfo.map(renderCards)}</div>
    </div>
  );
};

export default GenreCards;
