import { Component } from 'react';
import Button from 'components/shared/Button/Button';
import Section from 'components/shared/Section/Section';
import Notification from 'components/shared/Notification/Notification';
import Statistics from 'components/Statistics/Statistics';

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
    this.show();
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
    const result = Number(((good * 100) / total).toFixed(0));
    return result;
  }

  render() {
    const { visible, good, neutral, bad } = this.state;
    const positivePersent = this.countPositivePercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <Button type="button" onClick={() => this.onLeaveFeedback('good')}>
            Good
          </Button>
          <Button type="button" onClick={() => this.onLeaveFeedback('neutral')}>
            Neutral
          </Button>
          <Button type="button" onClick={() => this.onLeaveFeedback('bad')}>
            Bad
          </Button>
        </Section>

        <Section title="Statistics">
          {visible && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              positivePersent={positivePersent}
            />
          )}
          {!visible && <Notification message="There is no feedback" />}
        </Section>
      </div>
    );
  }
}

export default Feedback;

// import { Component } from 'react';
// import Button from 'components/shared/Button/Button';
// import SectionTitle from 'components/shared/Section/Section';

// class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     visible: false,
//   };

//   show = () => {
//     this.setState({ visible: true });
//   };

//   onLeaveFeedback(name) {
//     this.show();
//     this.setState(prevState => {
//       return { [name]: prevState[name] + 1 };
//     });
//   }

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   }

//   countPositivePercentage() {
//     const total = this.countTotalFeedback();
//     const { good } = this.state;
//     if (!total) {
//       return 0;
//     }
//     const result = ((good * 100) / total).toFixed(0);
//     return result;
//   }

//   render() {
//     const { visible, good, neutral, bad } = this.state;
//     const positivePersent = this.countPositivePercentage();

//     return (
//       <div>
//         <div>
//           title
//           <SectionTitle>Please leave feedback</SectionTitle>
//           <Button type="button" onClick={() => this.onLeaveFeedback('good')}>
//             Good
//           </Button>
//           <Button type="button" onClick={() => this.onLeaveFeedback('neutral')}>
//             Neutral
//           </Button>
//           <Button type="button" onClick={() => this.onLeaveFeedback('bad')}>
//             Bad
//           </Button>
//         </div>
//         <div>
//           <SectionTitle>Statistics</SectionTitle>

//           {visible && (
//             <div>
//               <p>Good: {good}</p>
//               <p>Neutral: {neutral} </p>
//               <p>Bad: {bad} </p>
//               <p>Positive feedback: {positivePersent}%</p>
//             </div>
//           )}
//           {!visible && <p>There is no feedback</p>}
//         </div>
//       </div>
//     );
//   }
// }

// export default Feedback;
