import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>

        <h3>Testing responsiveness of site</h3>
        <p>
        This project aims to reconcile our relationship with and towards
        personal data. Wearable technologies are at the forefront of the
        internet of things. The internet of things is the interconnection via
        the internet of computing devices embedded in everyday objects, enabling
        them to send and receive data. The aim here is for the user to
        experience agency within human computer interactions. To take back
        control over their own data and experience a temporary representation of
        self in a palpable way.
        </p>
        <p> 
        <iframe title="legend rise" src="https://editor.p5js.org/beerona/embed/FCnAtutgY"></iframe>
    </p>
      </Content>
    </div>
  );
}

export default AboutPage;
