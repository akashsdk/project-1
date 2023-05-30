import './App.css';
import Home from'./Screen/Home.js';
import Header from './Component/Header';
import Index from "./Screen/Index";
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Header/>
      <Home />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
