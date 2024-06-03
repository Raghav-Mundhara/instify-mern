import React from 'react'
import './style.css'


export default function Music() {
    
  return (
    <body id="backgroundContainer">
    <nav>
        <ul>
            <li className="brand"><img src="logo.png" alt="Spotify"/> Spotify</li>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>

    <div className="container-music">
        <div className="songList">
            <h1>Best of NCS</h1>
            <div className="songItemContainer">
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="0" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="1" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="2" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="3" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="4" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="5" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="6" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="7" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="8" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
                <div className="songItem">
                    <img alt="1"/>
                    <span className="songName">Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34 <i id="9" className="far songItemPlay fa-play-circle"></i> </span></span>
                </div>
            </div>
        </div>
        <div className="songBanner"></div>
    </div>

    <div className="bottom">
        <input type="range" name="range" id="myProgressBar" min="0" value="0" max="100"/>
        <div className="icons">
            <i className="fas fa-3x fa-step-backward" id="previous"></i>
            <i className="far fa-3x fa-play-circle" id="masterPlay"></i>
            <i className="fas fa-3x fa-step-forward" id="next"></i> 
        </div>
        <div className="songInfo">
            <img src="playing.gif" width="42px" alt="" id="gif"/> <span id="masterSongName">Warriyo - Mortals [NCS Release]</span>
            &nbsp;&nbsp;<span id="currentTime">0:00</span> / <span id="totalDuration">0:00</span>
        </div>
    </div>
    <script src="script.js"></script>
    <script src="https://kit.fontawesome.com/26504e4a1f.js" crossorigin="anonymous"></script>
    </body>
  )
}

// import React from 'react'

// export default function Music() {
//   return (
//     <div>Music</div>
//   )
// }
