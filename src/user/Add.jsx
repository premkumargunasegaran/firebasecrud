import React, { useState } from "react";
import { db } from "../firebase-config";
import userDataService from "./userServices";
import { toast } from "react-toastify";
function Add() {
  const [user, setuser] = useState({
    firstName: "",
    lastName: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    setuser((user) => ({ ...user, [name]: value }));
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (user.firstName == "" || user.lastName == "") {
      toast.error("Please Fill Correctly !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      try {
        await userDataService.addusers(user);
        toast.success("User  added Successfully  !", {
          position: toast.POSITION.TOP_RIGHT,
        });
        setuser({
          firstName: "",
          lastName: "",
        });
      } catch (error) {}
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handlechange}
            name="firstName"
            value={user.firstName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handlechange}
            name="lastName"
            value={user.lastName}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
