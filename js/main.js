document.addEventListener("DOMContentLoaded", init);
//https://super-duper-fishstick-peach.vercel.app/

const MODE = Object.freeze({
  DEV: "DEV",
  PROD: "PRODUCTION",
  STAGING: "STAGING",
});

//  IFFE that runs before init to determine our page app mode
// http://127.0.0.1:5500 -origin
// 127.0.0.1:5500 -host
// 127.0.0.1 -hostname

let mode = (() => {
  if ((location.hostname = "localhost" || location.hostname == "127.0.0.1")) {
    return MODE.DEV; //DEV
  }
  if (location.hostname.endsWith("github.io")) {
    return MODE.STAGING; //STAGING
  }
  if (location.hostname.includes("vercel.app")) {
    return MODE.PROD; //PRODUCTION
  }
})();

// level ='info'||'warn'||'error'
const log = (msg, level = "info") => {
  switch (level) {
    case "info":
      if (mode == MODE.DEV) {
        console.log(msg);
      }
      break;
    case "warn":
      console.log(msg);
      break;
    case "error":
      console.log(msg);
      break;
  }
};

function init() {
  //page is ready to use

  console.log("hello");
  console.log("warn");
  console.log("test");
}
