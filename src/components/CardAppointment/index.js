import React, { useState } from "react";
import { Card, StylizedCard } from "./styles";

function CardAppointment({ type, hours, amount }) {
  return (
    <StylizedCard type={type} text={"dark"} className={`m-2 hover-overlay `}>
      <Card.Body>
        <Card.Text
          className="d-flex justify-content-center align-items-center"
          style={{ height: "80px" }}
        >
          <h2 className="m-0">{hours}</h2>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <small className="text-dark">{amount} vagas disponíveis</small>
      </Card.Footer>
    </StylizedCard>
  );
}

export default CardAppointment;
