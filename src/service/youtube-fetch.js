import axios from 'axios';

class Youtube { 
  constructor(key) {
    this.youtube = axios.create({
      baseURL: 'https://youtube.googleapis.com/youtube/v3',
      params: {key: key},
    });
    
  };

  async mostPopular(){
    const response = await this.youtube.get('videos',{
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      }
    });
    return response.data.items;
    // return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=${this.key}`, 
    // this.getRequestOptions)
    //   .then(response => response.json())
    //   .then(result => result.items);
  };

  async search(query){
    const response = await this.youtube.get('search',{
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: query,
      }
    });
    return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    // return fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q=${query}&type=video&key=${this.key}`, 
    // this.getRequestOptions)
    //   .then(response => response.json())
    //   .then(result => result.items.map(item => ({ ...item, id: item.id.videoId })))
  };

}

export default Youtube;