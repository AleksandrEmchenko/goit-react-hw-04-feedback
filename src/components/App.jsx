import { useState } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (option) => {
    switch (option) {
      case "good":
        setGood(prevState => prevState + 1);
        break;
      case "neutral":
        setNeutral(prevState => prevState + 1);
        break;
      case "bad":
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const positivePercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <div>
      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
        </Section>
      {countTotalFeedback() ? (
        <Section title={"Statistics"}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={Number(positivePercentage())}
            
          />
        </Section>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
}
