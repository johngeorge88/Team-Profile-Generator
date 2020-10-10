const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return Manager;
    }

    getOfficeNumber() {
        return `Manager's office number is: ${this.officeNumber}`;
    }
}

module.exports = Manager;