import React  from 'react'
import Searchbar from './view/Searchbar';
import youtube from '../apis/youtube';
import VideoList from './view/VideoList';
import VideoDetail from './view/VideoDetail';
import './pages.css'


class Home extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
    
    return (
        <div >
                <Searchbar handleFormSubmit={this.handleSubmit}/>
                <div >
                    <div id="parent">
                        <div id ="wide">
                            <VideoDetail  video={this.state.selectedVideo}/>
                        </div>
                        <div id="narrow">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;

