class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `Emplyee name is ${this.name}`;
    }

    getId() {
        return `Emplyee's id is: ${this.id}`;
    }

    getEmail() {
        return `Emplyee's email is: ${this.email}`;
    }

    getRole() {
        return "Employee";
    }

}

module.exports = Employee;