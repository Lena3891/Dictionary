import Dictionary from "./Dictionary";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Magdalena Zyglewicz and is open-sourced on <a href="https://github.com/Lena3891/Dictionary" target="_blank">GitHub</a>{" "}and hostet on <a href="">Netlify</a></small>
        </footer>
      </div>
    </div>
  );
}


