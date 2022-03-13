import "./App.css";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

const data = [
  {
    fName: "John",
    lName: "Cena",
    email: "cena321@gmail.com",
  },
];

function App() {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLasttName] = useState("");
  const [emailId, setEmailId] = useState("");

  const [viewFirstName, setViewFirstName] = useState("");
  const [viewLastName, setViewLastName] = useState("");
  const [viewEmail, setViewEmail] = useState("");

  const [employees, setEmployees] = useState(data);

  const [update, setUpdate] = useState(0);

  const onAddHandler = () => {
    if (!firstName || !lasttName || !emailId) {
      alert("All inputs are required!");
      return;
    }

    let employee = {
      fName: firstName,
      lName: lasttName,
      email: emailId,
    };

    setEmployees([...employees, employee]);

    setFirstName("");
    setLasttName("");
    setEmailId("");
  };

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

  const onUpdateHandler = (item) => {
    setFirstName(item.fName);
    setLasttName(item.lName);
    setUpdate(item.email);
    setEmailId(item.email);
  };

  const deleteHandler = (Email) => {
    let newEmployee = employees.filter((item) => item.email !== Email);
    setEmployees(newEmployee);
  };

  const onCtaHandler = () => {
    let employee = {
      fName: firstName,
      lName: lasttName,
      email: emailId,
    };

    let newEmployee = employees.map((item) => {
      if (item.email === update) {
        return employee;
      } else {
        return item;
      }
    });

    setEmployees(newEmployee);
    setFirstName("");
    setLasttName("");
    setEmailId("");
  };

  return (
    <div className="App mt-5">
      <h2 className="text-center">Employee List</h2>

      <div>
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Employees
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Welcome To TheErrors
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="mt-2">First Name</label>
                  <input
                    type="text"
                    className=" w-100 mt-2"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="mt-2">Last Name</label>
                  <input
                    type="text"
                    className=" w-100 mt-2"
                    value={lasttName}
                    onChange={(e) => setLasttName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="mt-2">Email Id</label>
                  <input
                    type="email"
                    className=" w-100 mt-2"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={onAddHandler}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                  {/* <Button Action="Update" cname="btn btn-success"></Button> */}
                  <div>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                      onClick={() => onUpdateHandler(item)}
                    >
                      Update
                    </button>
                    <div
                      className="modal fade"
                      id="updateModal"
                      tabIndex={-1}
                      aria-labelledby="updateModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="updateModalLabel">
                              Update Details
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            />
                          </div>
                          <div className="modal-body">
                            <div className="mb-3">
                              <label className="mt-2">First Name</label>
                              <input
                                type="text"
                                className=" w-100 mt-2"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                              />
                            </div>
                            <div className="mb-3">
                              <label className="mt-2">Last Name</label>
                              <input
                                type="text"
                                className=" w-100 mt-2"
                                value={lasttName}
                                onChange={(e) => setLasttName(e.target.value)}
                              />
                            </div>
                            <div className="mb-3">
                              <label className="mt-2">Email Id</label>
                              <input
                                type="email"
                                className=" w-100 mt-2"
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-success"
                              data-bs-dismiss="modal"
                              onClick={onCtaHandler}
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    Action="Delete"
                    cname="btn btn-danger"
                    onClick={() => deleteHandler(item.email)}
                  ></Button>

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

export default App;
