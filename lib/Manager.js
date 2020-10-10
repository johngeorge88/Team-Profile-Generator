const Employee = require('../lib/Employee')

class Manager extends Employee {
    constructor(name= '') {
        this.officeNumber = officeNumber;
    }
    getRole() {
        return Manager;
    }
}