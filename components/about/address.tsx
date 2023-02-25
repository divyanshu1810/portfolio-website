import React, { FunctionComponent } from "react";

interface MapType {
  url: string;
}

function Map({ url }: MapType): JSX.Element | null {
  const mystyle = {
    border: "0",
    width: "100%",
    height: "40vh",
  };
  return (
    <div className="">
      <iframe
        src={url}
        width="600"
        height="450"
        style={mystyle}
        allow="fullscreen"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Map;
