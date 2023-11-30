import React, { useEffect, useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import userDataServices from "./userServices";
import Loader from "../Component/Loader";
import { db } from "../firebase-config";
import { toast } from "react-toastify";



function Home() {
  const navigate = useNavigate();
  const [user, setuser] = useState([]);
  const [singleuser, setuseruser] = useState([]);


  useEffect(() => {
    getuser();
  }, []);
  const getuser = async () => {
    const data = await userDataServices.getAllusers();
    console.log(data);
    setuser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const deleteHandler = async (id) => {
    await userDataServices.deleteuser(id);
    getuser();
    toast.success("Data  Deleted Successfully!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const editHandler = async (id) => {
    const data = await userDataServices.getuser(id);

    // console.log(data._document.data.value.mapValue.fields);
    console.log(data._document);
  };

  return (
    <>
      {user.length <= 0 ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="mt-5">
            <div className="d-flex justify-content-end mb-3">
              <button className="btn btn-success" navigate>
                {" "}
                <Link to="/add">Add +</Link>{" "}
              </button>
            </div>
            {user.length < 0 ? (
              <Loader />
            ) : (
              <>
                <button
                  className="btn btn-info mb-4 text-light"
                  onClick={() => {
                    getuser();
                  }}
                >
                  Refresh
                </button>
                <table className="table table-striped table-dark">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.length > 0 ? (
                      user.map((user, index) => {
                        return (
                          <tr key={user.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>
                              <button
                                className="btn btn-success"
                                
                              >
                              <Link to={`/edit/${user.id}`}> <MdEdit /></Link>
                              </button>

                              <button
                                className="btn btn-danger ms-2"
                                onClick={(e) => deleteHandler(user.id)}
                              >
                                <MdDelete />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <span>No data found</span>
                    )}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
