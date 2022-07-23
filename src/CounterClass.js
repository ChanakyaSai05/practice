import React from "react";
class CounterClass extends React.Component {
  componentDidMount() {
    console.log("Runs when our component is rendered for the first time");
  }
  componentDidUpdate() {
    //sir taken two properties but without properties also it is running//I took scrren shot of sirs
    console.log("component did update runs");
  }
  componentWillUnmount() {
    console.log(
      "Runs when the component is removed from our app ie when our component is unmounted"
    );
  }
  render() {
    return <h1>{this.props.number}</h1>;
  }
}
export default CounterClass;
