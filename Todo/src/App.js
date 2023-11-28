import { useState } from "react";
import userList from "./data.js";
import UserTable from "./Table/UserTable";
import AddUserForm from "./forms/AddUserForms.js";
import EditUserForm from "./forms/EditUserForm.js";
function App() {
  const [users, setUsers] = useState(userList);
  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = (id) => setUsers(users.filter((user) => user.id !== id));
  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "", description: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);
  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };
  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
  };
  return (
    <div className="container">
      <h1>TODO APP</h1>
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h4>Edit user</h4>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h4>Add user</h4>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h4>View users</h4>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
