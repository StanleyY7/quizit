import { useState, useContext } from "react";
import { fetchData } from "../../services/fetch";
import ProductContext from "../productContext/ProductContext";
import styles from "../../containers/main/main.module.scss";

const Form = () => {
  const [selectedCategory, setSelectedCategory] = useState("general_knowledge");
  const [selectedDifficulty, setSelectedDifficulty] = useState("easy");
  const [selectedResults, setSelectedResults] = useState(5);
  const [selectedRegion, setSelectedRegion] = useState("AU");
  const { data, setData } = useContext(ProductContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(
      setData,
      selectedCategory,
      selectedDifficulty,
      selectedResults,
      selectedRegion
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
                <p className={styles.correct}>{item.correctAnswer} </p>,
                <p>{item.incorrectAnswers[0]}</p>,
                <p>{item.incorrectAnswers[1]}</p>,
                <p> {item.incorrectAnswers[2]}</p>,
              ];
              const shuffledPElements = pElements.sort(
                () => Math.random() - 0.5
              );
              const answerElements = shuffledPElements.map((element, index) => (
                <p className={styles.horizontal} key={index}>
                  <strong>{labels[index]}: </strong> {element}
                </p>
              ));
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
      </div>
    </>
  );
};

export default Form;
