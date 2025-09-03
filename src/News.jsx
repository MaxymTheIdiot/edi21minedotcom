import { useEffect, useState } from 'react';
import './News.css';
import news from './news.txt';

function News() {
  const [lines, setLines] = useState([]);
  
  useEffect(() => {
    fetch(news)
      .then(res => res.text())
      .then(text => setLines(text.split("\n")))
      .catch(error => {
        setLines(["News fetch error:", error]);
        console.error("News.jsx: News fetch error:", error);
      })
  }, []);

  return (
      <>
        <h1 className="news-title">news</h1>
        <hr />
        <div className="news-box">
          {lines.map(line => <><div className="news-box-news"><p>{line}</p></div><hr /></>)}
        </div>
      </>
  )
}

export default News;