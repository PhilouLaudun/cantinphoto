import React, { useState, useEffect } from "react";

const Test = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
      const { innerWidth: width, innerHeight: height } = window;
        console.log("getdimension", width)
    return {
      width,
      height,
    };
    }
    
    useEffect(() => {
      function handleResize() {
          setWindowDimensions(getWindowDimensions());
          
      }
    
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <div>width: {windowDimensions.width}</div>
};

export default Test;
