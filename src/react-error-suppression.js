import React from 'react';

let errorLogging = false;

class WrappedComponent extends React.Component {
  constructor(options) {
    super(options);

    const {render} = this;

    this.render = function () {
      try {
        return render.apply(this, ...arguments);
      } catch (e) {
        if (errorLogging) {
          console.log('error in component', e);
        }
        return <span />
      }
    }
  }
}

const ReactWithErrorSuppression = Object.assign({} , React,  {
  Component: WrappedComponent,
  enableErrorLogging() {
    errorLogging = true;
  }
});

export default ReactWithErrorSuppression;