const Engineer = require("../lib/Engineer");

describe("engineer", () => {const test = new Engineer('Mac', '13', 'mac@mail.com', 'github');
    
    it("should return: name", () => {expect(test.getName()).toEqual('Mac');})
    it("should return: employee id", () => {expect(test.getId()).toEqual('13');})
    it("should return: email", () => {expect(test.getEmail()).toEqual('mac@mail.com');})
    it("should return: github", () => {expect(test.getGithub()).toEqual('github');})
});