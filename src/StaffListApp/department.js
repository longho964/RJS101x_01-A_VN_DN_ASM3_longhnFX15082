import React, { Component } from "react";
import { Media } from "reactstrap";
import { fetchDepartment } from "../redux/actinonCreator";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    departments: state.departments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchDepart: () => dispatch(fetchDepartment()),
});

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = { departments: props.departments, choosenDepart: null };
  }

  showDepart(depart) {
    this.setState({ choosenDepart: depart });
  }

  componentDidMount() {
    this.props.fetchDepart();
  }

  render() {
    console.log("try");
    const staffDepartment = this.props.departments.departments.map((depart) => {
      return (
        <div key={depart.id} className="department">
          <Media tag="li">
            {" "}
            <Link exact to={`/phongban/${depart.id} `}>
              <Media body className="ml-5">
                <h1 heading>{depart.name}</h1>
                <Media heading>Số lượng nhân viên:{depart.numberOfStaff}</Media>
              </Media>{" "}
            </Link>
          </Media>
        </div>
      );
    });
    return (
      <div>
        <Media list className="row-department">
          {staffDepartment}
        </Media>
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Departments);
