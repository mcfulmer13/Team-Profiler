const Employee = require("../lib/Employee");

describe("employee", () => { const test = new Employee('Mac', '13', 'mac@mail.com'); 
   
it("should return: name", () => {expect(test.getName()).toEqual('Mac');})
it("should return: employee id", () => {expect(test.getId()).toEqual('13');})
it("should return: email", () => {expect(test.getEmail()).toEqual('mac@mail.com');})

});