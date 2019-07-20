'use strict';

function component() {
    const script   = document.createElement("script");
    script.type  = "text/javascript";
    script.src   = "//localhost:8080/react-module-a/dist/bundle.js";    // use this for linked script
    return script;
  }
  
  document.body.appendChild(component());
