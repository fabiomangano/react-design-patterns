import React from 'react'M

class Mouse extends React.PureComponent {
  // Same implementation as above...
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>Move the mouse around!</h1>

        {/*
          This is bad! The value of the `render` prop will
          be different on each render.
        */}
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

export default MouseTracker;
