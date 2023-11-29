import React from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate()
  return (
    <div className="container">
      <div className="mt-5">
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-success" navigate> <Link to="/add" >Add +</Link> </button>
        </div>
        <table className="table table-striped table-dark">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <button className="btn btn-success">
                  <MdEdit />
                </button>

                <button className="btn btn-danger ms-2">
                  <MdDelete />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
