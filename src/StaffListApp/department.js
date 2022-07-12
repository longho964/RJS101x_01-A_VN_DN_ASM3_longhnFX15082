import React, { Component } from "react";
import { DEPARTMENTS } from "./staffs";
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
        <div key={depart.id} className="department">
          <Media body className="ml-5">
            <h1 heading>{depart.name}</h1>
            <Media heading>Số lượng nhân viên:{depart.numberOfStaff}</Media>
          </Media>{" "}
        </div>
      );
    });
    return (
      <div>
        <Media list className="row-department">
          {staffDepartment}
        </Media>
      </div>
    );
  }
}
export default Departments;
