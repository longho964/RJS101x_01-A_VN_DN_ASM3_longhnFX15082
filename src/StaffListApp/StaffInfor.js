import React from "react";
import { connect } from 'react-redux/es/exports';
import StaffAvatar from './StaffAvatar'
import StaffTextInfor from './StaffTextInfor'


const StaffInfor = (props) => {
  if (props.staff != null)
    return (
      <div className="row-staffinfor">
        <div className="">
          <StaffAvatar staff={props.staff} />
        </div>
        <div>
          <StaffTextInfor choosenStaff={props.staff} />
        </div>
      </div>
    );
  else return <div></div>;
};

// connect(mapDispatchToProps)()
export default StaffInfor;
