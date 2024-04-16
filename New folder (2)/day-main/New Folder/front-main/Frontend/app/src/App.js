
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Nav } from './components/Nav';
import { Home } from './components/Home';
import {Login } from './components/Login';
import { Sign } from './components/Sign';
import {Contact } from './components/Contact';
import { Userh } from './components/Userh';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/con' element={<Contact/>}/>
        <Route path='/user' element={<Userh/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
