import React from 'react';

import { ManageYourTimeContext } from '../contexts/manage-your-time-preview/manage-your-time.context';

const withCustomGoals = (WrappedComponent, whichComponent) => {
  return class extends React.Component {
    static contextType = ManageYourTimeContext;

    constructor(props) {
      super(props);
      this.state = {
        customGoals: [],
      };
    }

    getCustomGoals = () => {
      const customGoals = this.context.state.goals.filter(
        (goal) => goal.isDone === (whichComponent === 'done' ? true : false)
      );
      this.setState({ customGoals: customGoals });
    };

    componentDidUpdate() {
      this.getCustomGoals();
    }

    shouldComponentUpdate(nextProps, nextState) {
      if (nextState.customGoals.length === this.state.customGoals.length) {
        return false;
      }
    }

    render() {
      return (
        <WrappedComponent
          customGoals={this.state.customGoals}
          {...WrappedComponent.props}
        />
      );
    }
  };
};

export default withCustomGoals;
