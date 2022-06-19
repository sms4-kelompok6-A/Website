import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreateDestination from "./pages/destinations/CreateDestination";
import Destination from "./pages/destinations/Destination";
import UpdateDestination from "./pages/destinations/UpdateDestination";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/destinations" element={<Destination />} />
        <Route path="/destinations/create" element={<CreateDestination />} />
        <Route
          path="/destinations/update/:id"
          element={<UpdateDestination />}
        />
      </Routes>
    </>
  );
}

export default App;
