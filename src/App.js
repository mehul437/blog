import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import Header from './component/Header';
import { DataProvider } from './component/ContextArticle';
import Bollywoodlatest from './component/Bollywoodlatest';
import Hollywoodlatest from './component/Hollywoodlatest';
import Technology from './component/Technology';
import Food from './component/Food';
import Detail from './component/Detail';
import Home from './component/Home';
import Fitness from './component/Fitness';

function App() {
  return (
   <>
   <DataProvider>
    
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Navigate to='/home'/>}/>
          <Route path='/home' element={<Home />} />
          <Route path='/bollywood' element={<Bollywoodlatest  />} />
          <Route path='/hollywood' element={<Hollywoodlatest />} />
          <Route path='/technology' element={<Technology />} />
          <Route path='/food' element={<Food />} />
          <Route path='/fitness' element={<Fitness />} />
          <Route path='/article/:id' element={<Detail/>}/>
        </Routes>
      </Router>

   </DataProvider>
  
   </>
  );
}

export default App
