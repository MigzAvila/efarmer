import React from "react";

const containerstyle = {
  textAlign: "center",
  overflow: "hidden",
};
const iframeStyle = {
  width: "80%",
  height: "650px",
  border: "none",
};

const weather = () => {
  return (
    <div style={containerstyle}>
      <h1 style={{ textAlign: "center" }}>Weather Cast</h1>
      <br />
      <iframe
        style={iframeStyle}
        src="https://www.ventusky.com/?p=17.32;-87.68;8&l=temperature-2m&t=20210903/03"
        title="Ventusky Weather Cast Application"
      ></iframe>
    </div>
  );
};

export default weather;
