import { useState, useEffect, useRef } from "react";
import Headline from '../components/Headline';

const Hooks = () => {

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
        {
            textInput,
            handleKeyPress, 
            changeHandler,
            clickHandler,
            headlinesList
        }
    )
}
  export default Hooks