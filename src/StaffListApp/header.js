import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink, Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container nav">
            <NavbarBrand onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img className="nav" src="/funix-logo.png" alt="funix-logo" />
            </NavbarBrand>

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem className="nav">
                  <NavLink className="nav-link" to="/nhanvien">
                    <span className="fa fa-home fa-lg"></span> Nhân Viên
                  </NavLink>
                </NavItem>

                <NavItem className="nav">
                  <Link className="nav-link" to="/phongban">
                    <span className="fa fa-info fa-lg"></span> phòng Ban
                  </Link>
                </NavItem>

                <NavItem className="nav">
                  <NavLink className="nav-link" to="/bangluong">
                    <span className="fa fa-list fa-lg"></span> Bảng Lương
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Header;
