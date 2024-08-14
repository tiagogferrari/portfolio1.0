import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import Button from 'react-bootstrap/Button';
import gmailLogo from './assets/logos/gmail.png';
import githubLogo from './assets/logos/github.png';
import linkedinLogo from './assets/logos/linkedin.png';
import whatsappLogo from './assets/logos/whatsapp.png';


function App() {

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <MyNavbar />
      <div className="profile">
        <div className="profile-info">
          <p id="name">TIAGO FERRARI</p>
          <p id="function">20 anos, Análise De Sistemas - UTFPR</p>
          <Button variant="dark" id="projButton" onClick={scrollToProjects}>Ver meus projetos!</Button>
        </div>
        <div className="profile-logos">
          <a href="https://wa.me/5518996826368" target="_blank" rel="noopener noreferrer">
            <img src={whatsappLogo} alt="WhatsApp" className="navbar-logo" id="logo" width={30} height={30} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tiagoggferrari@gmail.com&body=Olá, Tiago! Acessei seu portfólio e achei muito legal." target="_blank" rel="noopener noreferrer">
            <img src={gmailLogo} alt="Gmail" className="navbar-logo" id="logo" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/tiago-garcez-ferrari-783833270/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn" className="navbar-logo" id="logo" width={30} height={30} />
          </a>
          <a href="https://github.com/tiagogferrari" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="navbar-logo" id="logo" width={30} height={30} />
          </a>
        </div>
      </div>
      <div id="projects">
        oi
      </div>
    </div>
  );
}

export default App;
