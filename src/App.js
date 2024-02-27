import './App.css';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import HeroContent from './components/heroContent/HeroContent';
import PreFooter from './components/preFooter/PreFooter';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroContent />
      <Content />
      <PreFooter />
      <Footer />
    </div>
  );
}

export default App;
