import styled from "styled-components";
import { Card } from "react-bootstrap";

const StylizedCard = styled(Card)`
  height: "155px";
  width: "18rem";
  cursor: pointer !important;
  color: ${(props) => (props.type === "closed" ? "#842029" : "#0f5132")};
  background-color: ${(props) =>
    props.type === "closed" ? "#e66572" : "#79b99c"} !important;
  border-color: ${(props) =>
    props.type === "closed" ? "#e66572" : "#79b99c"} !important;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.type === "open" ? "#28a745" : ""} !important;
  }
`;

export { Card, StylizedCard };
