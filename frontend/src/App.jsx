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
    <h1 className="text-5xl text-red-500 font-bold font-extralight">
      Tailwind Working
    </h1>
  );


}

export default App
