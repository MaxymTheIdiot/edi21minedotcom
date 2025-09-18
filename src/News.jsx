import { useEffect, useState } from 'react';
import './News.css';

function News() {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    fetch('/news.json')
      .then(res => res.json())
      .then(json => setNews(json["news"]))
      .catch(error => {
        setNews(["News fetch error: " + error]);
        console.error("News.jsx: News fetch error:", error);
      })
  }, []);

  return (
      <>
        <h1 className="news-title">news</h1>
        <hr />
        <div className="news-box">
          {/* R.I.P another vulnerability */
          // {lines.map(line => <><div className="news-box-news" dangerouslySetInnerHTML={{ __html: line }}></div><hr /></>)}
          // BRUTALLY murdered on 17/09/2025 along with its twin in Devlog_App.jsx:36
          }
          {news.map((newsEl, i) => (
            <>
              <div className="news-box-news">
                <p>{newsEl}</p>
              </div>
              <hr />
            </>
          ))}
        </div>
      </>
  )
}

export default News;