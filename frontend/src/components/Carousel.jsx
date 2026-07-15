import VideoCard from "./VideoCard";

const Carousel = ({ videos }) => {
  return (
    <div className="min-h-screen bg-black py-10">

      <h1 className="text-white text-4xl font-bold text-center mb-10">
        🎬 Socially Approved Carousel
      </h1>

      <div className="flex gap-8 overflow-x-auto px-10 pb-6">

        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}

      </div>

    </div>
  );
};

export default Carousel;