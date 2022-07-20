import React, { useState, useEffect } from "react";
import axios from "./axios";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
const TinderCards = () => {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get("/tinder/cards");
      setPersons(res.data);
    }

    fetchdata();
  }, []);
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };
  return (
    <div className="tinderCards__section">
      <div className="tinderCards__container">
        {persons.map((person) => {
          return (
            <TinderCard
              className="swipe"
              onSwipe={onSwipe}
              onCardLeftScreen={() => onCardLeftScreen("fooBar")}
              preventSwipe={["up", "down"]}>
              <div
                className="tinderCard"
                style={{ backgroundImage: `url(${person.image})` }}>
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};
export default TinderCards;
