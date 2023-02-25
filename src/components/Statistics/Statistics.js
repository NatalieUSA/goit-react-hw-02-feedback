import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, positivePersent }) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Positive feedback: {positivePersent}%</p>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePersent: PropTypes.number.isRequired,
};
