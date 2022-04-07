import React, { useState } from "react";
import { Navbar, Container } from "./styles";

function Header() {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">Brand link</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
