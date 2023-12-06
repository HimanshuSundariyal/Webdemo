import React from "react";
import Heading from "./index";

export default {
  title: "Heading",
  component: Heading,
};

export const H1 = () => <Heading headingType={1} color="#000"> Heading 1</Heading>;
export const H2 = () => <Heading headingType={2} color="red"> Heading 2 </Heading>;
export const H3 = () => <Heading headingType={3} color="#000"> Heading 3 </Heading>;
export const H4 = () => <Heading headingType={4} color="#000"> Heading 4 </Heading>;
