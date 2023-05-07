import { React, Component } from 'react';

export class FeedbackRates extends Component {
  render() {
    const { onLeaveFeedback } = this.props;
    return (
      <div>
        <ul>
          <li>
            <button name="good" onClick={onLeaveFeedback}>
              Good
            </button>
            <button name="neutral" onClick={onLeaveFeedback}>
              Neutral
            </button>
            <button name="bad" onClick={onLeaveFeedback}>
              Bad
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
