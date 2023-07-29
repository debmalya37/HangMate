import TinderCard from "react-tinder-card";
import { useState } from "react";


const Dashboard = () => {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "./src/Images/HangMate-logo.jpeg",
    },
    {
      name: "Erlich Bachman",
      url: "./src/Images/HangMate-logo.jpeg",
    },
    {
      name: "Monica Hall",
      url: "./src/Images/HangMate-logo.jpeg",
    },
    {
      name: "Jared Dunn",
      url: "./src/Images/HangMate-logo.jpeg",
    },
    {
      name: "Dinesh Chugtai",
      url: "./src/Images/HangMate-logo.jpeg",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="dashboard">
      <div className="swiper-container">
        <div className="card-container">
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div style={{ backgroundImage: 'url(' + character.url + ')' }} className='card'>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
