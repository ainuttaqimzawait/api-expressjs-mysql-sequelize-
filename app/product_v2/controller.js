const sequelize = require("../../config/sequelize");

const index = (req, res) => {
    const { search } = req.query;
    let exec = {};
    if (search) {
        exec = {
            sql: 'SELECT * FROM products WHERE name LIKE ?',
            values: [`%${search}%`]
        }
    } else {
        exec = {
            sql: 'SELECT * FROM products'
        }
    }
    sequelize.query(exec, _response(res));
};

module.exports = {
    index
};