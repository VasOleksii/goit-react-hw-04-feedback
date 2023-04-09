import React, { useState } from 'react';
import { Section } from './Section/Section ';
import { FeedbackOptions } from './FeedbackValue/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notifications/Notifications';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const option = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = option => {
    switch (option) {
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
        return;
    }
  };

  const calcTotalFeedback = () => {
    return good + bad + neutral;
  };
  const total = calcTotalFeedback();
  const calcPositiveFeedback = () => {
    return total === 0 ? 0 : Math.floor((good / total) * 100);
  };
  return (
    <>
      <Section title={'Please leave your feedback'}>
        <FeedbackOptions options={option} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={calcPositiveFeedback()}
          />
        )}
      </Section>
    </>
  );
};

export default App;

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   calcTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + bad + neutral;
//   };

//   calcPositiveFeedback = () => {
//     const total = this.calcTotalFeedback();
//     return total === 0 ? 0 : Math.floor((this.state.good / total) * 100);
//   };

//   render() {
//     const total = this.calcTotalFeedback();
//     return (
//       <>
//         <Section title={'Please leave your feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {total === 0 ? (
//             <Notification message="No feedback given" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               percentage={this.calcPositiveFeedback()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
