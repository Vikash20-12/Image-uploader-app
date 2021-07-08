const router   = require('express').Router();
const controller = require('../controller/controller');
const store     = require('../middleware/multer'); 

//routes
router.get('/',controller.home);

//route to save selected images to uploads folder
router.post('/uploadmultiple', store.array('images',12),controller.uploads);




module.exports = router; 
