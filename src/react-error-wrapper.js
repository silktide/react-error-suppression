import React from 'react';

export default function wrapComponent(Component, logErrors = false) {
  return class extends Component {
    render() {
      try {
        return super.render();
      } catch (e) {
        if (logErrors) {
          console.log(e);
        }

        return <div />;
      }
    }
  }
}