import React from "react";

class Employee extends React.Component {
  constructor() {
    super();

    const emp1 = {
      empId: 100,
      empName: "Jack",
      age: 30,
      salary: 50000,
      image:
        "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg"
    };

    const emp2 = {
      empId: 101,
      empName: "Jane",
      age: 24,
      salary: 40000,
      image: "data:image/jpeg;base64,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"
        
    };

    this.empArr = [emp1, emp2];
  }

  createCard = (emp) => {
    var note = null;
    if (emp.age < 25) {
      note = <span className="text-info"> - Fresher</span>;
    }

    return (
      <div key={emp.empId} className="card" style={{ width: 200 }}>
        <img
          className="card-img-top"
          src={emp.image}
          height="200"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">{emp.empName}</h5>
          <p className="card-text">
            <span>Id: {emp.empId}</span>
            <br />
            <span>Age: {emp.age}</span> {note}
            <br />
            <span>Salary: {emp.salary}</span>
            <br />
          </p>
          <button type="button" className="btn btn-primary">
            Edit Details
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3 className="text-center text-primary">Employee Details</h3>
        {this.empArr.map(emp => {
          return this.createCard(emp);
        })}
      </div>
    );
  }
}

export default Employee;
