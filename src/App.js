import logo from './logo.svg';
import './App.css';
import Header from './components1/MyHeader';
import Mynavigation from './components1/Mynavigation';
import MySection from './components1/MySection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>JSX(JavaScript XML - 자바스크립인데 xml문법에 맞게 - babel이 진짜 자바스크립트로 바꾸어준다.)</p> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 배우기
        </a>
      </header>
      <Header></Header>
      <Mynavigation />
      <MySection />
    </div>
  );
}

export default App;
