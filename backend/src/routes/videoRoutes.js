const router = require('express').Router();
const GetAllVideos = require('../controllers/videoController');
const LikedVideos = require('../controllers/videoController');


router.get('/videos', GetAllVideos.GetVideos);

router.post('/like', LikedVideos.LikedVideos);



module.exports = router;