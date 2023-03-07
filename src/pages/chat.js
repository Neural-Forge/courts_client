import "./chat.css";
import React, { useState } from "react";
import Map from "../components/map";
import Pdf from "../components/pdf";

export default function Chat() {
  let [show, setShow] = useState(false);

  function handleClik() {
    if (show === true) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  function Buttons() {
    return (
      <div>
        <button>Generate Report</button>
      </div>
    );
  }

  return (
    <section className="main-container">
      <button onClick={handleClik}>Show element</button>
      <div id="section-container">{show && <Map />}</div>
      <Pdf />
    </section>
  );
}
