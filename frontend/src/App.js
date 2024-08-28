import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './pages/header';
import Login from './pages/login';
import SignUp from './pages/signup';
import List from './pages/list';
import Footer from './pages/footer';
import Firstpage from './pages/firstpage';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/firstpage" element={<Firstpage/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;



  

