import mysql from 'mysql2'


const connection = mysql.createPool({
    host : "localhost",
    port : 3306,
    password: "root",
    user : "root",
    database :"Quitea"

}).promise()

export default connection;