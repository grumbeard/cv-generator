import CVForm from './components/CVForm';
import githubMark from './assets/github-mark.png'
import './styles/App.css'

function App() {
  return (
    <div className="app-wrapper">
      <div className="sidebar">
        <p>Some Cool Button to Export PDF (coming soon)</p>
        <div className="credits-wrapper">
          <img src={githubMark} alt="GitHub Mark" className="github-mark" />
          <div>
            <a href="https://github.com/grumbeard/cv-generator">Visit Repository</a>
          </div>
        </div>
      </div>
      <CVForm />
    </div>
  );
}

export default App;
