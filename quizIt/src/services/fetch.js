// Functions

// Fetching data

export const fetchData = async (
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
  try {
    const response = await fetch(
      `https://the-trivia-api.com/api/questions?categories=${selectedCategory}&limit=${selectedResults}&region=${selectedRegion}&difficulty=${selectedDifficulty}`
    );
    const questionData = await response.json();
    console.log(questionData);
    setData(questionData);
    shuffledAnswers.current = [];
    setDisplay(true); // Set the display state only after the data is loaded
  } catch (error) {
    console.error(error);
  }
};
