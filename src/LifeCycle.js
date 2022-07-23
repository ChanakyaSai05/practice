import React from "react";
import CounterClass from "./CounterClass";
class LifeCycle extends React.Component {
  state = {
    num: 0,
  };
  handleClick() {
    this.setState((state) => ({ num: state.num + 1 }));
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Increment</button>
        <CounterClass number={this.state.num} />
      </div>
    );
  }
}
export default LifeCycle;
