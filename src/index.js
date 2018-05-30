import React from 'react'
import ReactDOM from 'react-dom'
import '../public/style.min.css'

import Title from './components/Title'

const App = () => {
  return <Title>hello, world</Title>
}

ReactDOM.render(<App />, document.getElementById('root'))

export default App