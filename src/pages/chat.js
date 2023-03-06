import "./chat.css";
import React, { useState } from "react";
import Map from "../components/map";

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
      <div id="section-container">{show && <Map />}</div>
    </section>
  );
}
