import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {  Link, useParams } from 'react-router-dom';

export default function ViewUser() {

  const [user, getUser] = useState({
    userName: "",
    userEmail: "",
    userPhoneNo: ""
  });

  
  const {id} = useParams();
  
  useEffect(() => {
    loadUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/findAll/${id}`)
    getUser(result.data)
  }




  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">View Details</h2>
          <div className="card">
            <div className="card-header">
              Details of User Id: {user.id}
              <ul className='list-group list-group-flush'>
               
                <li className='list-group-item'>
                  <b>Name: </b> {user.userName}
                </li>
                <li className='list-group-item'>
                  <b>Email: </b> {user.userEmail}
                </li>
                <li className='list-group-item'>
                  <b>Phone No: </b> {user.userPhoneNo}
                </li>
              </ul>
            </div>
          </div>
          <center><Link className='btn btn-primary my-2 ' to={"/"}>Back To Home</Link></center>
        </div>
      </div>
    </div>



  );
}

