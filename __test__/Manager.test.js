const Manager = require("../lib/Manager.js");

test("creates a new manager", () =>{
    const manager = new Manager("John", "13", "@example.com", "1388");

    expect(manager.getName()).toEqual("John");
    expect(manager.getId()).toEqual("13");
    expect(manager.getEmail()).toEqual("@example.com");
    expect(manager.getOffice()).toEqual("1388");
    expect(manager.getRole()).toEqual(expect.any(String));

})