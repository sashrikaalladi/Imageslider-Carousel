import React from 'react'
import Carousel from './components/Carousel'
import slides from './data/Images.json'
const App = () => {
  return (
    <div>
      <Carousel data={slides}/>
    </div>
  )
}

export default App