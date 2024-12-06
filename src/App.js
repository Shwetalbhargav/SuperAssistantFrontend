
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContext from './components/MainContext';
import CategorizeForm from './Form/CategorizeForm';

const App = () => {
  return (

    
    <div>
    <Navbar className="navbar" />
    <div className="flex">
        <Sidebar className="sidebar" />
        <div className="main-content flex-1 bg-gray-50 p-4">
            <MainContext />
        </div>
    </div>
</div>
  );
}

export default App;
