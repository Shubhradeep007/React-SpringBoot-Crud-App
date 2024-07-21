import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default function HomePage() {

  const [users, setUsers] = useState([]);
  // useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await Axios.get("http://localhost:8080/findAll");
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
    if(window.confirm("You Want to delete this data?")){ 
    await axios.delete(`http://localhost:8080/findAll/${id}`);
    loadUser();
    }
  }

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Serial No</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr >
                  <th key={index} >{index + 1}</th>
                  <td>{user.userName}</td>
                  <td>{user.userEmail}</td>
                  <td>{user.userPhoneNo}</td>
                  <td> <Link className='btn btn-primary' to={`/viewuser/${user.id}`}>View</Link>
                  &nbsp;  &nbsp;
                  <Link className='btn  btn-outline-primary' to={`/edituser/${user.id}`}>Edit</Link>
                  &nbsp;  &nbsp;
                  <Link className='btn btn-danger' onClick={() => deleteUser(user.id)} >Delete</Link> </td>
                </tr>
              ))

            }

          </tbody>
        </table>
      </div>
    </div>

  )
}
