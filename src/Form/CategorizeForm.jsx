
import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { submitCategorizationForm } from '../services/api';
import axios from 'axios';

const CategorizeForm = () => {
  const [title, setTitle] = useState('Categorize the following');
  const [media, setMedia] = useState('');
  const [categories, setCategories] = useState([
    { id: 1, name: 'Country' },
    { id: 2, name: 'City' },
  ]);
  const [items, setItems] = useState([
    { id: 1, name: 'Paris', categoryId: 2 },
    { id: 2, name: 'Japan', categoryId: 1 },
  ]);
  const [points, setPoints] = useState(0); // Optional points field

  const handleCategoryChange = (id, value) => {
    setCategories((prev) =>
      prev.map((category) =>
        category.id === id ? { ...category, name: value } : category
      )
    );
  };

  const handleItemChange = (id, value) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, name: value } : item))
    );
  };

  const handleCategoryAssignment = (itemId, categoryId) => {
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, categoryId } : item))
    );
  };

  const addCategory = () => {
    setCategories([...categories, { id: Date.now(), name: '' }]);
  };

  const addItem = () => {
    setItems([...items, { id: Date.now(), name: '', categoryId: null }]);
  };

  const handleSubmit = async () => {
    // Transform categories and items to match schema requirements
    const formattedCategories = categories.map((cat) => cat.name);
    const formattedItems = items.map((item) => ({
      name: item.name,
      belongsTo: categories.find((cat) => cat.id === item.categoryId)?.name || '',
    }));

    const payload = {
      title,
      media,
      categories: formattedCategories,
      items: formattedItems,
      points,
    };

    console.log('Submitting payload:', payload); // Debugging the payload

    try {
      // Replace submitCategorizationForm with your API call logic
      const response = await axios.post('/categorization/submit-form', payload);
      console.log('Server response:', response.data); // Log server response for debugging
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting categorization form:', error);
      if (error.response) {
        console.error('Server response:', error.response); // Log server error details
      }
      alert('Failed to submit form.');
    }
  };
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Categorization</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Media</label>
        <select
          value={media || ''}
          onChange={(e) => setMedia(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        >
          <option value="">None</option>
          <option value="Image">Image</option>
          <option value="Video">Video</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Points</label>
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(Number(e.target.value))}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          placeholder="Enter points (optional)"
        />
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Categories</h2>
        {categories.map((category) => (
          <div key={category.id} className="flex items-center mb-2">
            <input
              type="text"
              value={category.name}
              onChange={(e) => handleCategoryChange(category.id, e.target.value)}
              className="border border-gray-300 rounded-md p-2 flex-1"
              placeholder="Category Name"
            />
            <button
              onClick={() =>
                setCategories(categories.filter((cat) => cat.id !== category.id))
              }
              className="ml-2 text-red-500"
            >
              <MdClose size={20} />
            </button>
          </div>
        ))}
        <button
          onClick={addCategory}
          className="flex items-center mt-2 text-blue-500 hover:text-blue-700"
        >
          <IoMdAdd className="mr-1" /> Add Category
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold">Items</h2>
        {items.map((item) => (
          <div key={item.id} className="flex items-center mb-2">
            <input
              type="text"
              value={item.name}
              onChange={(e) => handleItemChange(item.id, e.target.value)}
              className="border border-gray-300 rounded-md p-2 flex-1"
              placeholder="Item Name"
            />
            <select
              value={item.categoryId ?? ''}
              onChange={(e) =>
                handleCategoryAssignment(item.id, Number(e.target.value))
              }
              className="ml-2 border border-gray-300 rounded-md p-2"
            >
              <option value="">Choose Category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <button
              onClick={() => setItems(items.filter((it) => it.id !== item.id))}
              className="ml-2 text-red-500"
            >
              <MdClose size={20} />
            </button>
          </div>
        ))}
        <button
          onClick={addItem}
          className="flex items-center mt-2 text-blue-500 hover:text-blue-700"
        >
          <IoMdAdd className="mr-1" /> Add Item
        </button>
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

export default CategorizeForm;
