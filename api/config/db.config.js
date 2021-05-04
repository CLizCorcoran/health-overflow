module.exports = {
    HOST: "localhost",
    USER: "christie",
    PASSWORD: "DB4thewin!",
    DB: 'healthdb',
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}