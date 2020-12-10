import React from "react";
import Content from "../components/Content";
import Hero from "../components/Hero";

function ContentPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
    <p>
      <iframe title="simple freq" src="https://editor.p5js.org/beerona/embed/LQeJDeoDi "width="600" height="500"></iframe>
    </p>
      </Content>
    </div>
  );
}

export default ContentPage;