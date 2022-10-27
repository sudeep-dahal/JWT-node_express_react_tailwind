import { Sequelize } from "sequelize";


const db=new Sequelize('JWT_node_react','root','Root12345',{
    host:"localhost",
    dialect:"mysql"
})

export default db;