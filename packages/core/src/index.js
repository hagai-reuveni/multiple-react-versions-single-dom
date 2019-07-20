'use strict';

const loadModule = ({ module }) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `//localhost:8080/${module}/dist/bundle.js`;
    return script;
  }
  
  document.body.appendChild(loadModule({ module: 'react-module-a'}));
  document.body.appendChild(loadModule({ module: 'react-module-b'}));