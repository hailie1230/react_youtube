import React from 'react';
import styles from './video_detail.module.css'

const VideoDetail = ({ video, video: { snippet } }) => (
  <section className={styles.detail}>
    <iframe 
      type="text/html" 
      width="100%" 
      title="youtube video player"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0" 
      allowFullScreen
    ></iframe>
    <div className={styles.textBox}>
      <h2 className={styles.title}>{snippet.title}</h2>
      <p className={styles.date}><strong>Upload Date :</strong> {snippet.publishedAt.substring(0,10)}</p>
      <pre className={styles.description}>{snippet.description}</pre>
    </div>
  </section>
);

export default VideoDetail;