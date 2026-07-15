const VideoModal = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">

      <div className="relative bg-white rounded-xl w-[90%] max-w-md overflow-hidden">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white rounded-full w-8 h-8"
        >
          ✕
        </button>

        {/* Video */}
        <video
          src={`http://localhost:3000${video.videoUrl}`}
          controls
          autoPlay
          className="w-full h-[500px] object-cover"
        />

        {/* Content */}
        <div className="p-4">

          <h2 className="text-2xl font-bold">
            {video.title}
          </h2>

          <p className="text-gray-600 mt-2">
            {video.description}
          </p>

          <div className="flex justify-between mt-5">

            <button className="bg-red-500 text-white px-4 py-2 rounded">
              ❤️ {video.likes}
            </button>

            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              🔗 {video.shares}
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default VideoModal;