import { Routes, Route } from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";

function App() {
  return (
    <div className="w-full h-full bg-gray-100 justify-center flex">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/add-user" element={<AddUserForm />} />
      </Routes>
    </div>
  );
}

export default App;
