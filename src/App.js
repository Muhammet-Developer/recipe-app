import './App.css';
import Login from './pages/login/Login';
import About from './pages/about/About';
import Home from './pages/home/Home';
import Details from "./pages/details/Details";
import PrivateRouter from "./router/PrivateRouter";
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/:label' element={ <Details/>}/>
      <Route path='/about' element={ <About/>}/>
      <Route path='/logout' element={ <PrivateRouter/>}>
        <Route path="" element={<Login/>}/>
      </Route>
      <Route path='/' element={<PrivateRouter/>}>
          <Route path='' element={ <Home/>}/>
      </Route>
    </Routes>
   </BrowserRouter>
  
  );
}

export default App;
