import { React, Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, bad, neutral, children, totalFeedback, positivePercentage } =
      this.props;
    return (
      <>
        <h2>Statistics</h2>
        {totalFeedback === 0 ? (
          <>{children}</>
        ) : (
          <>
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>Total: {totalFeedback}</li>
              <li>Positive Feedback: {positivePercentage}%</li>
            </ul>
          </>
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  children: PropTypes.object,
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
