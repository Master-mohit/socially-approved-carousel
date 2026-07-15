const VideoCard = ({ video, handleLike }) => {
  return (
    <div className="w-[500px] ">

      <div className="relative">
        <video
          src={`http://localhost:3000${video.videoUrl}`}
          controls
          className="w-[420px] flex rounded-2xl overflow-hidden bg-zinc-900 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
        />

        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      
      <div className="p-4 text-white">

        <h2 className="text-xl font-bold truncate">
          {video.title}
        </h2>

        <p className="text-sm text-gray-400 mt-2 line-clamp-2">
          {video.description}
        </p>

        <div className="flex justify-between items-center mt-5">

          <div className="flex items-center gap-2">

          </div>

          <div className="flex items-center gap-2">
          </div>

        </div>

      </div>

    </div>
  );
};

export default VideoCard;