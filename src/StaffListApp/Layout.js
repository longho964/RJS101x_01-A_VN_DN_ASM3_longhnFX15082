import React, { Component } from "react";
import "../App";
import { Route, Routes, useParams } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import StaffInfor from "./StaffInfor";
import Departments from "./department";
import Payroll from "./payroll";
import Liststaff from "./staffList";
import Introduction from "./introduction";
import { connect } from "react-redux";
import { fetchStaffs } from "../redux/actinonCreator";

import { TransitionGroup, CSSTransition } from 'react-transition-group';


const mapStateToProps = (state) => {
  return {
    staffs: state.staffs,   
    departments: state.departments
  };
};

const mapDispatchToProps = (dispatch) => ({
  // dispatchAddNewStaff: (newstaff) => dispatch(addNewStaff(newstaff)),
  fetchStaffList: () => dispatch(fetchStaffs())
})

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: props.staffs,
      departments: props.departments,
      choosenStaff: null,
    };

  }

  componentDidMount(){
    this.props.fetchStaffList();
  }
  
  showInfo(item) {
    this.setState({ choosenStaff: item });
  }

  render() {
    const StaffDetail = (props) => {
      let { idNhanVien } = useParams();
      
      return (
        <StaffInfor
          staff={
            this.props.staffs.staffs.filter(
              (staffs) =>  parseInt(staffs.id) === parseInt(idNhanVien, 10)
            )[0]        
          }          
        />
      );
    };

    const StaffInDepartments = (props) => {
      let {idDepartment} = useParams();

      const staffs = this.props.staffs.staffs.filter(
        (department) => department.departmentId === idDepartment
      );

      const render=staffs.map( staff => {
        return (
          <div>
          <StaffInfor staff= {staff} />
          </div>                
      )
      })
      return render
     
    }

    return (
      <div className="container">
        <h1 className="application"> FUNIX REACT COMPANY</h1>
        <Header />
        {/* <TransitionGroup>
        <CSSTransition key={this.props.location} classNames="page" timeout={300}> */}

        <Routes location={this.props.location}>
          <Route exact path="/" element={<Introduction />} />
          <Route exact path="/nhanvien" element={<Liststaff />} />
          <Route path="/nhanvien/:idNhanVien" element={<StaffDetail />} />

          <Route exact path="/phongban" element={<Departments />} />
          <Route exact path="/phongban/:idDepartment" element={<StaffInDepartments />} />

          <Route exact path="/bangluong/*" element={<Payroll />} />
        </Routes>
        {/* </CSSTransition>

        </TransitionGroup> */}

        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (Layout);
