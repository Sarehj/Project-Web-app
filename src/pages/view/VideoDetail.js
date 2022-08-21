import React from "react";
import '../../App.css'


const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="tozih">
       <h1 style={{fontSize:'16px'}}>Enter search keyword to load...</h1>
       <br></br>
       <p style={{fontSize:'20px'}}>
       Hello!
       <br></br>
       Welcome to our website. This website was programmed as a part of the course DH2642 Interaction Programming and the Dynamic Web.
       What we did was to use Youtube’s API and create a searching tool bar. You can search for whatever video you want, and our website will bring the results by using Youtube’s API. 
       <br></br>
       Please leave us a feedback at the feedback page! 
       <br></br>
       Hope you like our website &#128516;  
       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};


export default VideoDetail;