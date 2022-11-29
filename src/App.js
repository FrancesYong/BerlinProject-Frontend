// import logo from './logo.svg';
import './App.css';
import Header from './components/molecules/Header';
import Content from './components/pages/content';
import Footer from './components/molecules/Footer';

function App() {
  return (
    <div>
      <div className="page">
        <Header></Header>
        <Content></Content>
      </div>
      <Footer></Footer>
    </div>

  );
}

export default App;
