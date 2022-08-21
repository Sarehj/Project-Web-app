import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Team from './pages/Team';
import Setting from './pages/Setting';
import ErrorPage from './pages/ErrorPage';
import Feedback from './pages/Feedback';
import Login from "./components/Login";
import SignUp from "./components/Signup";


import {ThemeProvider} from 'styled-components';
import {getTheme} from "./getTheme";
import THEMES from './components/theme';
import {Header} from './styles';

import { ImSun } from "react-icons/im";
import { HiMoon } from "react-icons/hi";
import { IoFlower } from "react-icons/io5";
import { SiIcloud } from "react-icons/si";

import {UserAuthContextProvider} from "./store/UserAuthContext"
import ProtectedRoute from "./store/ProtectedRoute"




function App() {
  
  const [themeName, setThemeName] = useState(THEMES.BASIC);
  

return  (
    <ThemeProvider theme={getTheme(themeName)}>
     <UserAuthContextProvider>
    <Router>
        <Navbar />
        <Header>
        <Routes>
          <Route path ='/signup' element = {<SignUp />}/>
          <Route path ='/' element = {<Login />}/>
          <Route path ='/home'  element = {<ProtectedRoute><Home/></ProtectedRoute>} />
          <Route path ='/team' element = {<Team/>}/>
          <Route path ='/feedback' element = {<Feedback/>}/>
          <Route path ='/setting'  element = {<><Setting />
            <ImSun color='#ece905'   size={40} className='Btn' onClick={() => setThemeName(THEMES.LIIGHT)}>Light</ImSun>
            <HiMoon  size={40} className='Btn' onClick={() => setThemeName(THEMES.DARK)}>Dark</HiMoon>
            <SiIcloud color="#4984ac" size={40} className='Btn' onClick={() => setThemeName(THEMES.BLUE)}>Blue</SiIcloud>
            <IoFlower color="#ac498e" size={40} className='Btn' onClick={() => setThemeName(THEMES.PINK)}>Pink</IoFlower></>} />
         <Route path="*" element={<ErrorPage/>}/> 
        </Routes>
        </Header>
    </Router>
    </UserAuthContextProvider>
    </ThemeProvider>

  ) 
}


export default App;




