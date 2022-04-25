import React, { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Students from './components/Students';
import Contact from './components/Contact';
import StudentsDesc from './components/StudentsDesc';

export const StudentsContext = createContext();

const App = () => {

  const arr = [
    { name: 'John', age: 26, course: 'MERN', batch: 'October', id: "1" },
    { name: 'Doe', age: 25, course: 'MERN', batch: 'November', id: "2" },
    { name: 'Biden', age: 26, course: 'MERN', batch: 'September', id: "3" },
    { name: 'Barar', age: 22, course: 'MERN', batch: 'September', id: "4" },
    { name: 'Christ', age: 23, course: 'MERN', batch: 'October', id: "5" },
    { name: 'Elent', age: 24, course: 'MERN', batch: 'November', id: "6" },
  ];

  const [students, setStudents] = useState(arr);

  return (
    <Router>
      <StudentsContext.Provider value={[students, setStudents]}>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/students' element={<Students />}/>
          <Route path='contact-us' element={<Contact />}/>
          <Route path='/students-desc' element={<StudentsDesc />}/>
          <Route path='/students-desc/:id' element={<StudentsDesc />}/>
        </Routes>
      </StudentsContext.Provider>
    </Router>
  );
}

export default App;
