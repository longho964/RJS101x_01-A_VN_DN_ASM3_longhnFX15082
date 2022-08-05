import React from 'react'

export default function StaffAvatar({ staff }) {
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
