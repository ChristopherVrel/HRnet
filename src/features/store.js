import { configureStore } from "@reduxjs/toolkit";
import employeesSlice from "./employee/employeesSlice";

const store = configureStore({
    reducer: {
        employees: employeesSlice.reducer
    }
});

export default store;