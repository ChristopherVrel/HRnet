import { createSlice } from "@reduxjs/toolkit";
import { mockedEmployees } from "../../data/employees";

const employeeSlice = createSlice({
    name: "employees",
    initialState: { list: mockedEmployees },
    reducers: {
        addEmployee: (state, action) => {
            return {
                ...state,
                    list: action.payload
            }
        }
    }
});

export default employeeSlice;
export const { addEmployee } = employeeSlice.actions;