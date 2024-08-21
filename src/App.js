import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';
import Button from 'react-bootstrap/Button';
import gmailLogo from './assets/logos/gmail.png';
import githubLogo from './assets/logos/github.png';
import linkedinLogo from './assets/logos/linkedin.png';
import whatsappLogo from './assets/logos/whatsapp.png'
import seta from './assets/logos/seta.png';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import { useState } from 'react';

function App() {

  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 3;

  const cards = [
    { title: 'SATISFYING.YOU', description: 'Aplicativo para pesquisas com clientes/usuários corporativos', technologies: 'React-Native | Firebase Authentication | Database e Storage ', link: 'https://github.com/tiagogferrari/SatisfyingYou-Mobile-' },
    // { title: 'TÍTULO', description: 'DESCRIÇÃO', technologies: 'TECNOLOGIAS', link: 'aaa' },
    // { title: 'TÍTULO', description: 'DESCRIÇÃO', technologies: 'TECNOLOGIAS', link: 'aaa' },
    // { title: 'Projeto 4', text: 'Descrição do Projeto 4' },
    // { title: 'Projeto 5', text: 'Descrição do Projeto 5' },
    // { title: 'Projeto 6', text: 'Descrição do Projeto 6' },
    // { title: 'Projeto 7', text: 'Descrição do Projeto 7' },
    // { title: 'Projeto ', text: 'Descrição do Projeto 8' },
    // { title: 'Projeto 9', text: 'Descrição do Projeto 9' },
    // { title: 'Projeto 10', text: 'Descrição do Projeto 10' },
    // { title: 'Projeto 11', text: 'Descrição do Projeto 11' },
    // { title: 'Projeto 12', text: 'Descrição do Projeto 12' },
  ];

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProfile = () => {
    document.getElementById('prof').scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="App">
      <MyNavbar />
      <div className="profile" id="prof">
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
        <div id="content">
          <div className="title-repo-container">
            <p id="title">PROJETOS</p>
            {/* <a id="repo" href='https://github.com/tiagogferrari?tab=repositories' target="_blank" rel="noopener noreferrer">Repositórios</a> */}
          </div>
          <div className="card-container" id="cards">
            {currentCards.map((card, index) => (
              <Card key={index} id="card">
                <Card.Body>
                  <Card.Title className="card-title">{card.title}</Card.Title>
                  <Card.Text className="card-description">{card.description}</Card.Text>
                  <Card.Text className="card-technologies">{card.technologies}</Card.Text>
                  <Card.Link className="card-link" href={card.link} target="_blank" rel="noopener noreferrer">REPOSITÓRIO</Card.Link>
                </Card.Body>
              </Card>
            ))}
          </div>
          <div className="pagination-container">
            <Pagination>
              {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }, (_, index) => (
                <Pagination.Item key={index + 1} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
          <div>
            <img src={seta} alt='oi' id='logo' className="backHome" onClick={scrollToProfile}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
