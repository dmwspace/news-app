import React from 'react';
import Header from './components/Header';
import Hooks from './hooks/Hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ThemeProvider, Container, Row} from 'react-bootstrap';

function App() {

  const {
      textInput,
      handleKeyPress, 
      changeHandler,
      clickHandler,
      headlinesList
    } = Hooks()
  
  return (
    <ThemeProvider 
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <div 
        style={{padding: "auto", backgroundColor: "rgb(50, 50, 50)"}}
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
