import React from 'react';
import CategorizeForm from '../Form/CategorizeForm';
import ClozeForm from '../Form/ClozeForm';
import ComprehensionForm from '../Form/ComprehensionForm';

const MainContext = () => {
  return (
    <div className="p-4">
      
      
      <CategorizeForm/>
      <ClozeForm/>
      <ComprehensionForm/>
    </div>
  );
};

export default MainContext;
