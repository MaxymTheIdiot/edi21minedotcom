import { useState, useEffect } from 'react';
import './Devlog_App.css';

function Devlog_App() {
    const [devlogs, setDevlogs] = useState([]);
    useEffect(() => {
        fetch('/devlog.txt')
          .then(res => res.text())
          .then(text => {
            setDevlogs(text.split("---").filter(e => e.trim() !== ''));
          })
          .catch(error => {
            setDevlogs([{"title": "Devlog fetch error:" + error, "date": null, "html": null}]);
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
                  <div key={i} dangerouslySetInnerHTML={{ __html: log }}></div>
                  <hr />
                </>
            ))}
          </div>
        </>
    )
}

export default Devlog_App;