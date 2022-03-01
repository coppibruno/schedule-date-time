import React, { useState } from "react";
import { Modal, Button } from "./styles";

function AppointmentConfirmation({ hours, closeModal }) {
  const [show, setShow] = useState(true);

  const handleClose = () => closeModal(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação de apontamento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Você confirma o apontamento às {hours} ?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Confirmar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AppointmentConfirmation;
