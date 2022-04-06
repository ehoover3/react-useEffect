import React from "react";
import { useState, useEffect } from "react";

export default function KeyPress() {
  // VANILLA JAVASCRIPT SECTION
  // 1. useState
  const [userText, setUserText] = useState("");

  // 2. helper functions
  function handleUserKeyPress(event) {
    if (event.keyCode === 32 || (event.keyCode >= 65 && event.keyCode <= 90)) {
      setUserText(`${userText}${event.key}`);
    }
  }

  // 3. useEffect
  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  // JSX SECTION
  return (
    <div>
      <h1>2. UseEffect for KeyPress Listener Events</h1>
      <div>Press Keys</div>
      <blockquote style={{ outline: "1px solid black" }}>{userText}</blockquote>
    </div>
  );
}
