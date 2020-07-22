var multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: "./uploads/resumes",
    filename: (req, file, callback) => {
        let ext = path.extname(file.originalname);
        callback(null, `${file.fieldname}-${Date.now()}${ext}`);
    }
});

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(docx|pdf)$/)) {
        return cb(new Error("Please use PDF or DOCX formated files!"), false);
    }
    cb(null, true);
};

const upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

var file = upload.single('fileName');

function files(req,res,next){
    console.log(req.file)
    // res.json(req.file)
    next()
}

module.exports = {
    file,
    files
}

