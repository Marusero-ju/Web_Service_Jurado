const multer = require('multer');
const path = require('path')
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'storage/images'),
    filename: (req, file, cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase() );
    }
});

const upload = multer({
    storage,
    dest: path.join(__dirname, 'storage/images')
});

module.exports = upload;