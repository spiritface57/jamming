import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

function Tracklist({ tracks }) {
  console.log('tracks',tracks);
  return (
    <div className="tracklist">
      {tracks && tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}

export default Tracklist;
