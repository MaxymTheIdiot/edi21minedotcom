import './App.css'
import Nav from './Nav.jsx'
import News from './News.jsx';

function App() {
  return (
    <>
      <div className="main">
      <Nav />
        <div className="card-container">
          <div className="card-news">
            <News />
          </div>
          <div className="other-card">
            <h1>placeholder</h1>
          </div>
        </div>
        <div className="credits-footer">
          <p>created by max</p>
        </div>
      </div>
    </>
  )
}

export default App