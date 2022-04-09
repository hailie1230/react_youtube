import React from 'react';
import styles from './video.module.css';

const VideoItem = ({video : {snippet}}) => {
  const videoTitle = snippet.title;
  console.log(videoTitle.length)
  const videoTxt = snippet.channelTitle;
  const videoDate = snippet.publishedAt;
  const imgUrl = snippet.thumbnails.high.url;
  // console.log(date.substring(0,10))
  // console.log(snippet.thumbnails.high.url);
  return (
    <li className={styles.wrap}>
      <div className={styles.thumnail}>
        <img className={styles.thumnailImg} src={imgUrl} alt={snippet.title} />
      </div>
      <div className={styles.cont}>
        <div className={styles.icon}>
          <img className={styles.iconImg} src="https://hailie1230.github.io/portfolio/assets/img/icon_face2.png" alt="icon" />
        </div>
        <div className={styles.description}>
          <p className={styles.title}>{videoTitle}</p>
          <p className={styles.txt}>{videoTxt} &middot;	<span className="disIb">{videoDate.substring(0,10)}</span></p>
        </div>
      </div>
    </li>
    
  );
};

export default VideoItem;
