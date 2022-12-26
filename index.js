// Write your solution in this file!
let employee = {
    name: 'nameValue',
    streetAddress: 'addressValue',
}

updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value
    return employee
}

deleteFromEmployeeByKey = (employee, key) => {
    let newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
}

destructivelyDeleteFromEmployeeByKey= (employee, key) => {
    delete employee[key]
    return employee
}