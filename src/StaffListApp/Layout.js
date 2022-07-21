import React, { Component } from "react";
import { STAFFS } from "./staffs";
import "../App";
import { Route, Routes, useParams } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import StaffInfor from "./StaffInfor";
import Departments from "./department";
import Payroll from "./payroll";
import Liststaff from "./staffList";
import Introduction from "./introduction";
class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choosenStaff: null,
    };

  }

  showInfo(item) {
    this.setState({ choosenStaff: item });
  }

  render() {
    console.log("this.state.STAFFS", this.state.staffs);

    const StaffDetail = (props) => {
      const staffs= JSON.parse( window.localStorage.getItem('staffNewList')) || STAFFS;
      console.log('local',staffs)
      let { idNhanVien } = useParams();
      console.log("id nhan vien:", idNhanVien);
      
      return (
        <StaffInfor
          staff={
            staffs.filter(
              (staff) =>  parseInt(staff.id) === parseInt(idNhanVien, 10)
            )[0]        
          }          
        />
      );
    };

    return (
      <div className="container">
        <h1 className="application"> FUNIX REACT COMPANY</h1>
        <Header />
        <Routes>
          <Route exact path="/" element={<Introduction />} />
          <Route exact path="/nhanvien" element={<Liststaff />} />
          <Route path="/nhanvien/:idNhanVien" element={<StaffDetail />} />

          <Route exact path="/phongban" element={<Departments />} />
          <Route exact path="/bangluong/*" element={<Payroll />} />
        </Routes>

        <Footer />
      </div>
    );
  }
}

export default Layout;
