const { format } = require("prettier")

module.exports = {
    dialect: 'postgres',
    DATABASE_URL:'postgresql://postgres:RUZEym0YpgCJdO9OuQRg@containers-us-west-47.railway.app:7325/railway',    
    
    define:{
        timespamps: true,
        underscored: true,
        underscoredAll: true,
        }
}

