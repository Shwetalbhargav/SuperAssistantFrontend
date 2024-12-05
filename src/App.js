import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContext from './components/MainContext';
import CategorizeForm from './Form/CategorizeForm';

const App = () => {
  return (
   <div>
    <Navbar/>
    <div className="flex ">
      
      <Sidebar />
     
      <div className="flex-1 bg-gray-50 p-4 ml-64">
    
        <MainContext />
       
       
      </div>
    </div>
    </div>
  );
}

export default App;
