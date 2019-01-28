import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className='navbar-light bg-light justify-md-content-center'>
          <NavbarBrand href="/"  className = 'd-none d-md-block ' style={{position: 'absolute'}}>D\D</NavbarBrand>
          <NavbarBrand href="/"  className = 'd-block d-md-none '>D\D</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar className='navbar-nav align-right justify-content-center'>
                <Nav style={{textAlign: "center"}} navbar>
                    <NavItem>
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/blog">Blog</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
