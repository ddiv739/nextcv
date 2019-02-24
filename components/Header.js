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
      <div className = 'header'>
        <Navbar color="transparent"  expand="md" className='navbar-light justify-md-content-center'>
          <NavbarBrand href="/"  className = 'd-none d-md-block ' style={{position: 'absolute', fontSize: '30px'}}>D<span style={{color: 'rgb(183, 58, 73)'}}>\</span>D</NavbarBrand>
          <NavbarBrand href="/"  className = 'd-block d-md-none '>D<span style={{color: 'rgb(183, 58, 73)'}}>\</span>D</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar className='navbar-nav align-right justify-content-center'>
                <Nav style={{textAlign: "center"}} navbar>
                    <NavItem className="nav-item" >
                        <NavLink href="/">Home</NavLink>
                    </NavItem>
                    <NavItem  className="nav-item">
                        <NavLink href="/projects">Projects</NavLink>
                    </NavItem>
                    <NavItem  className="nav-item">
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    {/* <NavItem  className="nav-item">
                        <NavLink href="/blog">Blog</NavLink>
                    </NavItem> */}
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
