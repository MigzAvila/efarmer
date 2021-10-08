import React from "react";

const containerstyle = {
   textAlign: "center",
   overflow: "hidden",
};
const iframeStyle = {
  width: "80%",
  height: "500px",
  border: "none",
};

const weather = () => {
  return (
    <div style={containerstyle}>
      <i>
        Weather Page here asdsa dasd sd sa dsa dsa dsa dd asds das ddhgsdfhgad
        dsfasfdsa f asdf asdfsdfdfsd f
      </i><br/>
      <iframe
        style={iframeStyle}
        src="https://www.ventusky.com/?p=17.32;-87.68;8&l=temperature-2m&t=20210903/03"
        title="Ventusky Weather Cast Application"
      ></iframe>
    </div>
  );
};

export default weather;
