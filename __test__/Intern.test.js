const Intern = require("../lib/Intern.js");

test("creates a new intern", () =>{
    const intern = new Intern("John", "13", "@example.com", "UCF");

    expect(intern.getName()).toEqual("John");
    expect(intern.getId()).toEqual("13");
    expect(intern.getEmail()).toEqual("@example.com");
    expect(intern.getSchool()).toEqual("UCF");
    expect(intern.getRole()).toEqual(expect.any(String));

})