import React from "react";
import styled from "styled-components";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <ContentWrapper className="flex flex-col md:flex-row items-center justify-center h-full">
        {/* Dice Image */}
        <div className="mb-8 md:mb-0 md:mr-8 flex-shrink-0">
          <img
            src="/images/dice.png"
            alt="Dice"
            className="w-40 h-40 md:w-60 md:h-60"
          />
        </div>

        {/* Text and Button */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white bg-green-700 bg-opacity-75 p-4 rounded-lg font-bold">
            Roll the Dice
          </h1>
          <button
            className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold cursor-pointer rounded-lg px-6 py-3 min-w-[180px] bg-red-600 hover:bg-red-700 text-white transition duration-300 ease-in-out"
            onClick={toggle}
          >
            Play Now
          </button>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default StartGame;

// Styled Components
const Container = styled.div`
  width: 100%;
  background-image: url("/images/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;

  /* Semi-transparent dark overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.4); /* Adjust opacity as needed */
    z-index: 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;
