import "./chat.css";
import React, { useState } from "react";

export default function Chat() {
  let [show, setShow] = useState(false);

  function handleClik() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  
  return (
    <section>
      <button onClick={handleClik}>Show element</button>
      {show && <div>This is the element to show.</div>}
    </section>
  );
}
