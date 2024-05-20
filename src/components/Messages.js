import { CSSTransition, TransitionGroup } from 'react-transition-group';
import React, { useRef, useEffect, useState } from 'react';

const Messages = ({messages}) => {
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 5000); // Change message every 3 seconds
    return () => clearInterval(interval);
  }, []);
return (
    <div className="messages">
      <TransitionGroup>
        <CSSTransition
          key={index}
          timeout={5000}
          exit={false}
          classNames="fade"
        >
          <div className="message-container">
          <div style={{ color: "white", fontSize: 20}} className="message">{messages[index]}</div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};


export default Messages