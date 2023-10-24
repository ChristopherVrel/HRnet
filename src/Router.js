import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Employee from "./pages/Employee/Employee";
import AddEmployee from "./pages/AddEmployee/AddEmployee";

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path={"/employees" } element={<Employee />} />
            <Route path={"/employees/newemployee" } element={<AddEmployee />} /> 
        </Routes>
    )
}
  
export default Router;