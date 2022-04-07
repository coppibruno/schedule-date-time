import React from "react";
import CardAppointment from "../../components/CardAppointment";
import Header from "../../components/Header";
import { Container, Row, Col } from "react-bootstrap";

function Appointment() {
  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="08:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="09:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="10:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="11:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="13:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="closed" hours="14:00" amount="0" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="15:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="16:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="closed" hours="17:00" amount="0" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="18:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="19:00" amount="18" />
          </Col>
          <Col xs={6} md={3} sm={4}>
            <CardAppointment type="open" hours="20:00" amount="18" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Appointment;
