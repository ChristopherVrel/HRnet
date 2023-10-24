const addEmployee = (employees, employee) => {
    return (dispatch) => { 
        dispatch({ type: "employees/addEmployee",
            payload: [...employees, employee]
        });
    }
}

export {
    addEmployee
}