import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import './css/index.css'

const Text = styled.p.attrs({
  className: 'font-5 ttc sans-serif black',
})``

const App = () => {
  return <Text>hello, world</Text>
}

ReactDOM.render(<App />, document.getElementById('root'))