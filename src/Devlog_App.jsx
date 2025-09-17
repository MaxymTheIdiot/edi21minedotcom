import { useState, useEffect } from 'react';
import './Devlog_App.css';

function Devlog_App() {
    const [devlogs, setDevlogs] = useState([]);
    useEffect(() => {
        fetch('/devlog.json')
          .then(res => res.json())
          .then(json => {
            setDevlogs(json['devlogs']);
          })
          .catch(error => {
            setDevlogs([{"title": "Devlog fetch error:" + error, "date": "", "description": "", changes: []}]);
            console.error("devlog/App.jsx: Devlog fetch error:", error);
          })
    }, []);

    console.log(devlogs);

    return (
        <>
          <a href='/' className='back-to-main'>back to main page</a>
          <div className='devlog-header'>
            <h1>devlog</h1>
            <hr />
          </div>
          <p className='devlog-welcome'>hello and welcum to the edi21mine devlog,</p>
          <p className='devlog-welcome'>where i (max) yap about the brain damage</p>
          <p className='devlog-welcome'>that programming this website caused to</p>
          <p className='devlog-welcome'>me, and changes made to this website :&gt;</p>
          <hr />
          <div className='devlogs'>
            {devlogs.map((log, i) => (
                <>
                  {/* R.I.P vulnerability */
                  // <div key={i} dangerouslySetInnerHTML={{ __html: log }}></div>
                  // killed on 17/09/2025
                  }
                  <div>
                    <h1>{log["title"]} <span className="devlog-date">({log["date"]})</span></h1>
                    <p>{log["description"]}</p>
                    <ul>
                      {log["changes"].map((change, j) => (
                        <li key={j}>{change}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                </>
            ))}
          </div>
        </>
    )
}

export default Devlog_App;