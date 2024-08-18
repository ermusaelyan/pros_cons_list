import './App.css';
import List from "./components/List";


function App() {
  return (
      <div className="wrapper">
          <div className="container">
              <header className="header">Should i eat at McDonald's</header>
              <div className="lists">
                  <div className="list__container">
                      <div className="list__head">Pros</div>
                      <List />
                  </div>
                  <div className="list__container">
                      <div className="list__head">Cons</div>
                      <List />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default App;
