const Employee = require("../lib/Employee.js");
const employee = new Employee("Johnnie", "13", "@examle");

test("creates an Employee", () => {
    const employee = new Employee("Johnnie", "13", "@exapmle.com");

    expect(employee.getName()).toEqual("Johnnie");
    expect(employee.getId()).toEqual("13");
    expect(employee.getEmail()).toEqual("@exapmle.com");
    expect(employee.getRole()).toEqual(expect.any(String));
});