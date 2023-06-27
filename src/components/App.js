import React, { useState } from 'react';
import Container from './Container';
import Statistics from 'components/Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = e => {
    const { value } = e.currentTarget;
    switch (value) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const total = [good, neutral, bad].reduce((acc, value) => acc + value, 0);

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    let percentage = 0;
    if (countTotalFeedback() > 0) {
      percentage = Math.round((good / countTotalFeedback()) * 100);
    }
    return percentage;
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={addFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   addFeedback = e => {
//     const { value } = e.currentTarget;
//     this.setState(prevState => {
//       return {
//         [value]: prevState[value] + 1,
//       };
//     });
//   };

//   countTotalFeedback() {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   }

//   countPositiveFeedbackPercentage() {
//     const total = this.countTotalFeedback();
//     let percentage = 0;
//     if (total > 0) {
//       percentage = Math.round((this.state.good / total) * 100);
//     }
//     return percentage;
//   }

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedback={this.addFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }

export default App;
