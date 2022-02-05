import React from 'react';
import CardAppointment from '../../components/CardAppointment'
import { Container, Row, Col } from 'react-bootstrap'

function Appointment() {
    return (
        <Container>
            <Row>
                <Col xs={3}><CardAppointment type="open" hours="8:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="9:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="10:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="11:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="13:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="closed" hours="14:00" amount="0" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="15:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="16:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="closed" hours="17:00" amount="0" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="18:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="19:00" amount="18" /> </Col>
                <Col xs={3}><CardAppointment type="open" hours="20:00" amount="18" /> </Col>
            </Row>
        </Container>
    )
}

export default Appointment