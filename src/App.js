import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import Header from './uiComponents/navbar';
import DrawerComp from './uiComponents/drawer';
import HomeBanner from './components/homeBanner';
import ExploreDish from './components/exploredish';
import SearchMeal from './components/searchmeal';
function App() {
  const [isDesktop, setIsDesktop] = useState(false);
  // Update the isDesktop state based on the screen size
  const updateScreenSize = () => {
    setIsDesktop(window.innerWidth > 768); // Adjust the breakpoint as needed
  };

  // Add an event listener to update the screen size on resize
  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  return (
    <div className="App">
       <Router>
      <div className='nabar'>
      {isDesktop ? <Header/> : <DrawerComp/>}
      </div>
      <div className='routeComponent'>
       
          <Routes>
            <Route exact path='/' element={<HomeBanner/>}/>
            <Route exact path='/explore' element={<ExploreDish/>}/>
            <Route exact path='/search' element={<SearchMeal/>}/>
          </Routes>
        
      </div>
      </Router>
    </div>
  );
}

export default App;
