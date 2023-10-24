import "./Employee.css";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { useSelector } from "react-redux";
import { useState } from "react";
import Button from "../../components/Button/Button";
import { Table, Search } from "new-react-datatables";
import { mockedColumns } from "../../data/employees";
import { BsSearch } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { TbSortAscending, TbSortDescending } from "react-icons/tb";

const Employee = () => {
    const navigate = useNavigate();
    const employeesOrigin = useSelector((state) => state.employees.list);
    const [employees, setEmployees] = useState(employeesOrigin);

    return (
        <div className="main-container">
            <Nav>
                <h1 className="page-title">Employees</h1>
                <Search
                    placeholder={"Search employee..."}
                    btnContent={<BsSearch />}
                    data={employees}
                    setData={setEmployees} 
                    originData={employeesOrigin} />
            </Nav>

            <div className="main-content">
                <div>
                    <Button className={["simple-button"]} action={() => navigate("/employees/newemployee")} ariaLabel="Add new employee" text="Add new employee"/>
                </div>
                {
                    (employees) &&
                    <Table
                        userIcon={{ icon: <FaUserCircle />, anchor: "first_name", before: true }}
                        filterIcons={{ up: <TbSortAscending />, down: <TbSortDescending /> }}
                        highlightedCol={{ id: "department", color: "var(--purple)"}}
                        columns={mockedColumns}
                        data={employees} />
                }
            </div>
        </div>
    );
}

export default Employee;