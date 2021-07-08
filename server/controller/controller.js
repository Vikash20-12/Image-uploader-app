
exports.home = (req, res)=>{
    res.render('main');
}

exports.uploads = (req, res, next)=>{
    const files = req.files;

    if(!files){
        return res.status(400).send('please choose files');
    }

    res.json(files)
}