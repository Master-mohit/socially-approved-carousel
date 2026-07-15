const videos = require("../data/videos");

const GetVideos = async (req, res) => {
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

module.exports = { GetVideos };