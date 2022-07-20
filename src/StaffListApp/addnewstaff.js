import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Col,
  Button,
  Modal,
  ModalFooter,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import {  STAFFS } from "./staffs";

class NewStaff extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      newmember: {
        id: "",
        name: "",
        doB: "",
        salaryScale: "",
        startDate: "",
        department: "",
        annualLeave: "",
        overTime: "",
        image: "/assets/images/alberto.png",
      },
      openform: false,
      touched: {
        id: false,
        name: false,
        dob: false,
        startDate: false,
        salaryScale: false,
        department: false,
        annualLeave: false,
        overTime: false,
      },
    };

    this.toggleForm = this.toggleForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddStaff = this.handleAddStaff.bind(this);
  }

  toggleForm = () => {
    this.setState({ openform: !this.state.openform });
  };

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log("adf", target);
    this.setState({
        newmember: { ...this.state.newmember, [name]: value }
        
    });
  }

  handleAddStaff(event) {
    alert("Cureent State is:" + JSON.stringify(this.state.newmember));
    event.preventDefault();
    this.props.addNewStaff(this.state.newmember)
  }

  

  validate(
    id,
    name,
    salaryScale,
    annualLeave,
    overTime,
    doB,
    department,
    startDate
  ) {
    const errors = {
      id: "",
      name: "",
      salaryScale: "",
      annualLeave: "",
      overTime: "",
      department: "",
      doB: "",
      startDate: "",
    };
    if (this.state.touched.id ) {
      for (let a = 0; a < STAFFS.length; a++) {
        if (id == STAFFS[a].id) {
          console.log(STAFFS[a].id)
          console.log('id',id)
          errors.id = "Id nhân viên đã tồn tại ";
        }
      }
    }

    if (this.state.touched.name && name.length < 3)
      errors.name = " Name should be >3 charater";

    if (this.state.touched.salaryScale && salaryScale > 8) {
      errors.salaryScale = "salaryScale <=8";
    } else if (this.state.touched.salaryScale && salaryScale < 0)
      errors.salaryScale = "salaryScale >0";

    if (this.state.touched.annualLeave && annualLeave > 12) {
      errors.annualLeave = " only 12days off in a year ";
    }

    if (this.state.touched.overTime && overTime > 10) {
      errors.overTime = " do not work more than 10 in month";
    }

    return errors;
  }

  render() {
    const errors = this.validate(
      this.state.newmember.id,
      this.state.newmember.name,
      this.state.newmember.salaryScale,
      this.state.newmember.annualLeave,
      this.state.newmember.overTime,
      this.state.newmember.doB,
      this.state.newmember.department,
      this.state.newmember.startDate
    );
    return (
      <div>
        <div>
          {" "}
          <Button color="danger" onClick={this.toggleForm}>
            Thêm Nhân Viên Mới{" "}
          </Button>{" "}
        </div>
        <div>
          <Modal isOpen={this.state.openform} toggle={this.toggleForm}>
            <ModalHeader toggle={this.toggleForm}>Thêm Nhân Viên</ModalHeader>
            <ModalBody>
              <Form>
              <FormGroup row>
                  <Label htmlFor="id" md={4}>
                    ID
                  </Label>
                  <Col md={8}>
                    {" "}
                    <Input
                      type="text"
                      id="idmember"
                      name="id"
                      placeholder="ID"
                      onChange={this.handleInputChange}
                      valid={errors.id === ""}
                      invalid={errors.id !== ""}
                      value={this.state.newmember.id}
                      onBlur={this.handleBlur("id")}
                    />
                    <FormFeedback>{errors.id}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="name" md={4}>
                    Tên
                  </Label>
                  <Col md={8}>
                    {" "}
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      onChange={this.handleInputChange}
                      valid={errors.name === ""}
                      invalid={errors.name !== ""}
                      value={this.state.newmember.name}
                      onBlur={this.handleBlur("name")}
                    />
                    <FormFeedback>{errors.name}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="doB" md={4}>
                    Ngày sinh{" "}
                  </Label>
                  <Col md={8}>
                    {" "}
                    <Input
                      type="date"
                      id="doB"
                      name="doB"
                      placeholder="doB"
                      onChange={this.handleInputChange}
                      valid={errors.doB === ""}
                      invalid={errors.doB !== ""}
                      value={this.state.newmember.doB}
                      onBlur={this.handleBlur("doB")}
                    />
                    <FormFeedback>{errors.doB}</FormFeedback>
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
                      onChange={this.handleInputChange}
                      valid={errors.startDate === ""}
                      invalid={errors.startDate !== ""}
                      value={this.state.newmember.startDate}
                      onBlur={this.handleBlur("startDate")}
                    />
                    <FormFeedback>{errors.startDate}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="salaryScale" md={4}>
                    Hệ số lương{" "}
                  </Label>
                  <Col md={8}>
                    <Input
                      type="number"
                      id="salaryScale"
                      name="salaryScale"
                      placeholder="salaryScale"
                      onChange={this.handleInputChange}
                      valid={errors.salaryScale === ""}
                      invalid={errors.salaryScale !== ""}
                      value={this.state.newmember.salaryScale}
                      onBlur={this.handleBlur("salaryScale")}
                    />
                    <FormFeedback>{errors.salaryScale}</FormFeedback>
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Label htmlFor="department" md={4}>
                    Phòng ban{" "}
                  </Label>
                  <Col md={8}>
                    <Input
                      type="select"
                      id="department"
                      name="department"
                      placeholder="department"
                      onChange={this.handleInputChange}
                      valid={errors.department === ""}
                      invalid={errors.department !== ""}
                      value={this.state.newmember.department}
                      onBlur={this.handleBlur("department")}
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                    </Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="annualLeave" md={4}>
                    Ngày nghỉ còn lại
                  </Label>
                  <Col md={8}>
                    <Input
                      type="number"
                      id="annualLeave"
                      name="annualLeave"
                      placeholder="annualLeave"
                      onChange={this.handleInputChange}
                      valid={errors.annualLeave === ""}
                      invalid={errors.annualLeave !== ""}
                      value={this.state.newmember.annualLeave}
                      onBlur={this.handleBlur("annualLeave")}
                    />
                    <FormFeedback>{errors.annualLeave}</FormFeedback>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor="overTime" md={4}>
                    Ngày làm thêm{" "}
                  </Label>
                  <Col md={8}>
                    <Input
                      type="number"
                      id="overTime"
                      name="overTime"
                      placeholder="overTime"
                      onChange={this.handleInputChange}
                      valid={errors.overTime === ""}
                      invalid={errors.overTime !== ""}
                      value={this.state.newmember.overTime}
                      onBlur={this.handleBlur("overTime")}
                    />
                    <FormFeedback>{errors.overTime}</FormFeedback>
                  </Col>
                </FormGroup>
              </Form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={this.handleAddStaff}>
                Add{" "}
              </Button>{" "}
              <Button onClick={this.toggleForm}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}
export default NewStaff;
