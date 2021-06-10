const Mysql                 = require('mysql');
const executeQuery  		= require('../config/database.js');

class UserModel {

	async getUsers(params) {
		let result = true;
		try{
			let get_user_query = Mysql.format(`SELECT * FROM users WHERE email = ?;`, [params.email]);
			let get_user_result = await executeQuery(get_user_query);
			
			if(get_user_result == ""){
				result = false;
			}
		}catch(err){
			console.log(err);
		};
		return result;
	}

	async createUser(params){
		let result = false;
		try{
			let create_user_query  = Mysql.format(`INSERT INTO users(name,email,password) VALUES(?,?,?);`, [params.name, params.email, params.password]);
			let create_user_result = await executeQuery(create_user_query);
			if(create_user_result){
				result = true;
			}
		}catch(err){
			console.log(err);
		};
		return result;    
	}

	async deleteUser(params){
		let result = false;
		try{
			let delete_user_query = Mysql.format(`DELETE FROM users WHERE email=?;`, [params.email]);
			let delete_user_result = await executeQuery(delete_user_query);
			if(delete_user_result){
				result = true;
				console.log("Successfully deleted");
			}
		}catch(err){
			console.log(err);
		}
		return result;

	}
}

module.exports = UserModel;