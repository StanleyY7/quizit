// Functions

// Fetching data

export const fetchData = (
  setData,
  selectedCategory,
  selectedDifficulty,
  selectedResults,
  selectedRegion
) => {
  const getData = async () => {
    const response = await fetch(
      `https://the-trivia-api.com/api/questions?categories=${selectedCategory}&limit=${selectedResults}&region=${selectedRegion}&difficulty=${selectedDifficulty}`
    );
    const questionData = await response.json();
    console.log(questionData);
    setData(questionData);
  };
  getData();
};
