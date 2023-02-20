import Form from "../../components/Form/Form";
import styles from "./main.module.scss";
const Main = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <h2>
          <mark>QuizIt.</mark>
        </h2>
        <p> Get random quiz questions by pressing the dice button.</p>
        <br />
        <Form />
      </div>
    </>
  );
};

export default Main;
