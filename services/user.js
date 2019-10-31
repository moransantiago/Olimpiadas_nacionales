const bcrypt = require('bcryptjs');

const mysql = require('../lib/mysql');


class UserService{
    constructor(){
        this.table = 'usuarios';
    }

    async getUsers(){
        const user = await mysql.query(`SELECT id_usuario, nombre_usuario, apellido_usuario, contraseña, email_usuario, telefono_usuario, nombre_tipo FROM ${this.table}, tipo_usuarios WHERE tipo_usuario=id_tipo`);
        return user || {};
    }

    async getUserById({ userId }){
        const [user] = await mysql.query(`SELECT id_usuario, nombre_usuario, apellido_usuario, contraseña, email_usuario, telefono_usuario, nombre_tipo FROM ${this.table}, tipo_usuarios WHERE tipo_usuario=id_tipo AND id_usuario=${userId}`);
        return user || {};
    }

    async getUserByEmail({ email }){
        const user = await mysql.query(`SELECT * FROM ${this.table} WHERE email_usuario=${email}`);
        return user || {};
    }

    async createUser({ user }){
        const { nombre_usuario, apellido_usuario, contraseña, email_usuario, telefono_usuario, tipo_usuario } = user;
        const hashedPassword = await bcrypt.hash(contraseña, 10);
        await mysql.query(`INSERT INTO usuarios (nombre_usuario, apellido_usuario, contraseña, email_usuario, telefono_usuario, tipo_usuario) VALUE ('${nombre_usuario}', '${apellido_usuario}', '${hashedPassword}', '${email_usuario}', '${telefono_usuario}', ${tipo_usuario})`);
    }

    async updateUser({ userId, user }){
        const { nombre_usuario, apellido_usuario, email_usuario, telefono_usuario, tipo_usuario } = user;
        const updatedUser = await mysql.query(`UPDATE ${this.table} SET nombre_usuario="${nombre_usuario}", apellido_usuario="${apellido_usuario}", email_usuario="${email_usuario}", telefono_usuario="${telefono_usuario}", tipo_usuario="${tipo_usuario}" WHERE id_usuario=${userId}`);
        return updatedUser;
    }

    async deleteUser({ userId }){
        await mysql.query(`DELETE FROM ${this.table} WHERE id_usuario=${userId}`);
    }
}

module.exports = new UserService();