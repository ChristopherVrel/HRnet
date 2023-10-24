import "./AddEmployee.css";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from "react";
import states from "../../data/states";
import { useSelector } from "react-redux";
import store from "../../features/store";
import { addEmployee } from "../../features/employee/employeeActions";
import departments from "../../data/departments";
import DatePicker from "../../components/DatePicker/DatePicker";
import Modal from "../../components/Modal/Modal";
import Select from "../../components/Select/Select";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { TiArrowBack } from "react-icons/ti";
import getFormatedDate from "../../utils/getFormatedDate";

const AddEmployee = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState(getFormatedDate(new Date()));
    const [startDate, setStartDate] = useState(getFormatedDate(new Date()));
    const [state, setState] = useState(states[0].name);
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [department, setDepartment] = useState(departments[0]);
    const navigate = useNavigate();
    const employees = useSelector((state) => state.employees.list);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        console.log(employees);
    }, [employees]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEmployee = {
            first_name: firstName,
            last_name: lastName,
            start_date: startDate,
            department: department,
            birthdate: dateOfBirth,
            street: street,
            city: city,
            state: state,
            zipcode: (zipcode) ? parseInt(zipcode) : ""
        };

        store.dispatch(addEmployee(employees, newEmployee));

        setIsModalOpen(true);
    }

    return (
        <div className="main-container new-employee">
            <Nav>
                <h1 className="page-title">New employee</h1>
            </Nav>

            <div className="main-content">
                <div className="new-employee-nav">
                    <button className="ripple" onClick={() => navigate("/employees")}>
                        <TiArrowBack />
                        Employees
                    </button>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div style={{ flex: "1 1 17rem" }} className="input-container">
                            <label htmlFor="firstName">First Name</label>
                            <input autoComplete="rand" id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>

                        <div style={{ flex: "1 1 17rem" }} className="input-container">
                            <label htmlFor="lastName">Last Name</label>
                            <input autoComplete="rand" id="lastName" name="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>

                        <DatePicker
                            style={{ flex: "1 1 17rem" }}
                            className={["input-container"]}
                            label={"Date of Birth"}
                            id={"dateOfBirth"}
                            autoComplete={"rand"}
                            value={dateOfBirth}
                            onChange={setDateOfBirth}
                        />

                        <div  style={{ flex: "100%" }} className="input-container">
                            <label htmlFor="street">Street</label>
                            <input autoComplete="rand" id="street" name="street" type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
                        </div>

                        <div style={{ flex: "2 1 21rem" }} className="input-container">
                            <label htmlFor="city">City</label>
                            <input autoComplete="rand" id="city" name="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>

                        <div style={{ flex: "1 1 15rem" }} className="input-container">
                            <label htmlFor="zipcode">Zip Code</label>
                            <input autoComplete="rand" id="zipcode" name="zipcode" type="number" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                        </div>

                        <Select
                            style={{ flex: "1 1 15rem" }}
                            className="input-container"
                            label={"State"}
                            id={"state"}
                            value={state}
                            setValue={setState}
                            items={states}
                            nested={"name"}
                        />

                        <DatePicker
                            style={{ flex: "1 1 15rem" }}
                            className={["input-container"]}
                            label={"Start Date"}
                            id={"startDate"}
                            autoComplete={"rand"}
                            value={startDate}
                            onChange={setStartDate}
                        />

                        <Select 
                            style={{ flex: "1 1 15rem" }} 
                            className="input-container"
                            label={"Department"}
                            id={"department"}
                            value={department}
                            setValue={setDepartment}
                            items={departments}
                        />

                        <div className="form-button">
                            <button className="ripple">Create !</button>
                        </div>
                    </form>
                </div>
            </div>

            <Modal
                isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}
                className={["styled-modal"]} hasHeader={false} backgroundClose={true}
                closeBtnText={"Ok"} closeBtnClass={["valid-btn"]} >
                    <BsFillCheckCircleFill />
                    <h2>Success!</h2>
                    <p>Employee successfully created.</p>
            </Modal>
        </div>
    );
}

export default AddEmployee;