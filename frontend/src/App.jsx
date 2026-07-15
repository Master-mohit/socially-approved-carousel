import { useEffect, useState } from "react";
import api from "./services/api";
import Carousel from "./components/Carousel";
import VideoModal from "./components/VideoModal";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getVideos = async () => {
    try {
      const response = await api.get("/videos");
      setVideos(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);




  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-5xl font-bold text-center">
          🎬 Video Gallery
        </h1>

        <p className="text-center text-zinc-400 mt-3 mb-10">
          Watch and explore amazing videos
        </p>

        

        <Carousel videos={videos} />
         <VideoModal
    video={selectedVideo}
    onClose={() => setSelectedVideo(null)}
   
  />
      </div>
    </div>
  );
};

export default App;