import './App.css';
import Home from'./Screen/home.js';
import Header from './Component/header';
import Index from "./Screen/index";
import Footer from './Component/footer';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
