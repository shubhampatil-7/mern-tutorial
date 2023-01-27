import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setlistOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("https://mern-tutorial.onrender.com/getUsers").then((response) => {
      setlistOfUsers(response.data);
    });
  }, []);

  const createUser = () => {
    Axios.post("https://mern-tutorial.onrender.com/createUser", {
      name,
      age,
      username,
    }).then((response) => {
      setlistOfUsers([...listOfUsers, { name, age, username }]);
    });
  };
  return (
    <div className="App">
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="age.."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="username.."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}>Create User</button>
      </div>
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <h1>Username: {user.username}</h1>
              <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
