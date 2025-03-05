import { useEffect, useState } from "react";
import "./App.css";
import {getUser, getUsers, createUser, updateUser, deleteUser } from "./api.js"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]);

  //Pages
  //Landing Page
  //Home Page (filtered by date)
  //Profile Page
  //Login
  //New Rating
  //About
  //Contact

  useEffect(() => {
    async function loadAllUsers () {
      let data = await getUsers()
      if (data) {
        setUsers(data)
      }
    }
    loadAllUsers()
  }, [])

  function createNewUser() {
    let userObject ={
      userName: "CCCC",
      email: "CCC@test.com",
      password:"pass12345C"
    }
    createUser(userObject)
  }

  return (
    <div>
      {JSON.stringify(users)}
      <br/>
      <button onClick={createNewUser}>
        create user
      </button>
      {/* <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (<tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>)
          })}
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
