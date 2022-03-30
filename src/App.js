import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Headline from './components/Headline';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider, Container, Row} from 'react-bootstrap';

function App() {

  const [headlines, setHeadlines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
    textInput.current.value = "";
  }, [])

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      clickHandler();
    }
  }

  function changeHandler(e) {
    setSearchTerm(e.target.value)
  }

  function clickHandler(e) {
    const apiKey = process.env.REACT_APP_FREE_NEWS_API_KEY
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
        'X-RapidAPI-Key': apiKey
      }
    }
    fetch(`https://free-news.p.rapidapi.com/v1/search?q=${searchTerm}&lang=en`, options)
      .then(res => res.json())
      // .then(res => console.log(res.articles))
      .then(res => setHeadlines(res.articles))
      .catch(e => console.error(e))
    textInput.current.focus();
    textInput.current.value = "";
  }

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
    >
      <div 
        style={{padding: "auto", backgroundColor: "#D76B4F"}}
      >
        <Header 
          clickHandler={clickHandler}
          textInput={textInput}
          changeHandler={changeHandler}
          keypress={handleKeyPress}
        />
        <Container>
          <Row xs={1} sm={2} lg={3} xxl={4}>
              {headlinesList}
          </Row>
        </Container>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
