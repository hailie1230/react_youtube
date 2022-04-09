import { useState } from 'react';
import { useEffect } from 'react';
import './reset.css';
import './app.css';
import Navbar from './components/navbar/navbar';
import VideoList from './components/video_list/video_list';


function App() {
  const [ videos, setVideos ] = useState([]);
  // const [ name, setName ] = useState('hailie');

  useEffect(() => {
    // console.log('useEffect');
    
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=AIzaSyBrkaDzJy4Yu65mSj7TIX-0Dy7obAQo5r4", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <div className="container">
      <Navbar />
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
