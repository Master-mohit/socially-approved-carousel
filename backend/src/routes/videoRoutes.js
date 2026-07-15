const router = require('express').Router();
const GetAllVideos = require('../controllers/videoController');


router.get('/videos', GetAllVideos.GetVideos);





module.exports = router;