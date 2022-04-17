import { useState, useEffect } from 'react';
import './reset.css';
import styles from './app.module.css';
import SearchHeader from './components/searchHeader/searchHeader';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail';

function App({youtube}) {
  const [ videos, setVideos ] = useState([]);
  const [ selectedVideo, setSelectedVideo ] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };
  
  const search = query => {
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList videos={videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid' }/>
        </div>
      </section>
    </div>
  );
}

export default App;
