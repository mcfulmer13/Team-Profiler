const Manager = require("../lib/Manager");

describe("manager", () => {const test = new Manager('Mac', '13', 'mac@mail.com', 'office');
    
    it("should return: name", () => {expect(test.getName()).toEqual('Mac');})
    it("should return: employee id", () => {expect(test.getId()).toEqual('13');})
    it("should return: email", () => {expect(test.getEmail()).toEqual('mac@mail.com');})
    it("should return: github", () => {expect(test.getOfficeNumber()).toEqual('office');})
});