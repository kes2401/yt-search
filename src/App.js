import React, { Component } from 'react';
import _ from 'lodash';
import './App.css';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_detail';

const API_KEY = "AIzaSyAkUbyHC9_h4l-hch-J1DAvDIyUBZe14SY";

class App extends Component {

  state = {
    videos: [],
    selectedVideo: null
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {

    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar search={videoSearch} />
        <div className="row justify-content-center">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.state.videos}
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          />
        </div>
      </div>  
    );
  }
}

export default App;
