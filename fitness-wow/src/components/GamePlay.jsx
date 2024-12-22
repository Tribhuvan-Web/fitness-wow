import React, { useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const handleRollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number before rolling the dice");
      return;
    }

    setError("");

    const newDiceNumber = generateRandomNumber();
    setCurrentDice(newDiceNumber);

    if (selectedNumber === newDiceNumber) {
      setScore(score + newDiceNumber);
    } else {
      setScore(score - newDiceNumber);
    }

    setSelectedNumber(undefined);
  };

  return (
    <>
      <MainContainer>
        <div className="top_section flex justify-between px-4">
          <div className="m-auto">
            <RollDice
              currentDice={currentDice}
              handleRollDice={handleRollDice}
            />
          </div>
        </div>
      </MainContainer>
      <Score score={score} />
      <div className="flex justify-center items-center">
        <NumberSelector
          setScore={setScore}
          error={error}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
    </>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 5%;

  .top_section {
    display: flex;
    justify-content: space-between;
  }
`;
