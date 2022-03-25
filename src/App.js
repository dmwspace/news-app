import React, { useEffect, useState } from 'react';
import Header from './components/Header';
// import Headline from './components/Headline';

function App() {

  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_FREE_NEWS_API_KEY
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey
      }
    }
    fetch('https://free-news.p.rapidapi.com/v1/search?q=US%20Headlines&lang=en', options)
      .then(res => res.json())
      .then(data => setHeadlines(data.articles))
      .then(console.log(headlines))
      .catch(e => console.error(e))
  }, [])

    //const headlinesList = headlines.map(headline => <Headline title={headline.title}/>)

  return (
    <div>
      <Header />
      {/* {headlinesList} */}
    </div>
  );
}

export default App;
