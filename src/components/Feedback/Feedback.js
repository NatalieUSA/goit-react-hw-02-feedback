import { Component } from 'react';
import Button from 'components/shared/Button/Button';
import SectionTitle from 'components/shared/SectionTitle/SectionTitle';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };

  show = () => {
    this.setState({ visible: true });
  };

  onLeaveFeedback(name) {
    const message = this.show();
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  }

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositivePercentage() {
    const total = this.countTotalFeedback();
    const { good } = this.state;
    if (!total) {
      return 0;
    }
    const result = ((good * 100) / total).toFixed(0);
    return result;
  }

  render() {
    const { visible, good, neutral, bad } = this.state;
    const total = this.countTotalFeedback;
    const positivePersent = this.countPositivePercentage();
    return (
      <div>
        <div>
          <SectionTitle>Please leave feedback</SectionTitle>

          <Button type="button" onClick={() => this.onLeaveFeedback('good')}>
            Good
          </Button>
          <Button type="button" onClick={() => this.onLeaveFeedback('neutral')}>
            Neutral
          </Button>
          <Button type="button" onClick={() => this.onLeaveFeedback('bad')}>
            Bad
          </Button>
        </div>
        <div>
          <SectionTitle>Statistics</SectionTitle>

          {visible && (
            <div>
              <p>Good: {good}</p>
              <p>Neutral: {neutral} </p>
              <p>Bad: {bad} </p>
              <p>Positive feedback: {positivePersent}%</p>
            </div>
          )}
          {!visible && <p>There is no feedback</p>}
        </div>
      </div>
    );
  }
}

export default Feedback;
