const router = require('express').Router();
// const productController = require('./controller');
const Product = require('./model');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const upload = multer({ dest: 'uploads' });

router.get('/product', async (req, res) => {
    try {
        await Product.sync();
        const result = await Product.findAll();
        res.send(result);
    } catch (e) {
        res.send(e);
    }
});
router.post('/product', upload.single('image'), async (req, res) => {
    const { users_id, name, price, stock, status } = req.body;
    const image = req.file;
    if (image) {
        const target = path.join(__dirname, '../../uploads', image.originalname);
        fs.renameSync(image.path, target)
        try {
            await Product.sync();
            const result = await Product.create({ users_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image.originalname}` });
            res.send(result);
        } catch (e) {
            res.send(e);
        }
    }
});

module.exports = router;