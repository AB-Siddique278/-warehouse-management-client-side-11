import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/Pages/About';
import Blog from './Components/Pages/Blog';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
      
    </div>
  );
}

export default App;
