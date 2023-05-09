import { React, Component } from 'react';
import { FeedbackRates } from 'components/FeedbackRates/FeedbackRates';
import { Statistics } from 'components/Statistics/RateStatistics';
import { Title } from 'components/Title/Title';
import { Notification } from 'components/EmptyNotification/EmptyNotification';
import {Section} from './App.styled'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleReviewClick = event => {
    const type = event.target.name;
    this.setState(prevState => ({
      [type]: prevState[type] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  positivePercentage = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(1);
  };
  render() {
    return (
      <Section>
        <Title title={'Feedback'}>
          <FeedbackRates onLeaveFeedback={this.handleReviewClick} />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={this.countTotalFeedback()}
            positivePercentage={this.positivePercentage()}
          >
            <Notification message="There is no feedback" />
          </Statistics>
        </Title>
      </Section>
    );
  }
}
