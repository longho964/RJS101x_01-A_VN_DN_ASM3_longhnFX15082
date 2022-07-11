import React from "react";
import { Card, CardImg } from "reactstrap";

function RenderAvata({ staff }) {
  console.log("1111");
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={staff.image} alt={staff.name}></CardImg>
      </Card>
    </div>
  );
}

function RenderStaffInfor({ choosenStaff }) {
  if (choosenStaff != null)
    return (
      <div className="container">
        <div className="infor-body">
          {" "}
          {choosenStaff !== null && (
            <div key={choosenStaff.id} className="containerinfor">
              <h5> Họ và tên: {choosenStaff.name}</h5>
              <p> Ngày sinh : {choosenStaff.doB}</p>
              <p> Ngày vào công ty:{choosenStaff.startDate}</p>
              <p> Phòng ban: {choosenStaff.department.name}</p>
              <p> Số ngày nghỉ còn lại: {choosenStaff.annualLeave}</p>
              <p> số ngày làm thêm: {choosenStaff.overTime}</p>
            </div>
          )}
        </div>
      </div>
    );
  else return <div></div>;
}

const StaffInfor = (props) => {
  if (props.staff != null)
    return (
      <div className="row1">
        <div className="col-12 col-md-5 m-1">
          <RenderAvata staff={props.staff} />
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderStaffInfor choosenStaff={props.staff} />
        </div>
      </div>
    );
  else return <div></div>;
};

export default StaffInfor;
