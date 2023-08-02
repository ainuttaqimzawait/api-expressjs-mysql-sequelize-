const sequelize = require("../../config/sequelize");
const Product = require('./model');

const index = (async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll();
        res.send(result);
    } catch (e) {
        res.send(e);
    }
})();

// const store = 

module.exports = {
    index
};