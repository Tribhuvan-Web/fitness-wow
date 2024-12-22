import React, { useEffect, useRef, useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";
import Navbar from "./components/Navbar";

const App = () => {
  const [gameState, setGameState] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (gameState) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [gameState]);

  const toggleGame = () => {
    setGameState((prev) => !prev);
  };

  return (
    <div className="">
      <audio ref={audioRef} loop>
        <source src="./background.mp3" type="audio/mpeg" />
      </audio>
      <Navbar />
      {gameState ? <GamePlay /> : <StartGame toggle={toggleGame} />}
    </div>
  );
};

export default App;
