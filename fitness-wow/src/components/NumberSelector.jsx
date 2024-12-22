const NumberSelector = ({
  selectedNumber,
  setSelectedNumber,
  error,
  setScore,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6];

  const resetPoint = () => {
    setScore(0);
  };

  return (
    <div className="flex flex-col items-center">
      {error && <p>{error}</p>}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {numbers.map((number) => (
          <div
            key={number}
            isselected={selectedNumber === number ? "true" : "false"}
            onClick={() => setSelectedNumber(number)}
            className={`rounded-lg h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 font-bold border grid place-content-center cursor-pointer transition duration-300 ease-in-out 
              ${
                selectedNumber === number
                  ? "bg-red-600 border-red-800"
                  : "bg-black border-transparent hover:bg-gray-800"
              }
              text-white
            `}
          >
            {number}
          </div>
        ))}
      </div>
      <div>
        <button
          className="bg-green-700 text-white p-2 rounded-lg mt-3 hover:bg-black hover:text-white"
          onClick={() => resetPoint()}
        >
          Restart button
        </button>
      </div>
    </div>
  );
};

export default NumberSelector;
