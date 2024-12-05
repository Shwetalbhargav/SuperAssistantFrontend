import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";

const ClozeForm = () => {
  return (
    <div className="p-6 bg-gray-100 max-w-4xl mx-auto shadow-md rounded-md">
    
      <h2 className="text-lg font-semibold mb-4">Question 2</h2>

      
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Preview</label>
        <input
          type="text"
          placeholder="A quick___fox jumped over a____"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Sentence</label>
        <input
          type="text"
          placeholder="A quick brown fox jumped over a fence"
          className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-2">Options</label>

        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <input
            type="text"
            placeholder="brown"
            className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center mb-2">
          <input type="checkbox" className="mr-2" />
          <input
            type="text"
            placeholder="fence"
            className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <input
            type="text"
            placeholder="Option 3 (Optional)"
            className="flex-grow border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

     
      <div className="mb-4">
        <label className="block font-medium text-gray-700 mb-1">Points</label>
        <input
          type="number"
          placeholder="Points"
          className="w-20 border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-end space-x-4">
        <button className="p-2 text-gray-600 hover:text-red-500">
          <FiTrash2 size={20} />
        </button>
        <button className="p-2 text-blue-500 hover:text-blue-600">
          <IoMdAddCircleOutline size={24} />
        </button>
      </div>
    </div>
  );
};

export default ClozeForm;
