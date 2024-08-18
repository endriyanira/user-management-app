import { Routes, Route } from "react-router-dom";
import AddUserForm from "./components/AddUserForm";
import UserTable from "./components/UserTable";
import EditUserForm from "./components/EditUserForm";
import UserDetails from "./components/UserDetails";
import ItemList from "./components/ItemList";
import SignInForm from "./components/auth/SignInForm";

function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100 justify-center flex">
      <Routes>
        <Route path="/" element={<UserTable />} />
        <Route path="/add-user" element={<AddUserForm />} />
        <Route path="/edit-user" element={<EditUserForm />} />
        <Route path="/details" element={<UserDetails />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </div>
  );
}

export default App;
