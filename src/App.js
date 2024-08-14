import { Routes, Route } from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";
import EditUserForm from "./components/EditUserForm";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 justify-center flex">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/edit-user" element={<EditUserForm />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
