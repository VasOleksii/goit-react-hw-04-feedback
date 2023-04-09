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
