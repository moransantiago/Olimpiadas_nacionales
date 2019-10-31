const bcrypt = require('bcryptjs');

const mysql = require('../lib/mysql');


class UserService{
    constructor(){
        this.table = 'users';
    }

    async getUsers(){
        const user = await mysql.query(`SELECT * FROM ${this.table}`);
        return user || {};
    }

    async getUserById({ userId }){
        const user = await mysql.query(`SELECT * FROM ${this.table} WHERE id_usuario=${userId}`);
        return user || {};
    }

    async getUserByEmail({ email }){
        const user = await mysql.query(`SELECT * FROM ${this.table} WHERE email_usuario=${email}`);
        return user || {};
    }

    async createUser({ user }){
        
    }

    async updateUser({ userId, user }){
        const updatedUser = await mysql.query(`INSERT INTO ${this.table}() VALUES()`);
        return updatedUser;
    }

    async deleteUser({ userId }){
        const deletedProduct = await this.mongodb.delete(this.collection, { _id: ObjectId(userId) });
        return deletedProduct;
    }
}

module.exports = new UserService();