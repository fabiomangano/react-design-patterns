import React from "react";

function logProps(WrappedComponent) {
  return class extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("Current props: ", this.props);
      console.log("Previous props: ", prevProps);

      const { extraProp, ...passThroughProps } = this.props;

      // Inject props into the wrapped component. These are usually state values or
      // instance methods.
      const injectedProp = someStateOrInstanceMetho;
    }
    render() {
      // Wraps the input component in a container, without mutating it. Good!
      return (
        <WrappedComponent injectedProp={injectedProp} {...passThroughProps} />
      );
    }
  };
}

export default logProps;
