/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
  return (

      <div className="App">

        <Header />

        <Technologies/>
        
      </div>
  );
}

const Technologies = () => {
  
  return (

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JAVASCRIPT</li>
      <li>REACT</li>
    </ul>
  )
}

const Header = () => {

  return (

    <div>
      <a href="#">Home</a>
      <a href="#">News</a>
      <a href="#">Messages</a>
    </div>
  )
}

export default App;
