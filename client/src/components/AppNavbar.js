import React, { Component } from 'react';
import {
  Collapse, //hamburger menu
  Navbar, // navigation bar at the top
  NavbarToggler, //navbar hamburger mar icon
  NavbarBrand, // no idea
  Nav, //wrapper around the links
  NavItem,
  NavLink, //href attribute for the links
  Container
} from 'reactstrap';

//creating component opf app navigation bar..
class AppNavbar extends Component {
    state = {
      isOpen: false
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return(
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Shopping List</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="https://google.com">Google</NavLink>
                  <NavLink href="https://runescape.com">Runescape</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }

}

export default AppNavbar;
