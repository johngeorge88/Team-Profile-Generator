const Engineer = require("../lib/Engineer.js");

test("creates a new engineer", () =>{
    const engineer = new Engineer("John", "13", "@example.com", "@github.com");

    expect(engineer.getName()).toEqual("John");
    expect(engineer.getId()).toEqual("13");
    expect(engineer.getEmail()).toEqual("@example.com");
    expect(engineer.getGithub()).toEqual("@github.com");
    expect(engineer.getRole()).toEqual(expect.any(String));

})