const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor(name= '') {
        this.school = school;
    }
    getSchool(){
        return `Intern's school is: ${this.school}`;
    }
    getRole() {
        return Intern;
    }
}