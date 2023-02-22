// Functions

// Fetching data

export const fetchData = (
  setData,
  selectedCategory,
  selectedDifficulty,
  selectedResults,
  selectedRegion,
  setReveal,
  setDisplay,
  shuffledAnswers
) => {
  setReveal(false);
  const getData = async () => {
    const response = await fetch(
      `https://the-trivia-api.com/api/questions?categories=${selectedCategory}&limit=${selectedResults}&region=${selectedRegion}&difficulty=${selectedDifficulty}`
    );
    const questionData = await response.json();
    console.log(questionData);
    setData(questionData);
    shuffledAnswers.current = [];
  };
  getData();
  setTimeout(() => {
    setDisplay(true);
  }, 400);
};
