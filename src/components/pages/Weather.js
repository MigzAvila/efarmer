import React from "react";

const style = {
  container: {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
    margin: "0 auto",
    textAlign: "center",
  },
  iframeStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: "100%",
    height: "100%",
    border: "none",
    margin: "auto",
  },
};

const weather = () => {
  return (
    <div className={style.iframeStyle}>
      <i>
        Weather Page here asdsa dasd sd sa dsa dsa dsa dd asds das ddhgsdfhgad
        dsfasfdsa f asdf asdfsdfdfsd f
      </i>
      <iframe
        className={style.iframeStyle}
        // width="1012"
        // height="506"
        width="60%"
        height="500"
        src="https://www.ventusky.com/?p=17.32;-87.68;8&l=temperature-2m&t=20210903/03"
        title="Ventusky Weather Cast Application"
      ></iframe>
    </div>
  );
};

export default weather;
