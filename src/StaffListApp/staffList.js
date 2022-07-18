import React, { Component } from "react";
import {
  Media,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { STAFFS } from "./staffs";
import { Link } from "react-router-dom";

class Liststaff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      STAFFS,
      id: "",
      name: "",
      dob: "",
      salaryScale: "",
      department: "",
      annualLeave: "",
      overTime: "",
      image: "/assets/images/alberto.png",
      openform: false,
    };

    this.toggleForm = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({ openform: !this.state.openform });
  }

  render() {
    console.log("this.state.STAFFS", this.state.STAFFS);

    const staffcompany = this.state.STAFFS.map((item) => {
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
        <div>
          {" "}
          <Button color="danger" onClick={this.toggleForm}>
            Thêm Nhân Viên Mới{" "}
          </Button>{" "}
        </div>

        <Modal isOpen={this.state.openform} toggle={this.toggleForm}>
          <ModalHeader toggle={this.toggleForm}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label htmlFor="name" md={4}>
                  Tên
                </Label>
                <Col md={8}>
                  {" "}
                  <Input type="text" id="name" name="name" placeholder="Name" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="doB" md={4}>
                  Ngày sinh{" "}
                </Label>
                <Col md={8}>
                  {" "}
                  <Input type="date" id="doB" name="doB" placeholder="doB" />
                </Col>{" "}
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="startDate" md={4}>
                  Ngày vào công ty{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="date"
                    id="startDate"
                    name="startDate"
                    placeholder="startDate"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="salaryScale" md={4}>
                  Hệ số lương{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="salaryScale"
                    name="salaryScale"
                    placeholder="salaryScale"
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="department" md={4}>
                  Phòng ban{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="department"
                    name="department"
                    placeholder="department"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="annualLeave" md={4}>
                  Ngày nghỉ còn lại
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="annualLeave"
                    name="annualLeave"
                    placeholder="annualLeave"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor="overTime" md={4}>
                  Ngày làm thêm{" "}
                </Label>
                <Col md={8}>
                  <Input
                    type="text"
                    id="overTime"
                    name="overTime"
                    placeholder="overTime"
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => {}}>
              Add{" "}
            </Button>{" "}
            <Button onClick={this.toggleForm}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <h1 style={{ "text-align": "  center" }}>Nhân viên</h1>
        <div className="row-stafflist">{staffcompany}</div>
      </div>
    );
  }
}

export default Liststaff;
