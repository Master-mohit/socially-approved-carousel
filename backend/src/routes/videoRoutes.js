const router = require('express').Router();
const GetAllVideos = require('../controllers/videoController');
const LikedVideos = require('../controllers/videoController');
const ShareVideos = require('../controllers/videoController');


router.get('/videos', GetAllVideos.GetVideos);

router.post('/like', LikedVideos.LikedVideos);

router.post('/share', ShareVideos.ShareVideo);




module.exports = router;