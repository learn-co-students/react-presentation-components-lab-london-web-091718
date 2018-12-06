import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const alertSomething = () => alert("something")

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={alertSomething} />
  </div>,
  document.getElementById('root')
);
