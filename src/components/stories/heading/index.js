import React from "react";
import {headingColor} from '../../../config'
import './heading.css'
const Heading = ({ headingType, color, children }) => {
  const CustomTag = `h${headingType}`;
  return <CustomTag style={{ color: `${color ? color: headingColor}` }}>{children}</CustomTag>;
};
export default Heading;
