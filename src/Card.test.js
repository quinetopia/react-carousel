import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

const card = {caption: "Test caption", src : image1, cardIdx: 1}
const total = 1;

it("renders without crashing", function() {

  render(<Card 
            caption={card.caption}
            src={card.src}
            currNum={cardIdx + 1}
            totalNum={total}/>);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Card 
                                  caption={card.caption}
                                  src={card.src}
                                  currNum={cardIdx + 1}
                                  totalNum={total}/>);
  expect(asFragment()).toMatchSnapshot();
});