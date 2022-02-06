import React, { useState } from "react";
import { Modal, Button, Form } from "./styles";

function SignUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cadastre-se
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cadastre-se</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Nome Completo" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Sexo:</Form.Label>
              <Form.Check
                type="radio"
                label="Masculino"
                id={`disabled-default-radio`}
              />
              <Form.Check
                type="radio"
                label="Feminino"
                id={`disabled-default-radio`}
              />
              <Form.Check
                className="mb-3"
                type="radio"
                label="Outros"
                id={`disabled-default-radio`}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Telefone" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                autocomplete="false"
                placeholder="Email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="password"
                autocomplete="false"
                placeholder="Senha"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" className="w-100" onClick={handleClose}>
            Continuar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SignUp;
