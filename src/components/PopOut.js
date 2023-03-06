import React, { useState, useEffect, useRef } from "react";

export const PopOut = (props) => {
  const [isOpen, setIsopen] = useState(false);
  const popOutRef = useRef();

  // handle to close
  const handleOffClick = (e) => {
    if (popOutRef.current && !popOutRef.current.contains(e.target)) {
      handleClose();
    }
  };
  const handleClose = () => {
    setIsopen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOffClick);
    } else {
      document.removeEventListener("mousedown", handleOffClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOffClick);
    };
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsopen(true);
    }, props.delay);

    return () => {
      clearTimeout(timer);
    };
  }, [props.delay]);

  return (
    <>
      {isOpen && (
        <section className="pop-out-window">
          <div className="pop-out-msg-box" ref={popOutRef}>
            {props.children}
          </div>
        </section>
      )}
    </>
  );
};
