import React, { Component } from "react";
import { Media } from "reactstrap";
import { STAFFS } from "./staffs";
import { Link } from "react-router-dom";
class Liststaff extends Component {
  constructor(props) {
    super(props);
    this.state = { STAFFS, choosenStaff: null };
  }
  render() {
    console.log("this.state.STAFFS", this.state.STAFFS);

    const staffcompany = this.state.STAFFS.map((item) => {
      return (
        <div key={item.id} className="liInfor">
          <Media tag="li" onClick={() => this.showInfo(item)}>
            {" "}
            <Link exact to={`/nhanvien/${item.id} `}>
              <Media body className="ml-5">
                <img src={item.image}></img>
                <Media heading>{item.name}</Media>
              </Media>{" "}
            </Link>
          </Media>
        </div>
      );
    });
    return <div className="row">{staffcompany}</div>;
  }
}

export default Liststaff;
