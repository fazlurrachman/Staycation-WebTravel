import React from "react";
import { Fade } from "react-awesome-reveal";

export default function Controller(props) {
  return (
    <Fade>
      <section className="container">
        <div className="row justify-content-center">
          <div className="col-3">{props.children}</div>
        </div>
      </section>
    </Fade>
  );
}
