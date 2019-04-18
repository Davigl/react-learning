// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, Row} from 'react-materialize';
// Importando o Component NavLink da nossa lib de rotas
import { NavLink } from 'react-router-dom'

const Header = () => (
  <Row>  
    <Navbar className="grey darken-2">
      <NavLink to="/">Home</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </Navbar>
  </Row>
);

export default Header;