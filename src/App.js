import React, { useState, useEffect } from 'react';
import Header from './components/Header';

function App() {

  useEffect(() => {
    const apiKey = process.env.API_KEY
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey
      }
    }
    fetch('https://free-news.p.rapidapi.com/v1/search?q=Headlines&lang=en', options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.error(e))
  }, [])

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
