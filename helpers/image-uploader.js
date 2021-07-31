const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cd(null, './upload');
    },
    //nơi chứa
    filename: function(req, file, cb){
        cd(null,new Date().getTime()+path.extname(file.originalname));
    }
    //tên file
});


const fileFilter= (req, file,cb) =>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true);
    }else {
        cb(new Error('Unsupported files'),false);
    }
}
// loại ảnh


const upload = multer({
    storage:storage,
    limits:{
        fieldNameSize: 1024*1024*10
    },
    fileFilter:fileFilter
});

module.exports = {
    upload:upload
}

