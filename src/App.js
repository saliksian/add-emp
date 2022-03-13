import "./App.css";
import Button from "./components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Table from "./components/Table";

const data = [
  {
    fName: "Muhammad",
    lName: "Salik",
    email: "abc123@gmail.com",
  },
];

function App() {
  const [firstName, setFirstName] = useState("");
  const [lasttName, setLasttName] = useState("");
  const [emailId, setEmailId] = useState("");

  const [employees, setEmployees] = useState(data);

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
      <Table data={employees}></Table>
    </div>
  );
}

export default App;
