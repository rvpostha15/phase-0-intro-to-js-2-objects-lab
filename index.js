// Write your solution in this file!

var employee = {
    name: "Sam",
    streetAddress: "In your ass",
};

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

function updateEmployeeWithKeyAndValue(obj, key, value) {
    var newEmployee = {...employee};
    newEmployee[key] = '11 Broadway';
    return newEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = `12 Broadway`;
    return employee;
};

function deleteFromEmployeeByKey(obj, key, value) {
    var newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete employee.name;
    return employee;
};



