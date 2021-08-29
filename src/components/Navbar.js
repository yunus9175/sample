import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import rk from '../assets/image/rk.png';
import { Link } from 'react-router-dom';
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div style={{ fontSize: 29 }}>
      <Navbar color="light" light expand="md">
        <img src={rk} alt="RK contstruction" height={60} />
        <NavbarBrand href="/" style={{ fontSize: 29 }}>
          Yusuf page
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/reactstrap/reactstrap"
                target="_blank"
              >
                GitHub
              </NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink
                    href="http://www.yusufengineer.blogspot.com"
                    target="_blank"
                  >
                    Electrical Engineering
                  </NavLink>
                </DropdownItem>
                <DropdownItem>Electrical Concepts</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Computer Fundamental</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <Link to="/">Go to Next Project</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
