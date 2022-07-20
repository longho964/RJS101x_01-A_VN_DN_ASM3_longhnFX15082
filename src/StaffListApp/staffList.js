import React, { Component } from "react";
import {
  Media,
  
} from "reactstrap";
import { STAFFS } from "./staffs";
import { Link } from "react-router-dom";
import Search from "./search";
import NewStaff from "./addnewstaff";

class Liststaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      id: "",
      name: "",
      dob: "",
      salaryScale: "",
      department: "",
      annualLeave: "",
      overTime: "",
      image: "/assets/images/alberto.png",
      searchKeyWord: "",
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.filterStaff= this.filterStaff.bind(this)
    this.addNewStaff=this.addNewStaff.bind(this)
  }

  
  toggleForm() {
    this.setState({ openform: !this.state.openform });
  }

  filterStaff(searchKeyWord){
    const filter = STAFFS.filter(staff => {
      return staff.name.toLowerCase().includes(searchKeyWord.toLowerCase())// toLowerCase chuyen ve chu thuong
    })
    this.setState({staffs: filter})
  }

  addNewStaff(newstaff){
    const addNewStaff=[...STAFFS,newstaff]
    this.setState({staffs:addNewStaff})
  }

  render() {

    const staffcompany = this.state.staffs.map((item) => {
      return (
        <div key={item.id} className="staff-list">
          <Media tag="li" onClick={() => this.showInfo(item)}>
            {" "}
            <Link exact to={`/nhanvien/${item.id} `}>
              <Media body className="ml-5">
                <img className="staff-list-image" src={item.image} />
                <Media heading>{item.name}</Media>
              </Media>{" "}
            </Link>
          </Media>
        </div>
      );
    });

    return (
      <div>
        <div className="container-form">
        <NewStaff toggleForm={this.toggleForm} addNewStaff={this.addNewStaff} /> 
        <Search filterStaff={this.filterStaff} />
       </div>

        
        <h1 style={{ "text-align": "  center" }}>Nhân viên</h1>
        <div className="row-stafflist">{staffcompany}</div>
      </div>
    );
  }
}

export default Liststaff;
