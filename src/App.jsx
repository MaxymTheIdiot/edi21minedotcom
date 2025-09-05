import './App.css'
import Nav from './Nav.jsx'
import News from './News.jsx';
import Cats from './Cats.jsx';

function App() {
  return (
    <>
      <div className="main">
      <Nav />
        <div className="card-container">
          <div className="card-news">
            <News />
          </div>
          <div className="card-cats">
            <Cats />
          </div>
        </div>
        <div className="credits-footer">
          <p>created with love by max ∙ <a href='/devlog.html'>devlog</a> ∙ <a href='https://github.com/MaxymTheIdiot/edi21minedotcom'>github</a></p>
        </div>
      </div>
    </>
  )
}

export default App