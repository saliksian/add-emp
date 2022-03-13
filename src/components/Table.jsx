import React from "react";
import Button from "./Button";
import { useState } from "react";

export default function Table(props) {
  const [viewFirstName, setViewFirstName] = useState("");
  const [viewLastName, setViewLastName] = useState("");
  const [viewEmail, setViewEmail] = useState("");

  const employees = props.data;
  // const [employees,setEmployees] = useState(props.data)

  

  const viewHandler = (Email) => {
    employees.map((item) => {
      if (item.email === Email) {
        setViewFirstName(`${item.fName}`);
        setViewLastName(`${item.lName}`);
        setViewEmail(`${item.email}`);
      } else {
        return;
      }
    });
  };


  const deleteHandler = (Email) => {
    let newStudents = employees.filter((item)=>item.email!==Email);
    // employees = newStudents
    // setEmployees(newStudents);


    
  };








  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Employee First Name</th>
            <th scope="col">Employee Last Name</th>
            <th scope="col">Employee Email Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.fName}</td>
                <td>{item.lName}</td>
                <td>{item.email}</td>
                <td className="d-flex justify-content-between">
                  <Button Action="Update" cname="btn btn-success"></Button>
                  <Button Action="Delete" cname="btn btn-danger" onClick={()=>deleteHandler(item.email)}></Button>

                  <div>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#viewModal"
                      onClick={() => viewHandler(item.email)}
                    >
                      View
                    </button>
                    <div
                      className="modal fade"
                      id="viewModal"
                      tabIndex={-1}
                      aria-labelledby="viewModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="viewModalLabel">
                              Employee Details
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <p>First Name: {viewFirstName} </p>
                            <p>Last Name: {viewLastName} </p>
                            <p>Email: {viewEmail} </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
