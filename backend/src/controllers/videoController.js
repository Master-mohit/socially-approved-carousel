const videos = require("../data/videos");


const GetVideos = (req, res) => {
    try {
        res.status(200).json({
            message: "Successfully fetched videos",
            data: videos
        });
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving videos",
            error: error.message
        });
    }
};


const LikedVideos = (req, res) => {
    try {

        const { videoId, userId } = req.body;

     
        const video = videos.find(
            (video) => video.id === Number(videoId)
        );

        
        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        
        const alreadyLiked = video.likedBy.includes(userId);

        if (alreadyLiked) {

         
            video.likedBy = video.likedBy.filter(
                (id) => id !== userId
            );

            video.likes--;

            return res.status(200).json({
                message: "Video unliked successfully",
                data: video
            });
        }


        video.likedBy.push(userId);
        video.likes++;

        return res.status(200).json({
            message: "Video liked successfully",
            data: video
        });

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};


const ShareVideo = (req, res) => {
    try {

        const { videoId } = req.body;

        const video = videos.find(
            (video) => video.id === Number(videoId)
        );

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        video.shares++;

        return res.status(200).json({
            message: "Video shared successfully",
            data: video
        });

    } catch (error) {

        return res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });

    }
};

module.exports = {
    GetVideos,
    LikedVideos,
    ShareVideo
};