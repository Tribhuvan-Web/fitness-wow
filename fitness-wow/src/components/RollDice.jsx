import styled from "styled-components";

const RollDice = ({currentDice,handleRollDice}) => {
  
  return (
    <DiceContainer>
      <div className="dice" onClick={handleRollDice}>
        <img
          src={`/images/dice/dice-${currentDice}.png`}
          alt={`Dice ${currentDice}`}
        />
      </div>
      <p className="text-xl font-bold bg-violet-700 text-white mt-[10px] p-2 rounded-lg">Click the dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

// Styled Components
const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px; 
  bottom: 0;

  .dice {
    cursor: pointer;
    transition: transform 0.2s;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;
