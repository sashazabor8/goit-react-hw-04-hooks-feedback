import s from './Statistics.module.css';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <ul>
      <li className={s.statisticsItem}>Good: {good}</li>
      <li className={s.statisticsItem}>Neutral: {neutral}</li>
      <li className={s.statisticsItem}>Bad: {bad}</li>
      <li className={s.statisticsItem}>Total: {total}</li>
      <li className={s.statisticsItem}>
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
}

export default Statistics;
