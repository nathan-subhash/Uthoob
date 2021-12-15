import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import Searchbar from './components/Searchbar'
import youtube from './apis/youtube'
import Videodetail from './components/Videodetail'
import Videolist from './components/Videolist'
import { useState } from 'react';
import jsonp from 'jsonp';

function App() {

  const[videos, setvideos] = useState([])
  const[selectedVideo, setselectedVideo] = useState(null)
  const[lyrics, setlyrics] = useState('')
  
 
  async function handleSubmit(termFromSearchbar){

    const response = await youtube.get('./search', {

      params: {
        q: termFromSearchbar
      }
    })

    jsonp( "https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?format=jsonp&q_track="+termFromSearchbar+"&callback=mycallback&apikey=60cc303d3f77ceec41c6a8579651e0d3", { name: 'mycallback' }, (error, data) => {
            if (error) {
                setlyrics(error);
            } else {
                // console.log(data.message.body.lyrics.lyrics_body)
                setlyrics(data.message.body.lyrics.lyrics_body);
            }
        });

    // console.log(response.data.items)
    setvideos(response.data.items)
  }

  function handleVideoSelect(video){

    setselectedVideo(video)

  }

  return (
            <div className='ui container' style={{marginTop: '1em'}}>
                <Searchbar handleFormSubmit={handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <Videodetail video={selectedVideo} />
                            <h1 className='ui horizontal inverted divider'>Lyrics</h1>
                            <p>{lyrics} </p>
                            
                        </div>
                        <div className="five wide column">
                            <Videolist handleVideoSelect={handleVideoSelect} videos={videos}/>
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default App;
