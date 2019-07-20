import React from 'react'
import { render } from 'react-dom'
import MyApp from './components/MyApp'
import './style.scss'

render(
  <MyApp />,
  document.getElementById('reactModuleA')
)

// //The next line is not 'react' related. please do not delete it 
// module.hot.accept();
