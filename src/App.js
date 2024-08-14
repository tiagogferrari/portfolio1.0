import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <div class="profile">
        <p id="name">TIAGO FERRARI</p>
        <p id="function">20 anos, ADS - UTFPR</p>
        <p id="location">Adamantina, São Paulo, Brasil</p>
      </div>
      <div className="projetos">

      </div>



    </div>
  );
}

export default App;
