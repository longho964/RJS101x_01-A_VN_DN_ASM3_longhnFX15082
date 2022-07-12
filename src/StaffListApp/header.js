import React, { Component } from "react";
import { Nav, Navbar, NavbarBrand, Collapse, NavItem } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faMoneyBill,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";

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
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    <span className="fa fa-home fa-lg"> Nhân Viên</span>
                  </NavLink>
                </NavItem>

                <NavItem className="nav">
                  <Link className="nav-link" to="/phongban">
                    <FontAwesomeIcon icon={faIdCard} />
                    <span className="fa fa-info fa-lg"> phòng Ban</span>
                  </Link>
                </NavItem>

                <NavItem className="nav">
                  <NavLink className="nav-link" to="/bangluong">
                    <FontAwesomeIcon icon={faMoneyBill} />
                    <span className="fa fa-list fa-lg"> Bảng Lương</span>
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
