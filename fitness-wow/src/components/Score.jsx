import React from "react";

const Score = ({score}) => {
  return (
    <div className="max-w-[150px] text-center bg-black text-white rounded-lg p-2 flex m-auto mt-4 mb-4"> 
      <p className="text-2xl font-medium p-1">Points &nbsp; {score}</p>
    </div>
  );
};

export default Score;

