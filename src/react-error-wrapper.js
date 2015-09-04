import React from 'react';

export default function wrapComponent(Component) {
  const {render} = Component;

  Component.render = function () {
    try {
      render.apply(Component, ...arguments);
    } catch (e) {
      return <div />
    }
  } 
}