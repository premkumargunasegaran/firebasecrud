import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userDataServices from "./userServices";
function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [singleUser, setsingleUser] = useState(null)
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
  };

  useEffect(() => {
    if (id) {
        getsingleUserData(id); 
    }
  }, [id]);

//   console.log(id);
  const getsingleUserData = async (id) => {
    const data = await userDataServices.getuser(id);

    // console.log(data._document.data.value.mapValue.fields);
    setsingleUser(data._document.data.value.mapValue.fields)
    console.log(singleUser);
    
  };

//   getsingleUserData(id);

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
            value={user.firstName && user.firstName}
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
            value={user.lastName && user.lastName}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Edit;
