import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './components/demo/Hello'
import HelloClass from './components/demo/HelloClass'
import HelloHoc from './components/demo/HelloHoc'
import HelloHooks from './components/demo/HelloHooks'

ReactDOM.render(
  //<HelloClass name="kumaClass"/>,
  //<HelloHoc name="kumaClass" loading={false} />,
  <HelloHooks name="kumaxx"/>,
  document.querySelectorAll('.app')[0]
)
