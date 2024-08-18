import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./user.css";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // here we are fetching the api  (getting all the data from database )

    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/getall");
      setUsers(response.data);
    };
    fetchData();
  },[]);

  return (
    <div className="userTable">
      <Link to={"/add"} className="addButton">
        Add User
      </Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No</th>
            <th> name</th>
            <th> Email</th>
            <th> Action </th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, index) =>{
            return (
              <tr>
                <td>1.</td>
                <td>jhone Doe</td>
                <td>jhoneDoe@gmail.com </td>
                <td className=" actionButton">
                  <button>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                  <Link to={"/edit"}>
                    <i className="fa-solid fa-pen-to-square"></i>{" "}
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default User;
