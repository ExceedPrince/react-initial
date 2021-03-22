import React, { useState, useEffect } from 'react';
import LoadingMask from './components/loadingMask';
import Hotel from './components/hotel';

import './App.css';


const App = () => {
  const [loading, setLoading] = useState(false)
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    setLoading(true)
    setTimeout(() =>
      fetch("http://localhost:3000/api/hotels")
        .then(response => response.json())
        .then(data => setHotels(data))
        .catch(err => setHotels(null))
        .finally(() => setLoading(false)), 2000)
  }, [])

  console.log(hotels)

  return (
    <div className="App">

      <h1>Hotels</h1>
      {loading && <LoadingMask />}
      {hotels.map((item, index) => {
        return (
          <Hotel hotels={item} key={index} />
        )
      })}



    </div>

  )
}

export default App
