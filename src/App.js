/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import './App.css';

function App() {
  return (

      <div className="app-wrapper">

        <header className="header">
          <img src="https://clck.ru/avtRN"></img>
        </header>

        <nav className="nav">
          <div>
            <a>Profile</a>
          </div>
          <div>
            <a>Messages</a>
          </div>
          <div>
            <a>News</a>
          </div>
          <div>
            <a>Music</a>
          </div>
          <div>
            <a>Settings</a>
          </div>
        </nav>

        <div className="content">
          <img src="https://clck.ru/b4sKL"></img>
          <div>
            avatar + info
          </div>
          <div>
            posts
            <div>
              new post
            </div>
            <div>post-1</div>
            <div>post-2</div>
            <div>post-3</div>
          </div>
        </div>
        
        
        
      </div>
  );
}

export default App;