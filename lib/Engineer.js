const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor(name= '') {
        this.github = github;
    }
    getGithub(){
        return `Engineers github is: ${this.github}`;
    }
    getRole() {
        return Engineer;
    }
}