import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Questions from './components/Questions';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Result from './components/Result';


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/questions" exact element={<Questions/>}/>
          <Route path="/result" exact element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
