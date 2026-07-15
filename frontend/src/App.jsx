import { useState } from 'react';
import api from '../src/services/api';
import { useEffect } from 'react';

const App = () => {

  const [videos, setvideos] = useState([]);

  const getVideos = async() => {
       try{
            const response = await api.get("/videos");
            console.log(response.data);
            setvideos(response.data.data);
       }
       catch(error){
             console.log(error)
       }
  }

        useEffect(() => {
         getVideos();
          }, []);

  return (
    <div>
      <h1>Socially Approved Carousel</h1>

      {
        videos.map((video) => (
          <div key={video.id}>
            <h2>{video.title}</h2>
            <p>{video.description}</p>

            <video
              src={`http://localhost:3000${video.videoUrl}`}
              width="300"
              controls
            />

            <p>❤️ {video.likes}</p>
            <p>🔗 {video.shares}</p>

            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default App
