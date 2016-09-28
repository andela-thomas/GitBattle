import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/main.css';

function Main(props) {
  return (
    <div className='main-container'>
      <ReactCSSTransitionGroup
        transitionName="appear"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}>
          {React.cloneElement(props.children, {key: props.location.pathname})}
      </ReactCSSTransitionGroup>
    </div>
  );
}

export default Main;
