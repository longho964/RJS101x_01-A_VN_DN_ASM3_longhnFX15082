import React from 'react'
import Button from 'react-bootstrap/Button';
import { deleteStaff } from '../redux/actinonCreator';
import { useDispatch } from 'react-redux'

export default function StaffTextInfor({ choosenStaff }) {
    const dispatch = useDispatch()

    const handleDeleteStaff = (deleteStaffId) => {
        alert('Do you want delete?')
        console.log('first', alert.prototype)
        dispatch(deleteStaff(deleteStaffId))
    }

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
        <div className='delete'>
          <Button 
            onClick={() => { handleDeleteStaff(choosenStaff.id) }} variant="danger"
          >Delete</Button>{' '}
        </div>
      </div>
    );
  else return <div></div>;
}
