import React, { Component } from "react";
import { STAFFS } from "./staffs";
import { Media } from "reactstrap";

class Payroll extends Component {
  constructor(props) {
    super(props);
    this.state = { STAFFS, choosenDepart: null };
  }

  showDepart(pay) {
    this.setState({ choosenDepart: pay });
  }

  render() {
    console.log("try");
    const payRoll = this.state.STAFFS.map((pay) => {
      const wage = [pay.salaryScale * 3000000 + pay.overTime * 2000000];
      return (
        <div key={pay.id} className="staff-infor">
          <Media body className="ml-5">
            <h1 className="staff-infor-name">{pay.name}</h1>
            <Media heading>Mã Nhân Viên:{pay.id}</Media>
            <Media heading>Hệ Số Lương: {pay.salaryScale}</Media>
            <Media heading>Số Ngày Làm Thêm: {pay.overTime}</Media>
            <Media heading>Lương: {wage}</Media>
          </Media>{" "}
        </div>
      );
    });
    return (
      <div>
        <Media list className="row-department">
          {payRoll}
        </Media>
      </div>
    );
  }
}
export default Payroll;
