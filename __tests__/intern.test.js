const Intern = require("../lib/Intern");

describe("intern", () => { const test = new Intern('Mac', '13', 'mac@mail.com', 'school');
    
    it("should return: name", () => {expect(test.getName()).toEqual('Mac');})
    it("should return: employee id", () => {expect(test.getId()).toEqual('13');})
    it("should return: email", () => { expect(test.getEmail()).toEqual('mac@mail.com');})
    it("should return: github", () => {expect(test.getSchool()).toEqual('school');})
});