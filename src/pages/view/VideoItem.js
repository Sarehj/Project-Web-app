import React ,{useState} from 'react';
import '../pages.css';
import { BsSuitHeartFill } from "react-icons/bs";



const VideoItem = ({video , handleVideoSelect}) => {
    
    const  [like, setLike] = useState(false) 
    const liked= () => setLike(!like)

    return (
        <><div onClick={() => handleVideoSelect(video)} className=' video-itemitem'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>

        </div>
        <div className={like ? 'btn1 active' : 'btn'}>
           <BsSuitHeartFill onClick={liked} />    
               
            </div>
            </> 
    )
}
export default VideoItem;