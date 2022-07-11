import React, { Component } from "react";
import { DEPARTMENTS } from "./staffs";
import { Link } from "react-router-dom";
import { Media } from "reactstrap";

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = { DEPARTMENTS, choosenDepart: null };
  }

  showDepart(depart) {
    this.setState({ choosenDepart: depart });
  }

  render() {
    console.log("try");
    const staffDepartment = this.state.DEPARTMENTS.map((depart) => {
      return (
        <div key={depart.id} className="liInfor">
          {/* <Media tag="li" onClick={() => this.showInfo(depart)}>
            {" "}
            <Link to="/staffInfor"> */}
          <Media body className="ml-5">
            <h1 heading>{depart.name}</h1>
            <Media heading>Số lượng nhân viên:{depart.numberOfStaff}</Media>
          </Media>{" "}
          {/* </Link>
          </Media> */}
        </div>
      );
    });
    return (
      <div>
        <Media list className="row">
          {staffDepartment}
        </Media>
      </div>
    );
  }
}
export default Departments;
