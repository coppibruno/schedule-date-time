import styled from "styled-components";
import { Modal, Button, Form, Col } from "react-bootstrap";

const StylizedCard = styled(Modal)`
  height: "155px";
  width: "18rem";
  cursor: pointer !important;
  color: ${(props) => (props.type === "closed" ? "#d9d9d9" : "#0f5132")};
  background-color: "#d9d9d9" !important;
  border-color: "#d9d9d9" !important;
  transition: 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.type === "closed" ? "#f91f35" : "#28a745"} !important;
  }
`;

export { Modal, Button, Form, Col };
