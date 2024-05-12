import './App.css';
import Carousel from './components/Carousel/Carousel';
import Form from './components/Footer/Form/Form';
import Navbar from './components/Header/navbar';
import Headline from './components/Headline/Headline';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Headline/>
      <Carousel/>
      <Form/>
    </div>
  );
}

export default App;
