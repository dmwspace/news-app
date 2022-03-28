import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider, Container, Row, Col} from 'react-bootstrap';

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
      // .then(res => console.log(res.articles))
      .then(res => setHeadlines(res.articles))
      .catch(e => console.error(e))
  }, [])

  const headlinesList = headlines.map(headline => <Headline 
    title={headline.title}
    key={headline._id}
    link={headline.link}
    image={headline.media}
    site={headline.clean_url} 
  />)
  
  return (
    <ThemeProvider 
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      style={{alignItem: "center"}}
    >
      <div>
        <Header />
        <Container>
          <Row xs={1} md={2} lg={5}>
              {headlinesList}
          </Row>
          
        </Container>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
