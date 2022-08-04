import React from "react";

function RenderAvata({ staff }) {
  return (
    <div className="">
      <img
        className="staffinfor-image"
        src={staff.image}
        alt={staff.name}
      ></img>
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
            <div key={choosenStaff.id} className="container-infor">
              <h5> Họ và tên: {choosenStaff.name}</h5>
              <p>
                {" "}
                Ngày sinh : {new Date(choosenStaff.doB).toLocaleDateString()}
              </p>
              <p>
                {" "}
                Ngày vào công ty:
                {new Date(choosenStaff.startDate).toLocaleDateString()}
              </p>
              <p> Phòng ban: {choosenStaff.departmentId}</p>
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
      <div className="row-staffinfor">
        <div className="">
          <RenderAvata staff={props.staff} />
        </div>
        <div>
          <RenderStaffInfor choosenStaff={props.staff} />
        </div>
      </div>
    );
  else return <div></div>;
};

export default StaffInfor;
