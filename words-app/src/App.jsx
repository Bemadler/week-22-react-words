import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import WordList from './components/wordlist/WordList.jsx';
import Footer from './components/footer/Footer.jsx';
import WordCard from './components/wordcard/WordCard.jsx';
import AddWordForm from './components/addword/AddWord.jsx';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <WordCard/>
      <AddWordForm/>
      <WordList/>
      <Footer/>
    </div>
  );
}

export default App;
