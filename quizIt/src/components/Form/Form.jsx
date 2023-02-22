import { useState, useContext, useRef } from "react";
import { fetchData } from "../../services/fetch";
import ProductContext from "../productContext/ProductContext";
import styles from "../../containers/main/main.module.scss";

const Form = () => {
  const [selectedCategory, setSelectedCategory] = useState("general_knowledge");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [selectedResults, setSelectedResults] = useState(1);
  const [selectedRegion, setSelectedRegion] = useState("AU");
  const [display, setDisplay] = useState(false);
  const [reveal, setReveal] = useState(false);
  const { data, setData } = useContext(ProductContext);
  let shuffledAnswers = useRef([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(
      setData,
      selectedCategory,
      selectedDifficulty,
      selectedResults,
      selectedRegion,
      setReveal,
      setDisplay,
      shuffledAnswers
    );
  };

  const handleCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleDifficulty = (e) => {
    setSelectedDifficulty(e.target.value);
  };
  const handleResults = (e) => {
    setSelectedResults(e.target.value);
  };
  const handleRegion = (e) => {
    setSelectedRegion(e.target.value);
  };
  const handleReveal = () => {
    setReveal(true);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <select onChange={handleCategory}>
            <option value={"general_knowledge"}>General Knowledge</option>
            <option value={"film_and_tv"}>Film & TV</option>
            <option value={"music"}>Music</option>
            <option value={"geography"}>Geography</option>
            <option value={"history"}>History</option>
            <option value={"science"}>Science</option>
          </select>
          <select onChange={handleDifficulty}>
            <option value={"easy"}>Easy</option>
            <option value={"medium"}>Medium</option>
            <option value={"hard"}>Hard</option>
          </select>
          <select onChange={handleResults}>
            <option value={1}>1 Result</option>
            <option value={5}>5 Results</option>
            <option value={10}>10 Results</option>
            <option value={20}>20 Results</option>
          </select>
          <select onChange={handleRegion}>
            <option value={"AU"}>Australia</option>
            <option value={"US"}>America</option>
            <option value={"FR"}>France</option>
            <option value={"GB"}>United Kingdom</option>
          </select>
          <button>🎲</button>
          {data &&
            data.map((item) => {
              const labels = ["A", "B", "C", "D"];
              const pElements = [
                { text: item.correctAnswer, isCorrect: true },
                { text: item.incorrectAnswers[0], isCorrect: false },
                { text: item.incorrectAnswers[1], isCorrect: false },
                { text: item.incorrectAnswers[2], isCorrect: false },
              ];
              if (!shuffledAnswers.current.length) {
                // Shuffle the answers only once
                shuffledAnswers.current = pElements.sort(
                  () => Math.random() - 0.5
                );
              }
              const answerElements = shuffledAnswers.current.map(
                (element, index) => (
                  <p
                    className={`${styles.horizontal} ${
                      reveal && element.isCorrect ? styles.correct : ""
                    }`}
                    key={index}
                  >
                    <strong>{labels[index]}: </strong> {element.text}
                  </p>
                )
              );
              return (
                <div key={item.id} className={styles.quiz__grid}>
                  <div>
                    <h3>Question</h3>
                    <p className={styles.question}>{item.question} </p>
                    <div className={styles.answer__wrapper}>
                      {answerElements}
                    </div>
                  </div>
                </div>
              );
            })}
        </form>
        {display && <button onClick={handleReveal}>Reveal</button>}
      </div>
    </>
  );
};

export default Form;
