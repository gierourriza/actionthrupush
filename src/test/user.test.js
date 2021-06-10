const chai                  = require('chai');
const expect                = chai.expect;
const should                = require('chai').should();
const UserModel             = require('../models/user.model');

describe("User Model", function(){
    it("Given a valid input, it should return true if we successfully create a new user", async function(){
        let userModel   = new UserModel();
        let params      = {"name": "Rogimer Urriza", "email": "rurriza@village88.com", "password": "password123"};
        let result = await userModel.createUser(params);
        expect(result).to.equal(true);
    });

    

    
})