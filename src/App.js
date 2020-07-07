import React, { useState, useEffect } from 'react';
import axios from 'axios'

import './App.css';

function App() {
  const [notices, setNotices] = useState([])

  useEffect(() => {
    async function loadNotice() {
      const response = await axios.get('http://newsapi.org/v2/top-headlines?sources=google-news-br&APi-KEY')
      console.log(response.data)
      setNotices(response.data.articles)
    }

    loadNotice()
  }, [])


  return (
    <div className="main-container">
      <h2>Total: {notices.length}</h2>
      <ul>
        
        {notices.map(notice => (
          <li key={notice.description}>
            <img src={notice.urlToImage}></img>
            <footer>
              <strong>{notice.title}</strong>
              <p>{notice.description}</p>
              <small>Publicação: {notice.publishedAt}</small>
            </footer>
          </li>
        
        ))}
        
      </ul>


    </div>

  );
}

export default App;
